import { motion } from "framer-motion";
import ProductGrid from "../components/product-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Store() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 text-primary">Tienda</h1>
        <p className="text-muted-foreground">
          Explora nuestra colección de assets premium para FiveM
        </p>
      </motion.div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full justify-start mb-8 bg-black/40 p-1 backdrop-blur-sm border border-primary/20">
          <TabsTrigger 
            value="all" 
            className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-glow transition-all duration-300"
          >
            Todos los Productos
          </TabsTrigger>
          <TabsTrigger 
            value="cars"
            className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-glow transition-all duration-300"
          >
            Autos
          </TabsTrigger>
          <TabsTrigger 
            value="weapons"
            className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-glow transition-all duration-300"
          >
            Armas
          </TabsTrigger>
          <TabsTrigger 
            value="houses"
            className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-glow transition-all duration-300"
          >
            Casas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ProductGrid />
        </TabsContent>
        <TabsContent value="cars">
          <ProductGrid category="cars" />
        </TabsContent>
        <TabsContent value="weapons">
          <ProductGrid category="weapons" />
        </TabsContent>
        <TabsContent value="houses">
          <ProductGrid category="houses" />
        </TabsContent>
      </Tabs>
    </div>
  );
}