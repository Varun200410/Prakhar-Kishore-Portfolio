import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-8 mx-auto" />
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Open to internship and collaboration opportunities. Feel free to
            reach out through any of the channels below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto"
        >
          <a
            href="mailto:prakharkishore8@gmail.com"
            className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <Mail className="text-primary shrink-0" size={20} />
            <span className="text-sm text-muted-foreground truncate">
              prakharkishore8@gmail.com
            </span>
          </a>
          <a
            href="tel:+918102802004"
            className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <Phone className="text-primary shrink-0" size={20} />
            <span className="text-sm text-muted-foreground">8102802004</span>
          </a>
          <a
            href="https://github.com/Varun200410"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <Github className="text-primary shrink-0" size={20} />
            <span className="text-sm text-muted-foreground">Varun200410</span>
          </a>
          <a
            href="https://www.linkedin.com/in/prakhar-kishore-130b30266"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <Linkedin className="text-primary shrink-0" size={20} />
            <span className="text-sm text-muted-foreground">Prakhar Kishore</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
