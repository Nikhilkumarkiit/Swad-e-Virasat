const API_BASE = import.meta.env.VITE_API_URL;

export async function getProducts(params = {}) {
  const q = new URLSearchParams(params).toString();
  const res = await fetch(`${API_BASE}/api/products${q ? `?${q}` : ''}`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function getProductBySlug(slug) {
  const res = await fetch(`${API_BASE}/api/products/${slug}`);
  if (!res.ok) throw new Error('Product not found');
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${API_BASE}/api/products/categories`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}