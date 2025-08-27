import { Product } from '@/types/inventory';

export const exportToCSV = (products: Product[], filename: string = 'inventory_report') => {
  // Define CSV headers
  const headers = [
    'ID',
    'Name',
    'Category',
    'Quantity',
    'Price',
    'Status',
    'Expiry Date',
    'Min Stock',
    'Last Updated'
  ];

  // Convert products to CSV rows
  const rows = products.map(product => [
    product.id,
    product.name,
    product.category,
    product.quantity,
    product.price,
    product.status,
    product.expiryDate,
    product.minStock,
    product.lastUpdated
  ]);

  // Combine headers and rows
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  // Create blob and download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportToJSON = (products: Product[], filename: string = 'inventory_report') => {
  const jsonContent = JSON.stringify(products, null, 2);
  
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.json`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};