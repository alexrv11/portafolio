import { useEffect } from "react";

interface SnackbarProps {
  message: string;
  open: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Snackbar({ message, open, onClose, duration = 3000 }: SnackbarProps) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[20000] bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 animate-fade-in">
      {message}
    </div>
  );
}
