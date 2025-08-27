import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DemandData } from '@/types/inventory';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface DemandSupplyChartProps {
  data: DemandData[];
}

export function DemandSupplyChart({ data }: DemandSupplyChartProps) {
  // Group data by product
  const groupedData = data.reduce((acc: any[], item) => {
    const existing = acc.find(d => d.productName === item.productName);
    if (existing) {
      existing.demand = (existing.demand + item.demand) / 2;
      existing.supply = (existing.supply + item.supply) / 2;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Demand vs Supply Analysis</CardTitle>
          <CardDescription>Compare local demand with your current inventory</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={groupedData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="productName" 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)'
                }}
              />
              <Legend />
              <Bar 
                dataKey="demand" 
                fill="hsl(var(--warning))" 
                name="Demand"
                radius={[8, 8, 0, 0]}
              />
              <Bar 
                dataKey="supply" 
                fill="hsl(var(--success))" 
                name="Supply"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}