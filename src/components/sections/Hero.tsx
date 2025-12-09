import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* ... existing background motion code ... */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* ... existing heading and description code ... */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Hire Me button */}
            <Button
              variant="hero"
              size="xl"
              onClick={() => handleScroll("#contact")}
              className="group"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Hire Me
            </Button>

            {/* Download Resume button (open in new tab) */}
            <Button
              asChild
              variant="heroOutline"
              size="xl"
              className="group"
            >
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span className="ml-2">Download Resume</span>
              </a>
            </Button>
          </motion.div>

          {/* ... existing tech stack and scroll indicator ... */}
        </div>
      </div>
    </section>
  );
}
