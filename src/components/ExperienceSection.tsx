import { motion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/20 relative overflow-hidden" id="experience">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience & <span className="text-accent">Education</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Experience */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Work Experience</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-border/50 space-y-6 h-[calc(100%-4rem)]">
              {/* Research Intern - NIT Silchar */}
              <div className="relative">
                <div className="absolute left-[-25px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-center gap-2 text-accent text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4" />
                    Jan 2026 – May 2026
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-1">Research Intern — Deep Learning & Explainable AI</h4>
                  <p className="text-muted-foreground mb-2">NIT Silchar</p>
                  
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▹</span>
                      Developed a ViT-B/16 brain tumor classifier on 7,023 MRI images across four classes, achieving 99.94% training accuracy and 98.51% test accuracy with 5-fold cross-validation.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▹</span>
                      Integrated Grad-CAM and LIME into the Vision Transformer pipeline for explainable AI, independently developing and validating the overall solution.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▹</span>
                      Used ChatGPT and Claude AI as auxiliary tools for implementation guidance and debugging.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Machine Learning Intern — Hex Softwares */}
              <div className="relative">
                <div className="absolute left-[-25px] top-0 w-4 h-4 rounded-full bg-muted border-4 border-background"></div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-center gap-2 text-accent text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4" />
                    Nov 2025 – Dec 2025
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-1">Machine Learning Intern</h4>
                  <p className="text-muted-foreground mb-4">Hex Softwares Pvt. Ltd.</p>
                  
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▹</span>
                      Built an NLP-based Hindi ASR transcript cleanup pipeline using OpenAI Whisper and Python for speech-to-text post-processing.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▹</span>
                      Implemented Hindi number normalization and English word detection for code-mixed Hindi-English speech.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▹</span>
                      Reduced WER from 38.5% to 18.2% using JiWER benchmarking, a 52.7% improvement in transcription accuracy.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">▹</span>
                      Used ChatGPT and Claude AI as auxiliary development tools while independently building and validating the end-to-end pipeline.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-border/50 h-[calc(100%-4rem)]">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-2 text-accent text-sm font-medium mb-2">
                  <Calendar className="w-4 h-4" />
                  Expected Aug 2026
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-1">
                  Bachelor of Technology — Computer Science Engineering
                </h4>
                <p className="text-muted-foreground mb-2">
                  Sikkim Manipal Institute of Technology
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  Majitar, Sikkim
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium mb-4 w-fit">
                  <span>🎯</span>
                  Final-year B.Tech CSE student
                </div>

                {/* Relevant Coursework */}
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground mb-3">Relevant Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Machine Learning",
                      "Deep Learning",
                      "Computer Vision",
                      "NLP",
                      "Generative AI",
                      "LLMs",
                      "RAG",
                      "Data Structures",
                      "Algorithms"
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground rounded-md text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-accent/30 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Publication</h3>
          </div>
          <p className="text-foreground font-medium">“A Vision Transformer based Deep Learning Approach for Brain Tumour Classification from MRI: An Explainable AI Framework”</p>
          <p className="text-sm text-muted-foreground mt-2">Accepted in International Conference on Computing, Intelligence and Applications (CIACON 2026), 2026 (IEEE Conference Record ID: 70148)</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
