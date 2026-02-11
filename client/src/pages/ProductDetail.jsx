import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug } from '../api';

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getProductBySlug(slug)
      .then(setProduct)
      .catch(() => setError('Product not found'))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="container page-pad"><p className="loading">Loading…</p></div>;
  if (error || !product) {
    return (
      <div className="container page-pad">
        <p className="empty">{error || 'Product not found.'}</p>
        <Link to="/products" className="btn btn-primary">Back to products</Link>
      </div>
    );
  }

  const { name, category, description, price, unit, featured, image } = product;

  return (
    <div className="product-detail">
      <div className="container">
        <Link to="/products" className="product-detail__back">← All products</Link>
        <div className="product-detail__grid">
          <div className="product-detail__image">
            {image ? (
              <img src={image} alt={name} className="product-detail__img" />
            ) : (
              <div className="product-detail__placeholder" />
            )}
            {featured && <span className="product-detail__badge">Popular</span>}
          </div>
          <div className="product-detail__info">
            <span className="product-detail__category">{category}</span>
            <h1 className="product-detail__title">{name}</h1>
            <p className="product-detail__price">₹{price} <span>/ {unit}</span></p>
            <p className="product-detail__desc">{description}</p>
            <a href="/contact" className="btn btn-primary">Enquire / Order</a>
          </div>
        </div>
      </div>
      <style>{`
        .page-pad { padding: 3rem 1.25rem; }
        .loading, .empty { margin-bottom: 1rem; }
        .product-detail { padding: 2rem 0 4rem; }
        .product-detail__back {
          display: inline-block;
          margin-bottom: 1.5rem;
          font-weight: 500;
          color: var(--text-muted);
        }
        .product-detail__back:hover { color: var(--yellow-dark); }
        .product-detail__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .product-detail__grid { grid-template-columns: 1fr; }
        }
        .product-detail__image {
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, var(--cream) 0%, var(--cream-light) 100%);
          border-radius: 1rem;
          position: relative;
        }
        .product-detail__placeholder { width: 100%; height: 100%; border-radius: inherit; }
        .product-detail__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
          display: block;
        }
        .product-detail__badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--yellow);
          color: var(--text);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
        }
        .product-detail__category {
          font-size: 0.85rem;
          color: var(--yellow-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .product-detail__title { font-size: 1.75rem; margin-bottom: 0.5rem; }
        .product-detail__price {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .product-detail__price span { font-weight: 400; color: var(--text-muted); font-size: 1rem; }
        .product-detail__desc {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
}
