import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color: 'primary' | 'success' | 'warning' | 'destructive';
  index: number;
}

export function StatsCard({ title, value, icon, trend, color, index }: StatsCardProps) {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    destructive: 'bg-destructive/10 text-destructive'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="shadow-soft hover:shadow-medium transition-all">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{title}</p>
              <p className="text-2xl font-bold">{value}</p>
              {trend && (
                <p className={`text-xs ${trend.isPositive ? 'text-success' : 'text-destructive'}`}>
                  {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
                </p>
              )}
            </div>
            <div className={`p-3 rounded-full ${colorClasses[color]}`}>
              {icon}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}