import 'dotenv/config';
import mongoose from 'mongoose';
import Product from './models/Product.js';

// Image URLs: Wikimedia Commons (CC licensed). All prices per kg as requested.
// Each image matches the actual product.
const products = [
  // —— 5 types of Ladoo (₹300–₹800 per kg as per quality) ——
  {
    name: 'Besan Ladoo',
    slug: 'besan-ladoo',
    category: 'Ladoo',
    description: 'Traditional gram flour ladoos, ghee-rich and flavoured with cardamom. Perfect for festivals and celebrations.',
    price: 300,
    unit: 'kg',
    image: 'beasn.png',
    featured: true,
  },
  {
    name: 'Motichoor Ladoo',
    slug: 'motichoor-ladoo',
    category: 'Ladoo',
    description: 'Tiny pearl-shaped boondi dipped in sugar syrup. A classic North Indian sweet.',
    price: 450,
    unit: 'kg',
    image: 'motichoor.png',
    featured: true,
  },
  {
    name: 'Coconut Ladoo',
    slug: 'coconut-ladoo',
    category: 'Ladoo',
    description: 'Soft, melt-in-mouth coconut and condensed milk ladoos with a hint of cardamom.',
    price: 400,
    unit: 'kg',
    image: 'coconut.png',
    featured: false,
  },
  {
    name: 'Boondi Ladoo',
    slug: 'boondi-ladoo',
    category: 'Ladoo',
    description: 'Golden gram flour droplets in sugar syrup, shaped into soft ladoos. Festive favourite.',
    price: 550,
    unit: 'kg',
    image: 'boondi.png',
    featured: false,
  },
  {
    name: 'Premium Dry Fruit Ladoo',
    slug: 'premium-dry-fruit-ladoo',
    category: 'Ladoo',
    description: 'Luxury ladoos loaded with cashews, almonds, pistachios and raisins. Best quality for gifting.',
    price: 800,
    unit: 'kg',
    image: 'dryfruit.png',
    featured: true,
  },
  // —— Bihari Thekua (₹300 per kg) ——
  {
    name: 'Bihari Thekua',
    slug: 'bihari-thekua',
    category: 'Thekua',
    description: 'Crisp wheat and jaggery cookies from Bihar. Made with ghee and fennel for a unique flavour. Traditional prasad for Chhath Puja.',
    price: 300,
    unit: 'kg',
    image: 'thekua.png',
    featured: true,
  },
  // —— 5 types of Pickle (₹250 per kg) ——
  {
    name: 'Mango Pickle',
    slug: 'mango-pickle',
    category: 'Pickle',
    description: 'Tangy raw mango pickle with mustard oil and spices. Pairs perfectly with dal and rice.',
    price: 250,
    unit: 'kg',
    image: 'mango.png',
    featured: true,
  },
  {
    name: 'Lemon Pickle',
    slug: 'lemon-pickle',
    category: 'Pickle',
    description: 'Zesty lemon pickle with turmeric and red chilli. Refreshing and tangy.',
    price: 250,
    unit: 'kg',
    image: 'lemon.png',
    featured: false,
  },
  {
    name: 'Mixed Vegetable Pickle',
    slug: 'mixed-vegetable-pickle',
    category: 'Pickle',
    description: 'Assorted vegetables in a spicy, oil-based pickle. A versatile accompaniment.',
    price: 250,
    unit: 'kg',
    image: 'mix.png',
    featured: false,
  },
  {
    name: 'Chilli Pickle',
    slug: 'chilli-pickle',
    category: 'Pickle',
    description: 'Spicy green chilli pickle with mustard and fenugreek. For those who love heat.',
    price: 250,
    unit: 'kg',
    image: 'cpickle.png',
    featured: false,
  },
  {
    name: 'Garlic Pickle',
    slug: 'garlic-pickle',
    category: 'Pickle',
    description: 'Pungent garlic cloves in spiced oil. Bold flavour that elevates any meal.',
    price: 250,
    unit: 'kg',
    image: 'garlic.png',
    featured: false,
  },
  // —— 3 types of Nimki (₹200 per kg), each with its own image ——
  {
    name: 'Plain Nimki',
    slug: 'plain-nimki',
    category: 'Nimki',
    description: 'Crispy diamond-shaped savoury snacks. Lightly spiced and perfect with chai.',
    price: 200,
    unit: 'kg',
    image: 'nimki.png',
    featured: true,
  },
  {
    name: 'Mathri (Nimki)',
    slug: 'mathri-nimki',
    category: 'Nimki',
    description: 'Flaky, floured biscuits with ajwain and black pepper. A classic North Indian tea-time snack.',
    price: 200,
    unit: 'kg',
    image: 'mathri.png',
    featured: false,
  },
  {
    name: 'Spiced Nimki',
    slug: 'spiced-nimki',
    category: 'Nimki',
    description: 'Crunchy nimki with a hint of cumin and black pepper. Ideal with evening chai.',
    price: 200,
    unit: 'kg',
    image: 'mixnimki.png',
    featured: false,
  },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/homemade-products');
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Seeded', products.length, 'products');
  await mongoose.disconnect();
}

seed().catch(console.error);
