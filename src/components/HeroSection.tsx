import { motion } from "framer-motion";
import HyperTextParagraph from "@/components/ui/hyper-text-with-decryption";
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const bio = `Final-year B.Tech CSE student graduating in 2026 with hands-on experience building LLM-powered applications, including Retrieval-Augmented Generation (RAG) pipelines, LangChain-based orchestration, and NLP/deep learning systems. Skilled in Python, FastAPI, vector databases, and prompt engineering, with practical exposure to Vision Transformers and explainable AI. Seeking an AI Engineering Intern role to build production-focused AI agent and RAG solutions.`;

  const triggers = [
    "LLM-powered", "Retrieval-Augmented Generation", "RAG", "LangChain",
    "Python", "FastAPI", "vector databases", "prompt engineering",
    "Vision Transformers", "explainable AI", "AI agent"
  ];

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-glow-primary rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-glow-accent rounded-full blur-[120px] animate-pulse-slow" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Pill */}
          <div className="flex justify-center md:justify-start mb-8">
            <div className="bg-card/50 backdrop-blur-xl border border-border/50 shadow-lg px-4 py-2 rounded-full flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                Open to Opportunities
              </span>
            </div>
          </div>

          {/* Name */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Prakhar<span className="text-accent">.</span>Kishore
          </motion.h1>

          {/* Title */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground font-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            AI/ML Engineer • Generative AI, LLMs & RAG
          </motion.p>

          {/* Bio with HyperText */}
          <motion.div
            className="bg-card/30 backdrop-blur-xl border border-border/30 rounded-2xl p-6 md:p-10 mb-10 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <HyperTextParagraph
              text={bio}
              highlightWords={triggers}
              className="text-lg md:text-xl text-foreground/90 font-light leading-relaxed"
            />
            <p className="text-center mt-6 text-muted-foreground/60 text-sm font-mono">
              ↑ Hover on highlighted keywords to decrypt
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button variant="default" size="lg" asChild className="gap-2">
              <a href="https://github.com/PrakharKishoreAI" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="gap-2">
              <a href="https://www.linkedin.com/in/prakhar-kishore-130b30266" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild className="gap-2">
              <a href="mailto:prakharkishore8@gmail.com">
                <Mail className="w-5 h-5" />
                Email
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild className="gap-2">
              <a href="tel:8102802004">
                <Phone className="w-5 h-5" />
                Call
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
