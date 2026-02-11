import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../api';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts({ featured: 'true' })
      .then(setFeatured)
      .catch(() => setFeatured([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <h1 className="hero__title">Swad-e-Virasat</h1>
          <p className="hero__tagline">Homemade sweets, snacks & pickles — made with love and tradition.</p>
          <Link to="/products" className="btn btn-primary">Browse products</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">Our offerings</h2>
          <p className="section__subtitle">Ladoo, Thekua, Pickle, Nimki and more — prepared the way you remember.</p>
          <div className="categories-row">
            <Link to="/products?category=Ladoo" className="category-pill">Ladoo</Link>
            <Link to="/products?category=Thekua" className="category-pill">Thekua</Link>
            <Link to="/products?category=Pickle" className="category-pill">Pickle</Link>
            <Link to="/products?category=Nimki" className="category-pill">Nimki</Link>
            <Link to="/products" className="category-pill">All</Link>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <h2 className="section__title">Popular picks</h2>
          {loading ? (
            <p className="loading">Loading…</p>
          ) : featured.length === 0 ? (
            <p className="empty">No featured products yet. Check back soon!</p>
          ) : (
            <div className="product-grid">
              {featured.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          )}
          <div className="section__cta">
            <Link to="/products" className="btn btn-secondary">View all products</Link>
          </div>
        </div>
      </section>

      <section className="section cta-block">
        <div className="container">
          <h2 className="cta-block__title">Order for festivals & occasions</h2>
          <p className="cta-block__text">Bulk orders and custom assortments welcome. Get in touch.</p>
          <Link to="/contact" className="btn btn-primary">Contact us</Link>
        </div>
      </section>

      <style>{`
        .hero {
          background: linear-gradient(180deg, var(--cream-light) 0%, var(--white) 100%);
          padding: 4rem 1.25rem 5rem;
          text-align: center;
        }
        .hero__title {
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          margin-bottom: 0.75rem;
          color: var(--text);
        }
        .hero__tagline {
          font-size: 1.15rem;
          color: var(--text-muted);
          max-width: 32rem;
          margin: 0 auto 1.5rem;
        }
        .section { padding: 3rem 0; }
        .section--cream { background: var(--cream-light); }
        .section__title {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .section__subtitle {
          text-align: center;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        .categories-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }
        .category-pill {
          padding: 0.5rem 1rem;
          background: var(--white-pure);
          border: 1px solid var(--border);
          border-radius: 9999px;
          font-weight: 500;
          font-size: 0.9rem;
          transition: background 0.15s, border-color 0.15s;
        }
        .category-pill:hover {
          background: var(--yellow);
          border-color: var(--yellow);
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .section__cta { text-align: center; }
        .loading, .empty {
          text-align: center;
          color: var(--text-muted);
          padding: 2rem;
        }
        .cta-block {
          background: var(--yellow);
          color: var(--text);
          text-align: center;
          padding: 3rem 1.25rem;
        }
        .cta-block__title { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .cta-block__text { margin-bottom: 1.5rem; opacity: 0.95; }
        .cta-block .btn-primary {
          background: var(--white-pure);
          color: var(--text);
        }
        .cta-block .btn-primary:hover {
          background: var(--cream-light);
          color: var(--text);
        }
      `}</style>
    </>
  );
}
