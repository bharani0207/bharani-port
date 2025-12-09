import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive, high-performance web applications using modern frameworks like React, Next.js, and Vue.",
    features: ["Single Page Apps", "Progressive Web Apps", "E-commerce Solutions"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications with React Native and Flutter for iOS and Android.",
    features: ["iOS & Android", "Cross-Platform", "Native Performance"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Designing and implementing scalable cloud architectures on AWS, GCP, and Azure.",
    features: ["Infrastructure as Code", "Serverless", "Auto-scaling"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting intuitive user interfaces and seamless experiences that delight users and drive engagement.",
    features: ["User Research", "Prototyping", "Design Systems"],
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed, efficiency, and scalability to handle any load.",
    features: ["Core Web Vitals", "Load Time Optimization", "Caching Strategies"],
  },
  {
    icon: ShieldCheck,
    title: "Security & DevOps",
    description:
      "Implementing security best practices and CI/CD pipelines for robust, reliable deployments.",
    features: ["CI/CD Pipelines", "Security Audits", "Monitoring"],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            What I Do
          </span>
          <h2 className="font-sora text-3xl md:text-4xl font-bold mt-3 mb-4">
            Services I Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, I provide end-to-end development
            services to bring your vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-2xl p-8 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
              >
                <service.icon className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="relative font-sora text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Corner Decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
