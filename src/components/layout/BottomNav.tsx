import { motion } from 'framer-motion';
import { FiHome, FiPackage, FiBarChart2, FiPlus, FiSettings, FiUser, FiLogOut } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface BottomNavProps {
  activeView: string;
  onViewChange: (view: string) => void;
  onAddProduct: () => void;
}

export function BottomNav({ activeView, onViewChange, onAddProduct }: BottomNavProps) {
  const { isAuthenticated, logout } = useAuth();
  
  const navItems = [
    { id: 'dashboard', icon: FiHome, label: 'गृह' },
    { id: 'inventory', icon: FiPackage, label: 'सामान' },
    { id: 'add', icon: FiPlus, label: 'थप्नुहोस्', special: true },
    { id: 'analytics', icon: FiBarChart2, label: 'विश्लेषण' },
    { id: 'settings', icon: FiSettings, label: 'सेटिङ' },
    ...(isAuthenticated 
      ? [{ id: 'logout', icon: FiLogOut, label: 'लगआउट', action: logout }]
      : [{ id: 'auth', icon: FiUser, label: 'लगइन', link: '/login' }]
    )
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
          
          if (item.link) {
            return (
              <Link key={item.id} to={item.link}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex flex-col gap-1 h-auto py-2 text-muted-foreground hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              </Link>
            );
          }
          
          if (item.action) {
            return (
              <Button
                key={item.id}
                onClick={item.action}
                variant="ghost"
                size="icon"
                className="flex flex-col gap-1 h-auto py-2 text-red-600 hover:text-red-700"
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
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