import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Services removed ❌
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/60 backdrop-blur-md border-b border-foreground/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Bharanishwar</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 text-xs px-3 py-1 border rounded-full"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-foreground/10">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="mt-2 text-xs px-3 py-1 border rounded-full self-start"
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
