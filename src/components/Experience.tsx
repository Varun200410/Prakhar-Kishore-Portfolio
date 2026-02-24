import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Research Intern",
    company: "NIT Silchar",
    location: "Silchar, Assam",
    description:
      "Conducted AI/ML research under faculty guidance. Worked on cutting-edge machine learning projects exploring novel approaches to real-world problems.",
  },
  {
    role: "Software Intern",
    company: "Hex Softwares Pvt Ltd",
    period: "Nov 2025 - Dec 2025",
    description:
      "Built ML models including Iris Classification and House Price Prediction. Developed complete data preprocessing pipelines for production-ready deployments.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-primary" />
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 mb-3">
                  <span className="flex items-center gap-1.5 text-sm text-primary">
                    <Building2 size={14} />
                    {exp.company}
                    {exp.location && (
                      <span className="text-muted-foreground">
                        — {exp.location}
                      </span>
                    )}
                  </span>
                  {exp.period && (
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
