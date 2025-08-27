import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { BottomNav } from '@/components/layout/BottomNav';
import { ProductCard } from '@/components/inventory/ProductCard';
import { AddProductForm } from '@/components/inventory/AddProductForm';
import { DemandSupplyChart } from '@/components/analytics/DemandSupplyChart';
import { RecommendationWidget } from '@/components/dashboard/RecommendationWidget';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { mockProducts, mockDemandData, mockRecommendations } from '@/data/mockData';
import { Product } from '@/types/inventory';
import { FiPackage, FiAlertTriangle, FiTrendingUp, FiDollarSign, FiDownload } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { exportToCSV } from '@/utils/exportUtils';

const Index = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [searchValue, setSearchValue] = useState('');
  const [activeView, setActiveView] = useState('dashboard');
  const [showAddProduct, setShowAddProduct] = useState(false);

  // Filter products based on search
  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.category.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [products, searchValue]);

  // Calculate stats
  const stats = useMemo(() => {
    const totalProducts = products.length;
    const outOfStock = products.filter(p => p.status === 'out-of-stock').length;
    const lowStock = products.filter(p => p.status === 'low-stock').length;
    const totalValue = products.reduce((sum, p) => sum + (p.quantity * p.price), 0);
    
    return { totalProducts, outOfStock, lowStock, totalValue };
  }, [products]);

  const handleUpdateQuantity = (id: string, delta: number) => {
    setProducts(prev => prev.map(product => {
      if (product.id === id) {
        const newQuantity = Math.max(0, product.quantity + delta);
        const newStatus = newQuantity === 0 ? 'out-of-stock' : 
                         newQuantity <= product.minStock ? 'low-stock' : 'in-stock';
        
        return {
          ...product,
          quantity: newQuantity,
          status: newStatus,
          lastUpdated: new Date().toISOString()
        };
      }
      return product;
    }));
    
    toast.success(`Stock updated successfully`);
  };

  const handleAddProduct = (newProduct: Product) => {
    setProducts(prev => [newProduct, ...prev]);
  };

  const handleExport = () => {
    exportToCSV(products);
    toast.success('Inventory exported successfully!');
  };

  const renderView = () => {
    switch (activeView) {
      case 'analytics':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <DemandSupplyChart data={mockDemandData} />
            <RecommendationWidget recommendations={mockRecommendations} />
          </motion.div>
        );
      
      case 'inventory':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">All Products</h2>
              <Button onClick={handleExport} variant="outline" size="sm">
                <FiDownload className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onUpdateQuantity={handleUpdateQuantity}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        );
      
      default: // dashboard
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatsCard
                title="Total Products"
                value={stats.totalProducts}
                icon={<FiPackage className="h-5 w-5" />}
                color="primary"
                index={0}
              />
              <StatsCard
                title="Out of Stock"
                value={stats.outOfStock}
                icon={<FiAlertTriangle className="h-5 w-5" />}
                color="destructive"
                index={1}
              />
              <StatsCard
                title="Low Stock"
                value={stats.lowStock}
                icon={<FiTrendingUp className="h-5 w-5" />}
                color="warning"
                index={2}
              />
              <StatsCard
                title="Total Value"
                value={`NPR ${stats.totalValue.toLocaleString('en-NP')}`}
                icon={<FiDollarSign className="h-5 w-5" />}
                color="success"
                index={3}
              />
            </div>

            {/* Recommendations */}
            <RecommendationWidget recommendations={mockRecommendations} />

            {/* Recent Products */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Recent Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.slice(0, 6).map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onUpdateQuantity={handleUpdateQuantity}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onMenuClick={() => {}}
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />
      
      <main className="px-4 py-6 pb-24 md:pb-6 max-w-7xl mx-auto">
        {renderView()}
      </main>

      <BottomNav
        activeView={activeView}
        onViewChange={setActiveView}
        onAddProduct={() => setShowAddProduct(true)}
      />

      <AddProductForm
        open={showAddProduct}
        onClose={() => setShowAddProduct(false)}
        onAdd={handleAddProduct}
      />
    </div>
  );
};

export default Index;
