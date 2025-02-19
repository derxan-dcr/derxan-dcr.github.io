import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "./lib/cart-context";
import { ThemeProvider } from "./lib/theme-context";
import { useEffect } from "react";
import { disableRightClick } from "./lib/disable-right-click";
import NavigationBar from "./components/navigation-bar";
import Footer from "./components/footer";
import ParticlesBackground from "./components/particles-background";
import Home from "./pages/home";
import Store from "./pages/store";
import Trabajos from "./pages/trabajos";
import Novedades from "./pages/novedades";
import Reglas from "./pages/reglas";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/store" component={Store} />
      <Route path="/trabajos" component={Trabajos} />
      <Route path="/novedades" component={Novedades} />
      <Route path="/reglas" component={Reglas} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    disableRightClick();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CartProvider>
          <div className="min-h-screen bg-background relative flex flex-col">
            <ParticlesBackground />
            <NavigationBar />
            <main className="flex-grow">
              <Router />
            </main>
            <Footer />
            <Toaster />
          </div>
        </CartProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;