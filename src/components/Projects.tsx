import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI for Natural Disaster Management",
    description:
      "End-to-end pipeline for flood forecasting, evacuation route planning, and damage assessment using real-time data and ML models.",
    tech: ["Python", "LSTM", "CNN", "Random Forest", "SVM", "IoT"],
    highlights: [
      "Real-time alerts",
      "Route optimization (A*, Dijkstra)",
      "Semantic segmentation",
    ],
  },
  {
    title: "Movie Recommendation System",
    description:
      "Collaborative and content-based filtering recommendation engine with a Flask web UI for personalized movie suggestions.",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas"],
    link: "https://github.com/Varun200410/Movie-Recommendation-System",
  },
  {
    title: "Heart Disease Prediction",
    description:
      "Classification model for heart disease prediction with feature importance analysis to identify key risk factors.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    link: "https://github.com/Varun200410/Heart-Disease-Prediction",
  },
  {
    title: "Loan Status Prediction",
    description:
      "Eligibility classification and risk assessment model to predict loan approval status based on applicant data.",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    link: "https://github.com/Varun200410/loan-_status-_prediction",
  },
  {
    title: "Calories Burnt Prediction",
    description:
      "Regression model for activity-based calorie estimation, helping users track fitness metrics accurately.",
    tech: ["Python", "Scikit-learn", "NumPy"],
    link: "https://github.com/Varun200410/Calories-Burnt-Prediction",
  },
  {
    title: "House Price Prediction",
    description:
      "Price prediction using Linear, Lasso, and Ridge regression with feature engineering and metric optimization.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors shrink-0 ml-2"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              {project.highlights && (
                <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
