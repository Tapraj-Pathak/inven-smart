import { motion, AnimatePresence } from 'framer-motion';
import { Recommendation } from '@/types/inventory';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FiTrendingUp } from 'react-icons/fi';
import { useState, useEffect } from 'react';

interface RecommendationWidgetProps {
  recommendations: Recommendation[];
}

export function RecommendationWidget({ recommendations }: RecommendationWidgetProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recommendations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [recommendations.length]);

  const current = recommendations[currentIndex];

  const getTypeColor = (type: Recommendation['type']) => {
    switch (type) {
      case 'urgent':
        return 'bg-destructive text-destructive-foreground';
      case 'suggestion':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  return (
    <Card className="shadow-medium bg-gradient-card overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Smart Recommendations</CardTitle>
          <Badge variant="outline" className="text-xs">
            AI Powered
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{current.icon}</span>
              <div className="flex-1 space-y-2">
                <p className="text-sm font-medium leading-relaxed">
                  {current.message}
                </p>
                <div className="flex items-center gap-2">
                  <Badge className={getTypeColor(current.type)}>
                    {current.type.charAt(0).toUpperCase() + current.type.slice(1)}
                  </Badge>
                  {current.trending && (
                    <Badge variant="outline" className="gap-1">
                      <FiTrendingUp className="h-3 w-3" />
                      Trending
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Indicator dots */}
        <div className="flex justify-center gap-1 mt-4">
          {recommendations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-6 bg-primary' 
                  : 'w-1.5 bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}