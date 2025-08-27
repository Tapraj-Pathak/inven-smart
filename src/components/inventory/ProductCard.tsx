import { motion } from 'framer-motion';
import { Product } from '@/types/inventory';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FiMinus, FiPlus, FiAlertTriangle, FiCalendar } from 'react-icons/fi';
import { format, differenceInDays } from 'date-fns';

interface ProductCardProps {
  product: Product;
  onUpdateQuantity: (id: string, delta: number) => void;
  index: number;
}

export function ProductCard({ product, onUpdateQuantity, index }: ProductCardProps) {
  const expiryDays = differenceInDays(new Date(product.expiryDate), new Date());
  const isExpiringSoon = expiryDays <= 7 && expiryDays > 0;
  const isExpired = expiryDays <= 0;

  const getStatusColor = () => {
    if (product.status === 'out-of-stock') return 'bg-destructive text-destructive-foreground';
    if (product.status === 'low-stock') return 'bg-warning text-warning-foreground';
    return 'bg-success text-success-foreground';
  };

  const getStatusLabel = () => {
    if (product.status === 'out-of-stock') return 'Out of Stock';
    if (product.status === 'low-stock') return 'Low Stock';
    return 'In Stock';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className="bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-all p-4"
    >
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-foreground">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>
          <Badge className={getStatusColor()}>
            {getStatusLabel()}
          </Badge>
        </div>

        {/* Stock Info */}
        <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
          <div>
            <p className="text-2xl font-bold text-foreground">{product.quantity}</p>
            <p className="text-xs text-muted-foreground">units</p>
          </div>
          <div className="flex gap-1">
            <Button
              onClick={() => onUpdateQuantity(product.id, -1)}
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={product.quantity === 0}
            >
              <FiMinus className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => onUpdateQuantity(product.id, 1)}
              variant="outline"
              size="icon"
              className="h-8 w-8"
            >
              <FiPlus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Expiry & Price */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            {(isExpired || isExpiringSoon) && (
              <FiAlertTriangle className={`h-4 w-4 ${isExpired ? 'text-destructive' : 'text-warning'}`} />
            )}
            <FiCalendar className="h-4 w-4 text-muted-foreground" />
            <span className={`text-sm ${isExpired ? 'text-destructive' : isExpiringSoon ? 'text-warning' : 'text-muted-foreground'}`}>
              {format(new Date(product.expiryDate), 'MMM dd, yyyy')}
            </span>
          </div>
          <span className="font-semibold text-primary">${product.price}</span>
        </div>

        {/* Min Stock Warning */}
        {product.quantity <= product.minStock && (
          <div className="bg-warning/10 border border-warning/20 rounded-lg p-2">
            <p className="text-xs text-warning">
              Below minimum stock level ({product.minStock} units)
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}