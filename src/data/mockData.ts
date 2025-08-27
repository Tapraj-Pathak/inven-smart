import { Product, DemandData, Recommendation } from '@/types/inventory';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Cooking Oil',
    quantity: 45,
    expiryDate: '2024-06-15',
    category: 'Grocery',
    minStock: 20,
    price: 12.99,
    lastUpdated: '2024-01-15',
    status: 'in-stock'
  },
  {
    id: '2',
    name: 'Rice (5kg)',
    quantity: 8,
    expiryDate: '2024-12-30',
    category: 'Grocery',
    minStock: 15,
    price: 24.99,
    lastUpdated: '2024-01-14',
    status: 'low-stock'
  },
  {
    id: '3',
    name: 'Sugar (1kg)',
    quantity: 0,
    expiryDate: '2024-08-20',
    category: 'Grocery',
    minStock: 25,
    price: 4.99,
    lastUpdated: '2024-01-13',
    status: 'out-of-stock'
  },
  {
    id: '4',
    name: 'Bread',
    quantity: 35,
    expiryDate: '2024-01-20',
    category: 'Bakery',
    minStock: 20,
    price: 2.99,
    lastUpdated: '2024-01-15',
    status: 'in-stock'
  },
  {
    id: '5',
    name: 'Milk (1L)',
    quantity: 28,
    expiryDate: '2024-01-25',
    category: 'Dairy',
    minStock: 30,
    price: 3.49,
    lastUpdated: '2024-01-15',
    status: 'low-stock'
  },
  {
    id: '6',
    name: 'Eggs (12 pack)',
    quantity: 52,
    expiryDate: '2024-02-10',
    category: 'Dairy',
    minStock: 20,
    price: 5.99,
    lastUpdated: '2024-01-14',
    status: 'in-stock'
  },
  {
    id: '7',
    name: 'Tomatoes (1kg)',
    quantity: 18,
    expiryDate: '2024-01-22',
    category: 'Produce',
    minStock: 15,
    price: 3.99,
    lastUpdated: '2024-01-15',
    status: 'in-stock'
  },
  {
    id: '8',
    name: 'Potatoes (2kg)',
    quantity: 34,
    expiryDate: '2024-02-05',
    category: 'Produce',
    minStock: 20,
    price: 4.49,
    lastUpdated: '2024-01-14',
    status: 'in-stock'
  }
];

export const mockDemandData: DemandData[] = [
  { productName: 'Cooking Oil', demand: 120, supply: 45, date: '2024-01-10' },
  { productName: 'Rice', demand: 85, supply: 8, date: '2024-01-10' },
  { productName: 'Sugar', demand: 95, supply: 0, date: '2024-01-10' },
  { productName: 'Bread', demand: 150, supply: 35, date: '2024-01-10' },
  { productName: 'Milk', demand: 110, supply: 28, date: '2024-01-10' },
  { productName: 'Eggs', demand: 75, supply: 52, date: '2024-01-10' },
  { productName: 'Cooking Oil', demand: 130, supply: 40, date: '2024-01-11' },
  { productName: 'Rice', demand: 90, supply: 10, date: '2024-01-11' },
  { productName: 'Sugar', demand: 100, supply: 5, date: '2024-01-11' },
  { productName: 'Bread', demand: 160, supply: 30, date: '2024-01-11' },
  { productName: 'Milk', demand: 120, supply: 25, date: '2024-01-11' },
  { productName: 'Eggs', demand: 80, supply: 50, date: '2024-01-11' },
];

export const mockRecommendations: Recommendation[] = [
  {
    id: '1',
    message: 'Customers nearby are buying more Cooking Oil, you should stock up!',
    type: 'urgent',
    icon: '📢',
    trending: true
  },
  {
    id: '2',
    message: 'Sugar is out of stock! Reorder immediately to avoid lost sales.',
    type: 'urgent',
    icon: '⚠️',
    trending: false
  },
  {
    id: '3',
    message: 'Rice inventory is critically low. Expected high demand this week.',
    type: 'suggestion',
    icon: '📊',
    trending: true
  },
  {
    id: '4',
    message: 'Bread expires soon. Consider a promotion to move inventory.',
    type: 'info',
    icon: '💡',
    trending: false
  }
];