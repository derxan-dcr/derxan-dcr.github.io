import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Novedades() {
  const updates = [
    {
      title: "Nuevos Vehículos de Lujo",
      date: "19 Feb 2025",
      description: "Agregamos nuevos vehículos de alta gama para mejorar tu experiencia de roleplay."
    },
    {
      title: "Sistema de Animaciones Mejorado",
      date: "18 Feb 2025",
      description: "Nuevas animaciones personalizadas para una experiencia más inmersiva."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 text-primary">Novedades</h1>
        <p className="text-muted-foreground">
          Mantente al día con las últimas actualizaciones y mejoras
        </p>
      </motion.div>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {updates.map((update, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-primary">
                    {update.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {update.date}
                  </span>
                </div>
                <p className="text-foreground">{update.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
