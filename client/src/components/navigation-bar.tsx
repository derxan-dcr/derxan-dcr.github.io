import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import CartDrawer from "./cart-drawer";
import { useTheme } from "../lib/theme-context";

export default function NavigationBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <img
              src="/assets/girl-header.png"
              alt="Peru Luxury RP"
              className="h-12 w-auto"
            />
          </a>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/">
            <a className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
          </Link>
          <Link href="/store">
            <a className="text-foreground hover:text-primary transition-colors">
              Store
            </a>
          </Link>
          <Link href="/trabajos">
            <a className="text-foreground hover:text-primary transition-colors">
              Trabajos
            </a>
          </Link>
          <Link href="/novedades">
            <a className="text-foreground hover:text-primary transition-colors">
              Novedades
            </a>
          </Link>
          <Link href="/reglas">
            <a className="text-foreground hover:text-primary transition-colors">
              Reglas
            </a>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-foreground"
          >
            {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <CartDrawer />
          <Button variant="outline">Login</Button>
        </div>
      </div>
    </motion.nav>
  );
}