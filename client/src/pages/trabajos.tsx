import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const jobs = [
  {
    id: 1,
    title: "Minero",
    description: "Extrae minerales y gemas.",
    image: "/assets/jobs/minero.jpg",
    color: "from-purple-500/20 to-purple-500/5",
    videoUrl: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: 2,
    title: "Leñador",
    description: "Tala árboles y recolecta madera.",
    image: "/assets/jobs/lenador.jpg",
    color: "from-green-500/20 to-green-500/5",
    videoUrl: "https://www.youtube.com/watch?v=example2"
  },
  {
    id: 3,
    title: "Basurero",
    description: "Recoge y gestiona residuos urbanos.",
    image: "/assets/jobs/basurero.jpg",
    color: "from-yellow-500/20 to-yellow-500/5",
    videoUrl: "https://www.youtube.com/watch?v=example3"
  },
  {
    id: 4,
    title: "Taxista",
    description: "Lleva pasajeros por la ciudad.",
    image: "/assets/jobs/taxista.jpg",
    color: "from-blue-500/20 to-blue-500/5",
    videoUrl: "https://www.youtube.com/watch?v=example4"
  },
  {
    id: 5,
    title: "Microbusero",
    description: "Conduce rutas de autobús.",
    image: "/assets/jobs/microbusero.jpg",
    color: "from-red-500/20 to-red-500/5",
    videoUrl: "https://www.youtube.com/watch?v=example5"
  },
  {
    id: 6,
    title: "Camionero",
    description: "Entrega mercancías en todo el estado.",
    image: "/assets/jobs/camionero.jpg",
    color: "from-orange-500/20 to-orange-500/5",
    videoUrl: "https://www.youtube.com/watch?v=example6"
  }
];

export default function Trabajos() {
  const handleViewDetails = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">
            Guías de Trabajo
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestras guías de trabajo para aprender cómo comenzar en cada profesión, dominar tus
            habilidades y maximizar las ganancias mientras contribuyes al vibrante ecosistema de nuestra
            comunidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer" onClick={() => handleViewDetails(job.videoUrl)}>
                <div className="relative h-64">
                  <div className={`absolute inset-0 bg-gradient-to-b ${job.color} group-hover:opacity-75 transition-opacity`} />
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Ver Video Tutorial
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}