import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/">Swad-e-Virasat</Link>
          <p>Homemade sweets, snacks & pickles — made with love.</p>
        </div>
        <div className="footer__links">
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Maa Ke Haath. All rights reserved.</p>
        </div>
      </div>
      <style>{`
        .footer {
          background: var(--cream-light);
          border-top: 1px solid var(--border);
          margin-top: auto;
        }
        .footer__inner {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 2.5rem 1.25rem;
        }
        .footer__brand a {
          font-family: var(--font-display);
          font-size: 2.00rem;
          display: block;
          margin-bottom: 0.25rem;
        }
        .footer__brand a:hover { color: var(--yellow-dark); }
        .footer__brand p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .footer__links {
          display: flex;
          gap: 1rem;
        }
        .footer__links a:hover { color: var(--yellow-dark); }
        .footer__bottom {
          padding: 1rem 1.25rem;
          border-top: 1px solid var(--border);
        }
        .footer__bottom p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
      `}</style>
    </footer>
  );
}
