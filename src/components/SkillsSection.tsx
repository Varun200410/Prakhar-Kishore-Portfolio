import { motion } from "framer-motion";
import { Award, Brain, Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Generative AI & LLMs",
    icon: Brain,
    skills: ["Generative AI", "LLMs", "LangChain", "Hugging Face Transformers", "OpenAI API", "Claude API", "Gemini API", "AI Agents", "Prompt Engineering"],
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "RAG & Vector Search",
    icon: Database,
    skills: ["RAG", "FAISS", "ChromaDB", "Pinecone", "Embeddings", "Semantic Search", "Document Chunking"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "ML, NLP & Computer Vision",
    icon: Code2,
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "ViT", "Grad-CAM", "LIME", "Scikit-learn", "XGBoost", "TensorFlow", "Keras"],
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Engineering & Deployment",
    icon: Wrench,
    skills: ["Python", "FastAPI", "Streamlit", "Docker", "Git", "GitHub", "REST APIs", "Linux", "Cloud Deployment"],
    color: "from-orange-500 to-amber-600"
  }
];

const certifications = [
  "LLM Fundamentals — Hugging Face",
  "Cambridge RegTech: AI for Financial Regulation, Risk, and Compliance — University of Cambridge Judge Business School",
  "Celonis Foundations — Celonis",
  "CS50's Introduction to Programming with Python — Harvard University",
  "Machine Learning Training — Internshala",
  "Cloud Infrastructure & Generative AI — Oracle",
  "Responsible & Safe AI — NPTEL",
  "Business Intelligence & Analytics — NPTEL",
  "Introduction to Agent Skills — Anthropic"
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden" id="skills">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-glow-primary rounded-full blur-[150px] opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            AI engineering capabilities across LLM applications, retrieval systems, machine learning, and deployment.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-secondary/80 text-secondary-foreground rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="text-accent text-lg">✦</span>
                <span className="text-sm text-foreground/90">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
