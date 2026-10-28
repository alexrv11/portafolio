import { useEffect, useRef, useState } from "react";

const API_URL = import.meta.env.VITE_AGENT_API_URL as string | undefined;

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "What's your Go experience?",
  "Are you open to new roles?",
  "Tell me about your fintech background",
  "What companies have you worked at?",
  "Can I download your resume?",
];

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: "var(--color-text-muted)",
            animation: `typing-bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes typing-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function SendIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22 11 13 2 9l20-7z" />
    </svg>
  );
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() =>
    typeof crypto !== "undefined" ? crypto.randomUUID() : Math.random().toString(36).slice(2)
  );
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setShowSuggestions(false);
    const next: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setLoading(true);

    if (!API_URL) {
      setTimeout(() => {
        setMessages([
          ...next,
          {
            role: "assistant",
            content:
              "The AI agent isn't deployed yet — check back soon! In the meantime, feel free to use the contact form below.",
          },
        ]);
        setLoading(false);
      }, 600);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, messages: next }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error?.message ?? `HTTP ${res.status}`);
      }

      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: "Something went wrong on my end. Please try again or use the contact form.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  return (
    <div
      className="flex flex-col rounded-2xl border overflow-hidden"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
        boxShadow: "var(--shadow-md)",
        height: "480px",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3 border-b shrink-0"
        style={{ borderColor: "var(--color-border)" }}
      >
        {/* Status dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span
            className="absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{
              background: "var(--color-brand)",
              animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
            }}
          />
          <span
            className="relative inline-flex rounded-full h-2.5 w-2.5"
            style={{ background: "var(--color-brand)" }}
          />
          <style>{`@keyframes ping { 75%,100%{transform:scale(2);opacity:0} }`}</style>
        </span>
        <div>
          <p
            className="text-sm font-semibold leading-none"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-display)" }}
          >
            Ask Alex&apos;s AI
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
          >
            Powered by Claude on Bedrock
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 min-h-0">
        {messages.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-2 select-none">
            <p
              className="text-sm font-medium"
              style={{ color: "var(--color-text-muted)" }}
            >
              Ask me anything about Alex&apos;s experience, skills, or availability.
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className="max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
              style={
                msg.role === "user"
                  ? {
                      background: "var(--color-brand)",
                      color: "var(--color-on-brand)",
                      borderBottomRightRadius: 4,
                    }
                  : {
                      background: "var(--color-surface-2)",
                      color: "var(--color-text)",
                      borderBottomLeftRadius: 4,
                    }
              }
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div
              className="rounded-2xl"
              style={{
                background: "var(--color-surface-2)",
                borderBottomLeftRadius: 4,
              }}
            >
              <TypingDots />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      {showSuggestions && messages.length === 0 && (
        <div
          className="px-4 pb-2 flex flex-wrap gap-2 shrink-0 border-t pt-3"
          style={{ borderColor: "var(--color-border)" }}
        >
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="text-xs px-3 py-1.5 rounded-full border transition-colors duration-150"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-mono)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-brand)";
                (e.currentTarget as HTMLElement).style.color = "var(--color-brand-text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)";
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div
        className="flex items-center gap-2 px-3 py-3 border-t shrink-0"
        style={{ borderColor: "var(--color-border)" }}
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          placeholder="Ask a question…"
          maxLength={2000}
          className="flex-1 bg-transparent outline-none text-sm placeholder:text-[var(--color-text-muted)] disabled:opacity-50"
          style={{ color: "var(--color-text)" }}
        />
        <button
          onClick={() => send(input)}
          disabled={loading || !input.trim()}
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-150 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            background: "var(--color-brand)",
            color: "var(--color-on-brand)",
          }}
          aria-label="Send message"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
