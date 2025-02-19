import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Reglas() {
  const rules = [
    {
      title: "Regla 1: Mantén el Realismo",
      description: "Actúa como lo harías en la vida real. Mantén un comportamiento realista y coherente con tu personaje."
    },
    {
      title: "Regla 2: No Metagaming",
      description: "No uses información que tu personaje no conocería dentro del juego."
    },
    {
      title: "Regla 3: No PowerGaming",
      description: "No realices acciones imposibles o irreales. Mantén tus acciones dentro de los límites razonables."
    },
    {
      title: "Regla 4: Respeto a los Demás",
      description: "Trata a todos los jugadores con respeto, independientemente de la situación en el juego."
    },
    {
      title: "Regla 5: Valor a la Vida",
      description: "Tu personaje debe valorar su vida. No tomes riesgos innecesarios o irreales."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4 text-primary">Reglas del Servidor</h1>
        <p className="text-muted-foreground">
          Para mantener una experiencia de roleplay de calidad, por favor sigue estas reglas
        </p>
      </motion.div>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {rules.map((rule, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {rule.title}
                </h3>
                <p className="text-foreground">{rule.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
