const API_BASE = '/api';

export async function getProducts(params = {}) {
  const q = new URLSearchParams(params).toString();
  const res = await fetch(`${API_BASE}/products${q ? `?${q}` : ''}`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function getProductBySlug(slug) {
  const res = await fetch(`${API_BASE}/products/${slug}`);
  if (!res.ok) throw new Error('Product not found');
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${API_BASE}/products/categories`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}
