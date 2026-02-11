import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProducts, getCategories } from '../api';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(categoryParam || '');

  useEffect(() => {
    setFilter(categoryParam || '');
  }, [categoryParam]);

  useEffect(() => {
    setLoading(true);
    const params = filter ? { category: filter } : {};
    Promise.all([getProducts(params), getCategories()])
      .then(([prods, cats]) => {
        setProducts(prods);
        setCategories(cats);
      })
      .catch(() => {
        setProducts([]);
        setCategories([]);
      })
      .finally(() => setLoading(false));
  }, [filter]);

  return (
    <div className="products-page">
      <div className="products-page__header">
        <div className="container">
          <h1 className="products-page__title">Our products</h1>
          <p className="products-page__subtitle">Ladoo, Thekua, Pickle, Nimki and more — homemade with care.</p>
          {categories.length > 0 && (
            <div className="products-page__filters">
              <button
                type="button"
                className={`filter-btn ${!filter ? 'filter-btn--active' : ''}`}
                onClick={() => setFilter('')}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-btn ${filter === cat ? 'filter-btn--active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="container products-page__content">
        {loading ? (
          <p className="loading">Loading products…</p>
        ) : products.length === 0 ? (
          <p className="empty">No products in this category. Try another filter or check back later.</p>
        ) : (
          <div className="product-grid">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        .products-page__header {
          background: var(--cream-light);
          border-bottom: 1px solid var(--border);
          padding: 2rem 0;
        }
        .products-page__title {
          font-size: 1.75rem;
          margin-bottom: 0.25rem;
          text-align: center;
        }
        .products-page__subtitle {
          text-align: center;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }
        .products-page__filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }
        .filter-btn {
          padding: 0.5rem 1rem;
          background: var(--white-pure);
          border: 1px solid var(--border);
          border-radius: 9999px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: background 0.15s, border-color 0.15s;
        }
        .filter-btn:hover, .filter-btn--active {
          background: var(--yellow);
          border-color: var(--yellow);
        }
        .products-page__content {
          padding: 2rem 0 4rem;
        }
        .products-page__content .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .products-page .loading, .products-page .empty {
          text-align: center;
          color: var(--text-muted);
          padding: 3rem;
        }
      `}</style>
    </div>
  );
}
