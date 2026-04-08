import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-8" />

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            I am a Computer Science undergraduate at Sikkim Manipal Institute of
            Technology, graduating in 2026 with a specialization in AI &amp; Machine
            Learning. Passionate about building intelligent systems that solve
            real-world problems, I combine strong foundations in machine learning
            with full-stack development skills.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <GraduationCap className="text-primary mt-1 shrink-0" size={22} />
              <div>
                <p className="font-semibold text-sm">Education</p>
                <p className="text-muted-foreground text-sm">
                  B.Tech CSE, SMIT — Graduating 2026
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <MapPin className="text-primary mt-1 shrink-0" size={22} />
              <div>
                <p className="font-semibold text-sm">Location</p>
                <p className="text-muted-foreground text-sm">Majitar, Sikkim</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
              <Briefcase className="text-primary mt-1 shrink-0" size={22} />
              <div>
                <p className="font-semibold text-sm">Status</p>
                <p className="text-muted-foreground text-sm">
                  Open to Opportunities
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
