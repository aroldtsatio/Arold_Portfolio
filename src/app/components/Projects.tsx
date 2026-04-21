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
    liveUrl: "https://tictactoe-oxyx.vercel.app",
    codeUrl: "https://github.com/aroldtsatio/Tictactoe",
  },
   {
    id: 4,
    key: "ngolaFlow",
    title: "Ngola-Flow Webanwendung",
    description:
      "Moderne und responsive Webanwendung zur Präsentation von Automatisierungslösungen. Entwicklung einer benutzerfreundlichen Oberfläche mit Kontaktformular und performanter Frontend-Architektur.",
    image: "/projects/ngola-flow.png",
    tags: ["React", "Vite", "Tailwind CSS", "Formspree"],
    liveUrl: "https://ngola-flow-web-site-wlnw.vercel.app",
    codeUrl: "",
    period: "Dez. 2025 - Jan. 2026",
  },
  {
    id: 5,
    key: "portfolio",
    title: "Persönliches Portfolio",
    description:
      "Entwicklung eines modernen, responsiven Portfolios zur Präsentation von Projekten und Kompetenzen. Implementierung von Mehrsprachigkeit, Kontaktformular und Deployment mit Vercel.",
    image: "/projects/portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "i18next"],
    liveUrl: "https://portfolio.aroldtsatio.com/",
    codeUrl: "",
    period: "Mär. 2026 - Apr. 2026",
  },
  {
    id: 6,
    key: "aiChatbot",
    title: "AI Portfolio Chatbot",
    description:
      "Fullstack-Projekt zur Entwicklung eines KI-Chatbots für eine Portfolio-Webseite. Umsetzung eines Node.js/Express-Backends und Integration der OpenAI API für intelligente Antworten.",
    image: "/projects/ai-chatbot.png",
    tags: ["React", "Node.js", "Express", "OpenAI API"],
    liveUrl: "",
    codeUrl: "",
    period: "Apr. 2026",
  },
  {
    id: 7,
    key: "zoffImZoo",
    title: "Softwareentwicklungsprojekt – Zoff_im_Zoo",
    description:
      "Agiles Multiplayer-Spielprojekt mit Scrum, Client-Server-Architektur und Test-Driven Development. Entwicklung einer netzwerkfähigen Anwendung inklusive technischer Dokumentation und Git-Repository-Struktur.",
    image: "/projects/zoff-im-zoo.png",
    tags: ["Java", "Scrum", "Client-Server", "TDD", "GitLab", "Maven"],
    liveUrl: "",
    codeUrl: "",
    period: "Sept. 2025 - Mär. 2026",
  },
];

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="px-6 py-24 relative scroll-mt-28">
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
                      className="px-3 py-1 text-sm rounded-full bg-[#0F172A] text-white/50 border border-[#38BDF8]/20"
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