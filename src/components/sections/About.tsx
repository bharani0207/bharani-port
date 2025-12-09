import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Database, Cloud, Smartphone } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const skills = [
  { name: "Frontend Development", level: 95, icon: Code2 },
  { name: "Backend Development", level: 90, icon: Database },
  { name: "UI/UX Design", level: 85, icon: Palette },
  { name: "Cloud Architecture", level: 88, icon: Cloud },
  { name: "Mobile Development", level: 80, icon: Smartphone },
  { name: "Performance Optimization", level: 92, icon: Zap },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "GraphQL", category: "API" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Figma", category: "Design" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="font-sora text-3xl md:text-4xl font-bold mt-3 mb-4">
            Crafting Digital Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With 5+ years of experience in software development, I transform
            complex problems into elegant, user-friendly solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mb-8"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto lg:mx-0">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-xl" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-accent p-[2px]">
                  <div className="w-full h-full rounded-full bg-background" />
                </div>
                {/* Image */}
                <img
                  src="https://i.ibb.co/60j7GYtY/Screenshot-2025-12-07-204133.png"
                  alt="Profile"
                  className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover"
                />
                {/* Status badge */}
                <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-green-500 border-4 border-background" />
              </div>
            </motion.div>

            <div className="glass rounded-2xl p-8 mb-8">
              <h3 className="font-sora text-xl font-semibold mb-4">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I started my coding journey in 2018, fascinated by the power of
                technology to solve real-world problems. Since then, I've worked
                with startups and enterprises, building everything from MVPs to
                large-scale applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and staying at the
                forefront of technology. When I'm not coding, you'll find me
                contributing to open-source projects or exploring new tech
                trends.
              </p>
            </div>

            {/* Skills with Progress */}
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <skill.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.5 + index * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-sora text-xl font-semibold mb-6">
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass rounded-xl p-4 text-center hover-lift cursor-default group"
                >
                  <span className="block font-medium text-sm group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {tech.category}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "3", label: "Projects" },
                { value: "1", label: "Years Exp." },
                { value: "2", label: "Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10"
                >
                  <span className="block text-3xl font-bold gradient-text">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
