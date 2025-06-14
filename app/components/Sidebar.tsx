import { Link } from "@remix-run/react";

export default function Sidebar() {
  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            <li><Link to="/">Welcome</Link></li>
            <li><Link to="/about">Who we are</Link></li>
            <li><Link to="/services">What we do</Link></li>
            <li><Link to="/contact">Get in touch</Link></li>
          </ul>
        </nav>
      </div>
    </section>
  );
} 