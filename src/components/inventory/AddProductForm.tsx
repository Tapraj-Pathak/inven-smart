import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FiUpload, FiCamera } from 'react-icons/fi';
import { BsUpcScan } from 'react-icons/bs';
import { toast } from 'sonner';

interface AddProductFormProps {
  open: boolean;
  onClose: () => void;
  onAdd: (product: any) => void;
}

export function AddProductForm({ open, onClose, onAdd }: AddProductFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    expiryDate: '',
    category: '',
    minStock: '',
    price: '',
    barcode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.quantity || !formData.expiryDate || !formData.category || !formData.price) {
      toast.error('Please fill in all required fields');
      return;
    }

    const newProduct = {
      id: Date.now().toString(),
      name: formData.name,
      quantity: parseInt(formData.quantity),
      expiryDate: formData.expiryDate,
      category: formData.category,
      minStock: parseInt(formData.minStock) || 10,
      price: parseFloat(formData.price),
      barcode: formData.barcode,
      lastUpdated: new Date().toISOString(),
      status: parseInt(formData.quantity) === 0 ? 'out-of-stock' : 
              parseInt(formData.quantity) <= (parseInt(formData.minStock) || 10) ? 'low-stock' : 'in-stock'
    };

    onAdd(newProduct);
    toast.success('Product added successfully!');
    setFormData({
      name: '',
      quantity: '',
      expiryDate: '',
      category: '',
      minStock: '',
      price: '',
      barcode: ''
    });
    onClose();
  };

  const handleScanBarcode = () => {
    toast.info('Barcode scanner would open here');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>नयाँ सामान थप्नुहोस् (Add New Product)</DialogTitle>
        </DialogHeader>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Product Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Cooking Oil"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity *</Label>
              <Input
                id="quantity"
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="0"
                min="0"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">मूल्य NPR (Price) *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="0.00"
                min="0"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="खाद्यान्न (Grains)">खाद्यान्न (Grains)</SelectItem>
                <SelectItem value="तेल/घ्यू (Oil/Ghee)">तेल/घ्यू (Oil/Ghee)</SelectItem>
                <SelectItem value="डेयरी (Dairy)">डेयरी (Dairy)</SelectItem>
                <SelectItem value="दाल (Pulses)">दाल (Pulses)</SelectItem>
                <SelectItem value="तरकारी (Vegetables)">तरकारी (Vegetables)</SelectItem>
                <SelectItem value="मसला (Spices)">मसला (Spices)</SelectItem>
                <SelectItem value="पेय (Beverages)">पेय (Beverages)</SelectItem>
                <SelectItem value="तयारी खाना (Instant Food)">तयारी खाना (Instant Food)</SelectItem>
                <SelectItem value="मासु (Meat)">मासु (Meat)</SelectItem>
                <SelectItem value="घरायसी (Household)">घरायसी (Household)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date *</Label>
              <Input
                id="expiryDate"
                type="date"
                value={formData.expiryDate}
                onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="minStock">Min Stock</Label>
              <Input
                id="minStock"
                type="number"
                value={formData.minStock}
                onChange={(e) => setFormData({ ...formData, minStock: e.target.value })}
                placeholder="10"
                min="0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="barcode">Barcode / QR Code</Label>
            <div className="flex gap-2">
              <Input
                id="barcode"
                value={formData.barcode}
                onChange={(e) => setFormData({ ...formData, barcode: e.target.value })}
                placeholder="Scan or enter code"
              />
              <Button
                type="button"
                onClick={handleScanBarcode}
                variant="outline"
                size="icon"
              >
                <BsUpcScan className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Product Image (Optional)</Label>
            <div className="flex gap-2">
              <Button type="button" variant="outline" className="flex-1">
                <FiUpload className="mr-2 h-4 w-4" />
                Upload Image
              </Button>
              <Button type="button" variant="outline" className="flex-1">
                <FiCamera className="mr-2 h-4 w-4" />
                Take Photo
              </Button>
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="gradient" className="flex-1">
              Add Product
            </Button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}