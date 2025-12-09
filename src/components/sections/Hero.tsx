import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation menu without Services
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="cursor-pointer text-sm text-foreground hover:text-primary transition"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="ml-2 px-3 py-1 border rounded-full text-xs"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="flex flex-col items-start px-6 py-4 gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base hover:text-primary transition"
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
              className="mt-2 px-3 py-1 border rounded-full text-xs"
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
