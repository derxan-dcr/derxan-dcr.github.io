import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "../lib/cart-context";
import type { Product } from "@shared/schema";

interface ProductGridProps {
  category?: string;
}

export default function ProductGrid({ category }: ProductGridProps) {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products", category],
  });
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
    });
    toast({
      title: "Producto agregado",
      description: `${product.name} ha sido agregado al carrito`,
    });
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-48 bg-primary/20" />
            <CardContent className="p-4">
              <div className="h-4 bg-primary/20 rounded w-3/4 mb-2" />
              <div className="h-4 bg-primary/20 rounded w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products?.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="overflow-hidden">
            <div className="h-48 relative overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="object-cover w-full h-full transition-transform hover:scale-110"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <span className="text-lg font-bold text-primary">
                ${product.price}
              </span>
              <Button 
                size="sm"
                onClick={() => handleAddToCart(product)}
                className="bg-primary hover:bg-primary/90"
              >
                Agregar al Carrito
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}