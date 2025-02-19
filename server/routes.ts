import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express) {
  // Mock products data
  const mockProducts = [
    {
      id: 1,
      name: "Pack VIP de Vehículos Deportivos",
      description: "Incluye Ferrari, Lamborghini, McLaren y más vehículos premium",
      price: "49.99",
      imageUrl: "https://images.unsplash.com/photo-1544829728-e5ca3c229f1e",
      category: "cars"
    },
    {
      id: 2,
      name: "Mansión de Lujo Los Santos",
      description: "Propiedad exclusiva con piscina, garaje y helipuerto",
      price: "79.99",
      imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      category: "houses"
    },
    {
      id: 3,
      name: "Pack de Armas Personalizadas",
      description: "Colección de armas con skins y animaciones exclusivas",
      price: "29.99",
      imageUrl: "https://images.unsplash.com/photo-1595590424283-b8f17842773f",
      category: "weapons"
    },
    {
      id: 4,
      name: "Pack de Ropa Premium",
      description: "Ropa y accesorios de lujo para tu personaje",
      price: "19.99",
      imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
      category: "characters"
    },
    {
      id: 5,
      name: "Motos Exclusivas",
      description: "Colección de motos deportivas y customs",
      price: "34.99",
      imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
      category: "cars"
    },
    {
      id: 6,
      name: "Apartamento de Lujo",
      description: "Penthouse con vista a la ciudad y mobiliario premium",
      price: "59.99",
      imageUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705",
      category: "houses"
    },
    {
      id: 7,
      name: "Pack de Policía Elite",
      description: "Vehículos, uniformes y equipamiento policial premium",
      price: "44.99",
      imageUrl: "https://images.unsplash.com/photo-1621252179027-cdad65d61489",
      category: "characters"
    },
    {
      id: 8,
      name: "Pack VIP Completo",
      description: "Acceso a todo el contenido premium con descuento",
      price: "149.99",
      imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      category: "characters"
    }
  ];

  // Mock server status
  const mockServerStatus = {
    id: 1,
    ip: "83.150.218.98:47199",
    players: 42,
    maxPlayers: 64,
    status: "online"
  };

  app.get("/api/products", (req, res) => {
    const { category } = req.query;
    const filteredProducts = category
      ? mockProducts.filter(p => p.category === category)
      : mockProducts;
    res.json(filteredProducts);
  });

  app.get("/api/server-status", (_req, res) => {
    res.json(mockServerStatus);
  });

  const httpServer = createServer(app);
  return httpServer;
}