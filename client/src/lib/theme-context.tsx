import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTheme(current => current === 'dark' ? 'light' : 'dark');
    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    const root = document.documentElement;

    // Aplicar el tema
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.setProperty('--background', '#000000');
      root.style.setProperty('--foreground', '#ffffff');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#000000');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      {isAnimating && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div 
            className={`absolute inset-0 transition-all duration-1000 ${
              theme === 'dark' 
                ? 'bg-black' 
                : 'bg-white'
            }`} 
          />
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            theme === 'dark' 
              ? 'text-white' 
              : 'text-yellow-500'
          }`}>
            {theme === 'dark' ? (
              <div className="animate-bounce text-4xl">☁️</div>
            ) : (
              <div className="animate-spin text-4xl">☀️</div>
            )}
          </div>
        </div>
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}