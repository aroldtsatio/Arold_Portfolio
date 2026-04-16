import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  period: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Mensa',
    description: 'Entwicklung einer mobilen Anwendung zur Reservierung von Mahlzeiten in der Universitätsmensa. Ziel war es, Warteschlangen zu reduzieren und Lebensmittelverschwendung zu vermeiden. Projektleiter mit 15 Teammitgliedern.',
    image: 'https://images.unsplash.com/photo-1630442923896-244dd3717b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzYyNDEzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Spring Boot', 'REST API', 'GitLab', 'Wasserfallmethode'],
    period: 'Seit März 2026',
  },
  {
    id: 2,
    title: 'Campus Eingang (Study Organizer)',
    description: 'Webanwendung zur Studien- und Zeitorganisation mit Funktionen wie Aufgabenverwaltung, Timer und Fortschrittsverfolgung. Fokus auf Benutzerfreundlichkeit mit Mehrsprachigkeit und intuitiver Bedienung.',
    image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzc2MTY1Mjg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'Streamlit', 'JSON', 'APIs', 'UI/UX'],
    liveUrl: 'https://campuseingang-wnvzv9m9uvv99rwhwrpwyx.streamlit.app',
    period: 'Jan. 2026 - Feb. 2026',
  },
  {
    id: 3,
    title: 'Agiles Multiplayer-Game',
    description: 'Entwicklung einer netzwerkfähigen Multiplayer-Spielanwendung mit Client-Server-Architektur. Anwendung von Test-Driven Development (TDD) und serverseitigen Tests über 6 Sprints.',
    image: 'https://images.unsplash.com/photo-1732209556962-df3c1334bc47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHByb2plY3QlMjB0ZWFtfGVufDF8fHx8MTc3NjI0MzQ3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Java', 'Client-Server', 'TDD', 'Scrum', 'GitLab'],
    period: 'Sept. 2025 - März 2026',
  },
  {
    id: 4,
    title: 'Tic-Tac-Toe mit KI',
    description: 'Implementierung eines Tic-Tac-Toe-Spiels mit drei Schwierigkeitsstufen. Umsetzung des Minimax-Algorithmus für optimale Spielentscheidungen und Anwendung algorithmischer Lösungsansätze im Bereich Künstliche Intelligenz.',
    image: 'https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzc2MjQyNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['JavaScript', 'KI', 'Minimax-Algorithmus', 'Game Development'],
    period: 'März 2025 - Apr. 2025',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-[#0F172A] relative">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white text-center">
            Projekte
          </h2>
          <p className="text-[#94A3B8] text-center mb-16 max-w-2xl mx-auto">
            Eine Auswahl meiner neuesten Arbeiten und persönlichen Projekte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#1E293B] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#38BDF8]/20 transition-all border border-[#38BDF8]/10"
            >
              <div className="aspect-video w-full overflow-hidden bg-[#0F172A]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl text-white">{project.title}</h3>
                  <span className="text-xs text-[#38BDF8]">{project.period}</span>
                </div>
                <p className="text-[#94A3B8] mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#38BDF8]/10 text-[#38BDF8] rounded-full text-xs border border-[#38BDF8]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#38BDF8] hover:text-[#0EA5E9] transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#38BDF8] hover:text-[#0EA5E9] transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
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
