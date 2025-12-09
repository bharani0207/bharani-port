import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export function Navbar({ isDark, toggleTheme }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/60 backdrop-blur-md border-b border-foreground/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Bharanishwar</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              smooth={true}
              duration={600}
              className="cursor-pointer text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Theme Toggle (Optional if you use one) */}
        <button
          onClick={toggleTheme}
          className="hidden md:inline-flex ml-4 text-sm px-3 py-1 border rounded-full"
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Mobile Menu */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-background border-t border-foreground/10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              smooth={true}
              duration={600}
              className="cursor-pointer text-lg text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="text-sm px-3 py-1 border rounded-full"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
