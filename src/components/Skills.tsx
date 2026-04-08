import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "C", "C++", "JavaScript", "Java", "HTML", "MySQL"],
  },
  {
    title: "ML & Data Science",
    skills: [
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "FastAPI",
    ],
  },
  {
    title: "Developer Tools",
    skills: ["GitHub", "Linux", "Flask", "VS Code", "Jupyter"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Oracle Cloud", "Cloud Infrastructure", "Generative AI"],
  },
];

const certifications = [
  "Introduction to Programming with Python and Java",
  "Machine Learning Training (Internshala)",
  "Web Development",
  "Mastering Generative AI & LLMs",
  "Cloud Infrastructure (Oracle)",
  "Responsible & Safe AI (NPTEL)",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Skills &amp; <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="font-semibold text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="p-3 rounded-lg bg-card border border-border text-sm text-muted-foreground"
              >
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
