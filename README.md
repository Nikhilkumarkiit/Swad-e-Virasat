# Maa Ke Haath — Homemade Products Website

Full-stack website for a homemade product business (Ladoo, Thekua, Pickle, Nimki, etc.) with a **yellow-and-white** themed React frontend, Node.js/Express backend, and MongoDB.

## Stack

- **Frontend:** React 18, React Router, Vite — yellow/cream/white theme
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose

## Prerequisites

- Node.js 18+
- MongoDB running locally (e.g. `mongod`) or a MongoDB Atlas connection string

## Setup

### 1. Backend

```bash
cd server
npm install
cp .env.example .env
# Edit .env and set MONGODB_URI if needed (default: mongodb://localhost:27017/homemade-products)
npm run seed
npm run dev
```

Server runs at **http://localhost:5000**. API: `GET /api/products`, `GET /api/products/categories`, `GET /api/products/:slug`.

### 2. Frontend

```bash
cd client
npm install
npm run dev
```

App runs at **http://localhost:5173**. Vite proxies `/api` to the backend.

## Scripts

| Location | Command    | Description              |
|----------|------------|--------------------------|
| server   | `npm run dev`  | Start API with watch     |
| server   | `npm run seed` | Seed sample products     |
| client   | `npm run dev`  | Start React dev server   |
| client   | `npm run build`| Production build         |

## Project structure

```
project1/
├── client/          # React frontend (Vite)
│   ├── src/
│   │   ├── api.js
│   │   ├── App.jsx, main.jsx, index.css
│   │   ├── components/  (Navbar, Footer, ProductCard)
│   │   └── pages/       (Home, Products, ProductDetail, Contact)
│   └── index.html
├── server/          # Express API
│   ├── models/Product.js
│   ├── routes/products.js
│   ├── server.js
│   └── seed.js
└── README.md
```

Replace placeholder contact details on the Contact page and in the footer with your real phone, email, and location.
