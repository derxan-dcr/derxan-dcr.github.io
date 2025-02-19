import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dannita",
    role: "VENDEDORA",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
  },
  {
    name: "Kevin",
    role: "VENDEDOR",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    name: "Xiomara",
    role: "STAFF",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    name: "Lucas",
    role: "STAFF",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Maria",
    role: "VENDEDORA",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
  },
  {
    name: "Carlos",
    role: "ADMINISTRADOR",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  }
];

export default function TeamCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (emblaApi) {
      const autoplayInterval = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);

      return () => clearInterval(autoplayInterval);
    }
  }, [emblaApi]);

  return (
    <div className="w-full py-16 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-primary text-center"
        >
          NUESTRO EQUIPO
        </motion.h2>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] px-4"
              >
                <Card className="bg-black/40 border-none">
                  <CardContent className="p-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-primary text-center mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-green-400 text-center">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
