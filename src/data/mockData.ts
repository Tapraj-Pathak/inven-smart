import { Product, DemandData, Recommendation } from '@/types/inventory';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'सूर्यमुखी तेल (Sunflower Oil) - 5L',
    quantity: 45,
    expiryDate: '2024-06-15',
    category: 'तेल/घ्यू (Oil/Ghee)',
    minStock: 20,
    price: 950,
    lastUpdated: '2024-01-15',
    status: 'in-stock'
  },
  {
    id: '2',
    name: 'बासमती चामल (Basmati Rice) - 25kg',
    quantity: 8,
    expiryDate: '2024-12-30',
    category: 'खाद्यान्न (Grains)',
    minStock: 15,
    price: 2500,
    lastUpdated: '2024-01-14',
    status: 'low-stock'
  },
  {
    id: '3',
    name: 'चिनी (Sugar) - 5kg',
    quantity: 0,
    expiryDate: '2024-08-20',
    category: 'खाद्यान्न (Grains)',
    minStock: 25,
    price: 420,
    lastUpdated: '2024-01-13',
    status: 'out-of-stock'
  },
  {
    id: '4',
    name: 'मसुर दाल (Red Lentils) - 5kg',
    quantity: 35,
    expiryDate: '2024-08-20',
    category: 'दाल (Pulses)',
    minStock: 20,
    price: 850,
    lastUpdated: '2024-01-15',
    status: 'in-stock'
  },
  {
    id: '5',
    name: 'दूध (Milk) - DDC 1L',
    quantity: 28,
    expiryDate: '2024-01-25',
    category: 'डेयरी (Dairy)',
    minStock: 30,
    price: 90,
    lastUpdated: '2024-01-15',
    status: 'low-stock'
  },
  {
    id: '6',
    name: 'अण्डा (Eggs) - 30 pieces',
    quantity: 52,
    expiryDate: '2024-02-10',
    category: 'डेयरी (Dairy)',
    minStock: 20,
    price: 450,
    lastUpdated: '2024-01-14',
    status: 'in-stock'
  },
  {
    id: '7',
    name: 'गोलभेडा (Tomatoes) - 5kg',
    quantity: 18,
    expiryDate: '2024-01-22',
    category: 'तरकारी (Vegetables)',
    minStock: 15,
    price: 250,
    lastUpdated: '2024-01-15',
    status: 'in-stock'
  },
  {
    id: '8',
    name: 'आलु (Potatoes) - 10kg',
    quantity: 34,
    expiryDate: '2024-02-05',
    category: 'तरकारी (Vegetables)',
    minStock: 20,
    price: 450,
    lastUpdated: '2024-01-14',
    status: 'in-stock'
  },
  {
    id: '9',
    name: 'चिया पत्ती (Tea Leaves) - 1kg',
    quantity: 42,
    expiryDate: '2025-03-30',
    category: 'पेय (Beverages)',
    minStock: 25,
    price: 320,
    lastUpdated: '2024-01-15',
    status: 'in-stock'
  },
  {
    id: '10',
    name: 'नुन (Salt) - 5kg',
    quantity: 15,
    expiryDate: '2026-12-01',
    category: 'मसला (Spices)',
    minStock: 20,
    price: 150,
    lastUpdated: '2024-01-14',
    status: 'low-stock'
  },
  {
    id: '11',
    name: 'वाइवाइ नूडल्स (Box - 30 packs)',
    quantity: 25,
    expiryDate: '2024-09-20',
    category: 'तयारी खाना (Instant Food)',
    minStock: 15,
    price: 450,
    lastUpdated: '2024-01-15',
    status: 'in-stock'
  },
  {
    id: '12',
    name: 'खसीको मासु (Mutton) - 1kg',
    quantity: 12,
    expiryDate: '2024-01-18',
    category: 'मासु (Meat)',
    minStock: 10,
    price: 1200,
    lastUpdated: '2024-01-15',
    status: 'in-stock'
  }
];

export const mockDemandData: DemandData[] = [
  { productName: 'सूर्यमुखी तेल', demand: 120, supply: 45, date: '2024-01-10' },
  { productName: 'चामल', demand: 85, supply: 8, date: '2024-01-10' },
  { productName: 'चिनी', demand: 95, supply: 0, date: '2024-01-10' },
  { productName: 'दाल', demand: 150, supply: 35, date: '2024-01-10' },
  { productName: 'दूध', demand: 110, supply: 28, date: '2024-01-10' },
  { productName: 'अण्डा', demand: 75, supply: 52, date: '2024-01-10' },
  { productName: 'सूर्यमुखी तेल', demand: 130, supply: 40, date: '2024-01-11' },
  { productName: 'चामल', demand: 90, supply: 10, date: '2024-01-11' },
  { productName: 'चिनी', demand: 100, supply: 5, date: '2024-01-11' },
  { productName: 'दाल', demand: 160, supply: 30, date: '2024-01-11' },
  { productName: 'दूध', demand: 120, supply: 25, date: '2024-01-11' },
  { productName: 'अण्डा', demand: 80, supply: 50, date: '2024-01-11' },
];

export const mockRecommendations: Recommendation[] = [
  {
    id: '1',
    message: 'नजिकका ग्राहकहरूले सूर्यमुखी तेल धेरै किन्दैछन्, स्टक बढाउनुहोस्! (Customers buying more Sunflower Oil)',
    type: 'urgent',
    icon: '📢',
    trending: true
  },
  {
    id: '2',
    message: 'चिनी सकियो! बिक्री नगुमाउन तुरुन्त अर्डर गर्नुहोस्। (Sugar out of stock!)',
    type: 'urgent',
    icon: '⚠️',
    trending: false
  },
  {
    id: '3',
    message: 'चामलको स्टक कम छ। यो हप्ता धेरै माग आउने अपेक्षा छ। (Rice inventory low)',
    type: 'suggestion',
    icon: '📊',
    trending: true
  },
  {
    id: '4',
    message: 'दूधको म्याद सकिँदैछ। छिटो बेच्न प्रमोशन गर्नुहोस्। (Milk expiring soon)',
    type: 'info',
    icon: '💡',
    trending: false
  },
  {
    id: '5',
    message: 'दशैं/तिहार नजिकिँदैछ - खसीको मासु र मिठाईको स्टक बढाउनुहोस्! (Festival season approaching)',
    type: 'suggestion',
    icon: '🎉',
    trending: true
  }
];