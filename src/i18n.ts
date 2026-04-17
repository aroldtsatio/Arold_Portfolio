import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    de: {
      translation: {
        hero: {
          title: "Arold Awoubeng Tsatio",
          subtitle: "Softwareentwickler | Projektmanager | Cloud Engineer | DevOps",
          description:
            "Ich entwickle moderne und performante Webanwendungen mit Fokus auf Benutzerfreundlichkeit und klar strukturierten Interfaces. Durch meine Erfahrung in Frontend-Technologien wie React, JavaScript und CSS sowie meine Kenntnisse in Backend-Entwicklung und Projektmanagement kann ich sowohl technische als auch organisatorische Herausforderungen effizient lösen. Ich arbeite gerne im Team, denke lösungsorientiert und lege großen Wert auf sauberen Code und strukturierte Entwicklungsprozesse. Mein Anspruch ist es, Anwendungen zu entwickeln, die nicht nur funktionieren, sondern auch ein überzeugendes Nutzererlebnis bieten.",
          location: "Kaiserslautern, Deutschland",
          button: "Projekte ansehen"
        },

        projects: {
          sectionTitle: "Projekte",
          live: "Live Demo",
          code: "Code ansehen",
          noLive: "Keine Live-Demo verfügbar",
          items: {
            smartMensa: {
              title: "Smart Mensa",
              description:
                "Mobile Anwendung zur Reservierung von Mahlzeiten in der Universitätsmensa mit dem Ziel, Warteschlangen zu reduzieren und Lebensmittelverschwendung zu vermeiden.",
              period: "Seit März 2026"
            },
            campus: {
              title: "Campus Eingang (Study Organizer)",
              description:
                "Webanwendung zur Studien- und Zeitorganisation mit Funktionen wie Aufgabenverwaltung, Timer und Fortschrittsverfolgung. Fokus auf Benutzerfreundlichkeit mit Mehrsprachigkeit und intuitiver Bedienung.",
              period: "Jan. 2026 - Feb. 2026"
            },
            ticTacToe: {
              title: "Tic-Tac-Toe mit KI",
              description:
                "Eigenprojekt mit Implementierung der Spiellogik, mehreren Schwierigkeitsstufen und dem Minimax-Algorithmus für optimale Spielentscheidungen.",
              period: "März 2025 - Apr. 2025"
            }
          }
        },

        skills: {
          title: "Skills & Kompetenzen",
          description: "Ein Überblick über meine technischen Kenntnisse, Werkzeuge und beruflichen Kompetenzen.",
          categories: {
            frontend: "Frontend",
            backend: "Backend",
            pm: "Projektmanagement",
            tools: "Tools & Versionskontrolle",
            uiux: "UI/UX & Design",
            other: "Weitere Kenntnisse"
          }
        },
        contact: {
        title: "Kontakt",
        description: "Haben Sie ein Projekt im Kopf oder möchten Sie zusammenarbeiten? Ich freue mich auf Ihre Nachricht!",
        infoTitle: "Kontaktinformationen",
        availability: "Ab sofort verfügbar – Deutschlandweit (Vor Ort, Hybrid, Remote)",
        labels: {
            email: "Email",
            phone: "Telefon",
            location: "Standort"
        },
        form: {
            name: "Name",
            namePlaceholder: "Ihr Name",
            email: "Email",
            emailPlaceholder: "ihre@email.com",
            message: "Nachricht",
            messagePlaceholder: "Ihre Nachricht...",
            submit: "Nachricht senden",
            success: "Vielen Dank für Ihre Nachricht! (Dies ist eine Demo)"
        }
        },

        header: {
            greeting: "Hallo, schön dass du da bist!",
            home: "Start",
            projects: "Projekte",
            skills: "Skills",
            contact: "Kontakt",
            menu: "Menü"
            },

            footer: {
            rights: "Alle Rechte vorbehalten."
            }
      }
    },

    fr: {
      translation: {
        hero: {
          title: "Arold Awoubeng Tsatio",
          subtitle: "Développeur logiciel | Chef de projet | Cloud Engineer | DevOps",
          description:
            "Je développe des applications web modernes et performantes en mettant l’accent sur l’expérience utilisateur et des interfaces bien structurées. Grâce à mon expérience avec React, JavaScript et CSS, ainsi qu’à mes connaissances en backend et en gestion de projet, je peux résoudre efficacement des défis techniques et organisationnels. J’aime travailler en équipe, j’ai une approche orientée solutions et j’accorde une grande importance à un code propre et à des processus de développement structurés. Mon objectif est de créer des applications qui ne se contentent pas de fonctionner, mais qui offrent aussi une expérience utilisateur convaincante.",
          location: "Kaiserslautern, Allemagne",
          button: "Voir les projets"
        },

        projects: {
          sectionTitle: "Projets",
          live: "Démo live",
          code: "Voir le code",
          noLive: "Aucune démo disponible",
          items: {
            smartMensa: {
              title: "Smart Mensa",
              description:
                "Application mobile de réservation de repas pour la cafétéria universitaire, conçue pour réduire les files d’attente et limiter le gaspillage alimentaire.",
              period: "Depuis mars 2026"
            },
            campus: {
              title: "Campus Eingang (Study Organizer)",
              description:
                "Application web d’organisation des études et du temps avec gestion des tâches, minuteur et suivi de progression. Accent mis sur l’expérience utilisateur, le multilingue et une utilisation intuitive.",
              period: "Janv. 2026 - Févr. 2026"
            },
            ticTacToe: {
              title: "Tic-Tac-Toe avec IA",
              description:
                "Projet personnel avec implémentation de la logique du jeu, de plusieurs niveaux de difficulté et de l’algorithme Minimax pour des décisions optimales.",
              period: "Mars 2025 - Avr. 2025"
            }
          }
        },

        skills: {
          title: "Skills & Compétences",
          description: "Un aperçu de mes connaissances techniques, de mes outils et de mes compétences professionnelles.",
          categories: {
            frontend: "Frontend",
            backend: "Backend",
            pm: "Gestion de projet",
            tools: "Outils & contrôle de version",
            uiux: "UI/UX & Design",
            other: "Autres compétences"
          }
        },
        contact: {
            title: "Contact",
            description: "Vous avez un projet en tête ou souhaitez collaborer ? Je serais ravi de recevoir votre message.",
            infoTitle: "Informations de contact",
            availability: "Disponible immédiatement – partout en Allemagne (sur site, hybride, remote)",
            labels: {
                email: "Email",
                phone: "Téléphone",
                location: "Localisation"
            },
            form: {
                name: "Nom",
                namePlaceholder: "Votre nom",
                email: "Email",
                emailPlaceholder: "votre@email.com",
                message: "Message",
                messagePlaceholder: "Votre message...",
                submit: "Envoyer le message",
                success: "Merci pour votre message ! (Ceci est une démo)"
            }
            },
            header: {
                greeting: "Bonjour, ravi de te voir ici !",
                home: "Accueil",
                projects: "Projets",
                skills: "Skills",
                contact: "Contact",
                menu: "Menu"
                },

                footer: {
                rights: "Tous droits réservés."
                }
      }
    },

    en: {
      translation: {
        hero: {
          title: "Arold Awoubeng Tsatio",
          subtitle: "Software Developer | Project Manager | Cloud Engineer | DevOps",
          description:
            "I build modern and high-performance web applications with a strong focus on usability and well-structured interfaces. With experience in React, JavaScript, and CSS, as well as knowledge of backend development and project management, I can solve both technical and organizational challenges efficiently. I enjoy teamwork, have a solution-oriented mindset, and place strong value on clean code and structured development processes. My goal is to create applications that not only work well, but also provide a compelling user experience.",
          location: "Kaiserslautern, Germany",
          button: "View Projects"
        },

        projects: {
          sectionTitle: "Projects",
          live: "Live Demo",
          code: "View Code",
          noLive: "No live demo available",
          items: {
            smartMensa: {
              title: "Smart Mensa",
              description:
                "Mobile meal reservation application for the university cafeteria, designed to reduce waiting lines and avoid food waste.",
              period: "Since March 2026"
            },
            campus: {
              title: "Campus Entrance (Study Organizer)",
              description:
                "Web application for study and time organization with features such as task management, timer, and progress tracking. Focused on usability, multilingual support, and intuitive interaction.",
              period: "Jan. 2026 - Feb. 2026"
            },
            ticTacToe: {
              title: "Tic-Tac-Toe with AI",
              description:
                "Personal project implementing game logic, multiple difficulty levels, and the Minimax algorithm for optimal decisions.",
              period: "Mar. 2025 - Apr. 2025"
            }
          }
        },

        skills: {
          title: "Skills & Competences",
          description: "An overview of my technical knowledge, tools, and professional competences.",
          categories: {
            frontend: "Frontend",
            backend: "Backend",
            pm: "Project Management",
            tools: "Tools & Version Control",
            uiux: "UI/UX & Design",
            other: "Other Skills"
          }
        },

        contact: {
            title: "Contact",
            description: "Do you have a project in mind or would you like to collaborate? I would be happy to hear from you.",
            infoTitle: "Contact Information",
            availability: "Available immediately – throughout Germany (On-site, Hybrid, Remote)",
            labels: {
                email: "Email",
                phone: "Phone",
                location: "Location"
            },
            form: {
                name: "Name",
                namePlaceholder: "Your name",
                email: "Email",
                emailPlaceholder: "your@email.com",
                message: "Message",
                messagePlaceholder: "Your message...",
                submit: "Send Message",
                success: "Thank you for your message! (This is a demo)"
            }
            },
            header: {
                greeting: "Hello, nice to have you here!",
                home: "Home",
                projects: "Projects",
                skills: "Skills",
                contact: "Contact",
                menu: "Menu"
                },

                footer: {
                rights: "All rights reserved."
                }
      }
    }
  },

  lng: localStorage.getItem("lang") || "de",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;