import { motion } from 'framer-motion';
import { FiBell, FiMenu, FiSearch } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onMenuClick: () => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function Header({ onMenuClick, searchValue, onSearchChange }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-40 bg-card border-b border-border shadow-soft"
    >
      <div className="px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button
              onClick={onMenuClick}
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <FiMenu className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
              Inventory Pro
            </h1>
          </div>
          
          <div className="flex-1 max-w-sm">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9 bg-background h-9"
              />
            </div>
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <FiBell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full animate-pulse" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}