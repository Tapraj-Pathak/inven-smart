export interface Product {
  id: string;
  name: string;
  quantity: number;
  expiryDate: string;
  imageUrl?: string;
  barcode?: string;
  category: string;
  minStock: number;
  price: number;
  lastUpdated: string;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
}

export interface DemandData {
  productName: string;
  demand: number;
  supply: number;
  date: string;
}

export interface Recommendation {
  id: string;
  message: string;
  type: 'urgent' | 'suggestion' | 'info';
  icon: string;
  trending: boolean;
}