import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";
import ServerStatus from "../components/server-status";
import TeamCarousel from "../components/team-carousel";
import BackgroundAudio from "../components/background-audio";

export default function Home() {
  return (
    <div>
      <BackgroundAudio />

      {/* Hero Section with Background */}
      <div 
        className="relative min-h-[600px] flex items-center"
        style={{
          backgroundImage: 'url("/assets/header-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6 text-primary">
              PERU LUXURY RP
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              La mejor experiencia de roleplay en FiveM con assets premium y modificaciones exclusivas
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                VISITAR TIENDA
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2"
              >
                <FaDiscord className="w-5 h-5" />
                Unirse al Discord
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="container mx-auto px-4 py-16">
        <ServerStatus />

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
        >
          <div className="relative overflow-hidden rounded-lg h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341"
              alt="Luxury Cars"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
              alt="Premium Vehicles"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <div className="py-20 bg-black/30 backdrop-blur-sm mt-20">
          <div className="container mx-auto px-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 font-medium mb-4"
            >
              PORQUÉ ELEGIRNOS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-16 text-primary"
            >
              Somos comprometidos con nuestros productos para que tenga buena experiencia in game.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">Altos Estándares</h3>
                <p className="text-muted-foreground">
                  Con más de 1 año en el mercado, somos una empresa comprometida y dedicada a mejorar en todos los sentidos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">Dev Capacitados</h3>
                <p className="text-muted-foreground">
                  Nuestros programadores tienen un amplio conocimiento y así mismo son reconocidos por el gran trabajo que realizan desde ya años.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">Pasión Creativa</h3>
                <p className="text-muted-foreground">
                  Porque nos apasiona lo que hacemos, dedicamos tiempo y solucionamos problemas de una manera excepcional.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <TeamCarousel />
      </div>
    </div>
  );
}