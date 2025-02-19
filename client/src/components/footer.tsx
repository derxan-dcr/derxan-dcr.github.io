import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src="/assets/girl-header.png"
              alt="Peru Luxury RP"
              className="h-12 w-auto"
            />
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="/terminos">
              <a className="hover:text-primary transition-colors">
                Términos y Condiciones
              </a>
            </Link>
            <Link href="/reembolso">
              <a className="hover:text-primary transition-colors">
                Política de Reembolso
              </a>
            </Link>
            <Link href="/privacidad">
              <a className="hover:text-primary transition-colors">
                Política de Privacidad
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Copyright © 2025 Panel Fluxo By Perico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
