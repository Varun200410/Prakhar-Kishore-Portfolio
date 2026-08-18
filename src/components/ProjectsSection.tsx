import { motion } from "framer-motion";
import { Brain, ChartNoAxesCombined, FileText, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI Research Paper Assistant",
    description: "Retrieval-Augmented Generation application for answering questions from research papers and PDF documents.",
    tech: ["LangChain", "FAISS", "Hugging Face", "FastAPI", "Streamlit", "RAG"],
    icon: FileText,
    color: "from-cyan-500 to-blue-600",
    highlights: [
      "Built document chunking, embedding generation, and semantic search with FAISS",
      "Orchestrated retrieval and LLM response generation with LangChain",
      "Grounded answers in retrieved document context to reduce hallucinations",
      "Developed an interactive Streamlit interface for document upload and conversational Q&A"
    ]
  },
  {
    title: "YouTube Video Summarizer Using LLM",
    description: "Automated YouTube video summarization system that transforms transcripts into concise, structured summaries.",
    tech: ["LLaMA 3.3", "Groq API", "NLP", "Python", "Kaggle"],
    icon: Video,
    color: "from-violet-500 to-purple-600",
    highlights: [
      "Generated summaries with the LLaMA-3.3-70B large language model",
      "Built an NLP pipeline with pytubefix, regex preprocessing, and the Groq API",
      "Produced Brief Summary, Key Topics, and Main Takeaways through prompt-based summarization"
    ]
  },
  {
    title: "Brain Tumor Classification using ViT + Explainable AI",
    description: "Vision Transformer-based MRI classification project with explainability built into the model workflow.",
    tech: ["ViT-B/16", "Grad-CAM", "LIME", "Computer Vision", "Deep Learning"],
    icon: Brain,
    color: "from-emerald-500 to-teal-600",
    highlights: [
      "Classified 7,023 MRI images across glioma, meningioma, pituitary, and no-tumor classes",
      "Achieved 99.94% training accuracy and 98.51% test accuracy with 5-fold cross-validation",
      "Integrated Grad-CAM and LIME to make Vision Transformer predictions interpretable"
    ]
  },
  {
    title: "Customer Churn Prediction",
    description: "End-to-end machine learning pipeline for identifying high-risk telecom customers and supporting proactive retention.",
    tech: ["Python", "Scikit-learn", "XGBoost", "EDA", "Deployment Pipeline"],
    icon: ChartNoAxesCombined,
    color: "from-amber-500 to-orange-600",
    highlights: [
      "Performed EDA and feature engineering, including missing-value handling, encoding, and scaling",
      "Compared Logistic Regression, Random Forest, and XGBoost using accuracy, precision, recall, and F1-score",
      "Identified contract type and tenure as the top churn drivers with XGBoost as the optimal model"
    ]
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30 relative overflow-hidden" id="projects">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] right-[-20%] w-[40%] h-[40%] bg-glow-accent rounded-full blur-[150px] opacity-50" />
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
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production-minded AI projects spanning RAG, LLM applications, computer vision, and machine learning.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 group hover:shadow-xl hover:shadow-accent/5">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Highlights */}
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
