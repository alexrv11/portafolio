import { Link } from "@remix-run/react";

export default function Home() {
  return (
    <section id="intro" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <h1>Hyperspace</h1>
        <p>
          Just another fine responsive site template designed by{" "}
          <a href="http://html5up.net">HTML5 UP</a>
          <br />
          and released for free under the{" "}
          <a href="http://html5up.net/license">Creative Commons</a>.
        </p>
        <ul className="actions">
          <li>
            <Link to="/about" className="button scrolly">
              Learn more
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
} 