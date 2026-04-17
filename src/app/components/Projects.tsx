import { motion } from "motion/react";
import { ExternalLink, Code } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    key: "smartMensa",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    tags: ["React Native", "Spring Boot", "REST API", "GitLab"],
    liveUrl: "",
    codeUrl: "https://github.com/aroldtsatio/smart-mensa",
  },
  {
    id: 2,
    key: "campus",
    image: "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzc2MTY1Mjg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "Streamlit", "JSON", "APIs", "UI/UX"],
    liveUrl: "https://campuseingang-wnvzv9m9uvv99rwhwrpwyx.streamlit.app",
    codeUrl: "https://github.com/aroldtsatio/Campus-Eingang",
  },
  {
    id: 3,
    key: "ticTacToe",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948",
    tags: ["JavaScript", "AI", "Minimax", "Game Logic"],
    liveUrl: "",
    codeUrl: "https://github.com/aroldtsatio/Tictactoe",
  },
];

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="px-6 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-white text-center mb-14">
          {t("projects.sectionTitle")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E293B] rounded-2xl overflow-hidden border border-[#38BDF8]/10 shadow-lg hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={t(`projects.items.${project.key}.title`)}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-[#94A3B8] mb-2">
                  {t(`projects.items.${project.key}.period`)}
                </p>

                <h3 className="text-xl text-white mb-3">
                  {t(`projects.items.${project.key}.title`)}
                </h3>

                <p className="text-[#94A3B8] leading-relaxed mb-5">
                  {t(`projects.items.${project.key}.description`)}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-[#0F172A] text-[#38BDF8] border border-[#38BDF8]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#38BDF8] hover:text-white transition"
                    >
                      <ExternalLink size={18} />
                      {t("projects.live")}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-[#64748B]">
                      <ExternalLink size={18} />
                      {t("projects.noLive")}
                    </span>
                  )}

                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#38BDF8] hover:text-white transition"
                    >
                      <Code size={18} />
                      {t("projects.code")}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}