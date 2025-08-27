import { motion } from 'framer-motion';
import { FiHome, FiPackage, FiBarChart2, FiPlus, FiSettings } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

interface BottomNavProps {
  activeView: string;
  onViewChange: (view: string) => void;
  onAddProduct: () => void;
}

export function BottomNav({ activeView, onViewChange, onAddProduct }: BottomNavProps) {
  const navItems = [
    { id: 'dashboard', icon: FiHome, label: 'गृह' },
    { id: 'inventory', icon: FiPackage, label: 'सामान' },
    { id: 'add', icon: FiPlus, label: 'थप्नुहोस्', special: true },
    { id: 'analytics', icon: FiBarChart2, label: 'विश्लेषण' },
    { id: 'settings', icon: FiSettings, label: 'सेटिङ' }
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-medium md:hidden"
    >
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          if (item.special) {
            return (
              <Button
                key={item.id}
                onClick={onAddProduct}
                variant="gradient"
                size="icon"
                className="h-12 w-12 rounded-full shadow-glow"
              >
                <Icon className="h-6 w-6" />
              </Button>
            );
          }
          
          return (
            <Button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              variant="ghost"
              size="icon"
              className={`flex flex-col gap-1 h-auto py-2 ${
                activeView === item.id ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </motion.nav>
  );
}