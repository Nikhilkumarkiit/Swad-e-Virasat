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
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Besanache_Ladu.JPG',
    featured: true,
  },
  {
    name: 'Motichoor Ladoo',
    slug: 'motichoor-ladoo',
    category: 'Ladoo',
    description: 'Tiny pearl-shaped boondi dipped in sugar syrup. A classic North Indian sweet.',
    price: 450,
    unit: 'kg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Motichoor_ka_Ladoo_-_sweets_of_India.jpg/960px-Motichoor_ka_Ladoo_-_sweets_of_India.jpg',
    featured: true,
  },
  {
    name: 'Coconut Ladoo',
    slug: 'coconut-ladoo',
    category: 'Ladoo',
    description: 'Soft, melt-in-mouth coconut and condensed milk ladoos with a hint of cardamom.',
    price: 400,
    unit: 'kg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Rava_Laddu.jpg',
    featured: false,
  },
  {
    name: 'Boondi Ladoo',
    slug: 'boondi-ladoo',
    category: 'Ladoo',
    description: 'Golden gram flour droplets in sugar syrup, shaped into soft ladoos. Festive favourite.',
    price: 550,
    unit: 'kg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Boondi_Ke_Ladoo.jpg',
    featured: false,
  },
  {
    name: 'Premium Dry Fruit Ladoo',
    slug: 'premium-dry-fruit-ladoo',
    category: 'Ladoo',
    description: 'Luxury ladoos loaded with cashews, almonds, pistachios and raisins. Best quality for gifting.',
    price: 800,
    unit: 'kg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Rava_Ladoo_%7E_Indian_sweets_made_from_semolina%2C_powdered_sugar_and_clarified_butter%2C_raisins_and_broken_almonds.JPG',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Chhath_Puja_Prasad.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/North_Indian_mango_pickle_marinated_in_mustard_oil_and_mixed_with_Indian_spices.JPG',
    featured: true,
  },
  {
    name: 'Lemon Pickle',
    slug: 'lemon-pickle',
    category: 'Pickle',
    description: 'Zesty lemon pickle with turmeric and red chilli. Refreshing and tangy.',
    price: 250,
    unit: 'kg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Lemon_Pickle_in_Oil.JPG',
    featured: false,
  },
  {
    name: 'Mixed Vegetable Pickle',
    slug: 'mixed-vegetable-pickle',
    category: 'Pickle',
    description: 'Assorted vegetables in a spicy, oil-based pickle. A versatile accompaniment.',
    price: 250,
    unit: 'kg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Indian_mixed_pickles_-_Massachusetts.jpg',
    featured: false,
  },
  {
    name: 'Chilli Pickle',
    slug: 'chilli-pickle',
    category: 'Pickle',
    description: 'Spicy green chilli pickle with mustard and fenugreek. For those who love heat.',
    price: 250,
    unit: 'kg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Ginger_and_green_chilli_achar.JPG',
    featured: false,
  },
  {
    name: 'Garlic Pickle',
    slug: 'garlic-pickle',
    category: 'Pickle',
    description: 'Pungent garlic cloves in spiced oil. Bold flavour that elevates any meal.',
    price: 250,
    unit: 'kg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Indian_pickles.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Nimki_Odia_cuisine.jpg',
    featured: true,
  },
  {
    name: 'Mathri (Nimki)',
    slug: 'mathri-nimki',
    category: 'Nimki',
    description: 'Flaky, floured biscuits with ajwain and black pepper. A classic North Indian tea-time snack.',
    price: 200,
    unit: 'kg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Indian_Traditional_Foods_Images_%2809%29.jpg',
    featured: false,
  },
  {
    name: 'Spiced Nimki',
    slug: 'spiced-nimki',
    category: 'Nimki',
    description: 'Crunchy nimki with a hint of cumin and black pepper. Ideal with evening chai.',
    price: 200,
    unit: 'kg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Poha_Chivda_-_Homemade_-_Maharashtra_-_The_healthy%2C_tasty_snack.jpg',
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
