import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { name, slug, category, description, price, unit, featured, image } = product;

  return (
    <Link to={`/products/${slug}`} className="product-card card">
      <div className="product-card__image">
        {image ? (
          <img src={image} alt={name} className="product-card__img" loading="lazy" />
        ) : (
          <div className="product-card__placeholder" />
        )}
        {featured && <span className="product-card__badge">Popular</span>}
      </div>
      <div className="product-card__body">
        <span className="product-card__category">{category}</span>
        <h3 className="product-card__title">{name}</h3>
        <p className="product-card__desc">{(description || '').slice(0, 80)}…</p>
        <p className="product-card__price">
          ₹{price} <span>/ {unit}</span>
        </p>
      </div>
      <style>{`
        .product-card {
          display: block;
          height: 100%;
        }
        .product-card:hover { transform: translateY(-2px); }
        .product-card__image {
          aspect-ratio: 4/3;
          background: var(--cream);
          position: relative;
        }
        .product-card__placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--cream) 0%, var(--cream-light) 100%);
        }
        .product-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .product-card__badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: var(--yellow);
          color: var(--text);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
        }
        .product-card__body { padding: 1.25rem; }
        .product-card__category {
          font-size: 0.8rem;
          color: var(--yellow-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .product-card__title {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
        }
        .product-card__desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }
        .product-card__price {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text);
        }
        .product-card__price span { font-weight: 400; color: var(--text-muted); font-size: 0.9rem; }
      `}</style>
    </Link>
  );
}
