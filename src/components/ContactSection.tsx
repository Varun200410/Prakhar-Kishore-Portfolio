import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[60%] bg-glow-accent rounded-full blur-[200px] opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Seeking an AI Engineering Intern role to build production-focused AI agent and RAG solutions. Feel free to reach out for collaborations.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Email Card */}
          <a 
            href="mailto:prakharkishore8@gmail.com"
            className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                  prakharkishore8@gmail.com
                </p>
              </div>
            </div>
          </a>

          {/* Phone Card */}
          <a 
            href="tel:8102802004"
            className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                  +91 8102802004
                </p>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="default" size="lg" asChild className="gap-2 px-8">
            <a href="https://github.com/PrakharKishoreAI" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub Profile
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="gap-2 px-8">
            <a href="https://www.linkedin.com/in/prakhar-kishore-130b30266" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
          </Button>
        </motion.div>

        {/* Location */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-12 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MapPin className="w-4 h-4" />
          <span>Sikkim, India</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
