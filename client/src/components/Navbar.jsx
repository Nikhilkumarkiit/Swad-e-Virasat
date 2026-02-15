import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? 'nav-link--active' : ''}`;

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          Swad-e-Virasat
        </Link>
        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" className={linkClass} onClick={() => setOpen(false)}>
            Products
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
      <style>{`
        .navbar {
          background: var(--white-pure);
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 4rem;
        }
        .navbar__brand {
          font-family: var(--font-display);
          font-size: 2.50rem;
          color: var(--text);
        }
        .navbar__brand:hover { color: var(--yellow-dark); }
        .navbar__toggle {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          background: none;
        }
        .navbar__toggle span {
          width: 22px;
          height: 2px;
          background: var(--text);
          transition: transform 0.2s;
        }
        .navbar__toggle span:nth-child(1).open { transform: rotate(45deg) translate(5px, 5px); }
        .navbar__toggle span:nth-child(2).open { opacity: 0; }
        .navbar__toggle span:nth-child(3).open { transform: rotate(-45deg) translate(5px, -5px); }
        .navbar__nav {
          display: flex;
          gap: 0.5rem;
        }
        .nav-link {
          padding: 0.5rem 0.75rem;
          font-weight: 500;
          border-radius: 0.5rem;
          transition: background 0.15s, color 0.15s;
        }
        .nav-link:hover, .nav-link--active {
          background: var(--cream-light);
          color: var(--yellow-dark);
        }
        @media (max-width: 640px) {
          .navbar__nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--white-pure);
            border-bottom: 1px solid var(--border);
            flex-direction: column;
            padding: 1rem;
            display: none;
          }
          .navbar__nav--open { display: flex; }
        }
        @media (min-width: 641px) {
          .navbar__toggle { display: none; }
        }
      `}</style>
    </header>
  );
}
