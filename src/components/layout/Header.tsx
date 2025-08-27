import { motion } from 'framer-motion';
import { FiBell, FiMenu, FiSearch, FiUser, FiLogIn, FiLogOut } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface HeaderProps {
  onMenuClick: () => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function Header({ onMenuClick, searchValue, onSearchChange }: HeaderProps) {
  const { user, isAuthenticated, logout } = useAuth();
  
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
              InvenSmart नेपाल
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
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <FiBell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full animate-pulse" />
            </Button>
            
            <div className="hidden md:flex items-center gap-2">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>Welcome, {user?.firstName}!</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={logout}
                  >
                    <FiLogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <FiLogIn className="h-4 w-4" />
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button size="sm" className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      <FiUser className="h-4 w-4" />
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}