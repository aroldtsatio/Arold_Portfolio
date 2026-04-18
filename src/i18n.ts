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
            "Ich programmiere nicht nur, ich erschaffe Erlebnisse. Ich entwickle moderne und leistungsstarke Webanwendungen mit einem klaren Fokus auf den Nutzer. Mit Technologien wie React, JavaScript und CSS gestalte ich strukturierte, dynamische und benutzerfreundliche Interfaces. Durch die Kombination aus Backend-Entwicklung und Projektmanagement bin ich in der Lage, sowohl technische als auch organisatorische Herausforderungen effizient zu bewältigen. Qualität, sauberer Code und bewährte Methoden stehen für mich an erster Stelle. Teamarbeit und Engagement sind für mich selbstverständlich. Mein Ziel ist es, zuverlässige, skalierbare und wirklich ansprechende Anwendungen zu entwickeln. Denn eine erfolgreiche Anwendung ist vor allem eines: eine Erfahrung, die im Gedächtnis bleibt.",
          location: "Kaiserslautern, Deutschland",
          button: "Projekte ansehen",
          downloadCv: "CV herunterladen",
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
            certificates: "Zertifikate",
            contact: "Kontakt",
            menu: "Menü"
            },

            footer: {
            rights: "Alle Rechte vorbehalten."
         },
        certificates: {
            title: "Zertifikate",
            description: "Meine abgeschlossenen Zertifizierungen und erworbenen Badges",
            view: "Zertifikat ansehen",
            open: "Original öffnen",
            back: "Zurück",
            certificatePreview: "Zertifikatsvorschau"
          }
      }
    },

    fr: {
      translation: {
        hero: {
          title: "Arold Awoubeng Tsatio",
          subtitle: "Développeur logiciel | Chef de projet | Cloud Engineer | DevOps",
          description:
            "Je ne me contente pas de coder, je construis des expériences. Je conçois des applications web modernes et performantes, centrées sur l’utilisateur. Grâce à React, JavaScript et CSS, je développe des interfaces claires, dynamiques et bien structurées. En combinant développement backend et gestion de projet, je relève efficacement des défis techniques et organisationnels. J’accorde une grande importance à la qualité du code, aux bonnes pratiques et à la collaboration. Collaboratif et engagé, mon objectif est de créer des applications fiables, évolutives et réellement engageantes. Car une application réussie, c’est avant tout une expérience qui marque.",
          location: "Kaiserslautern, Allemagne",
          button: "Voir les projets",
        downloadCv: "Télécharger le CV"
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
                certificates: "Certificats",
                contact: "Contact",
                menu: "Menu"
                },

                footer: {
                rights: "Tous droits réservés."
                },
                certificates: {
                title: "Certificats",
                description: "Mes certifications obtenues et badges",
                view: "Voir le certificat",
                open: "Ouvrir l’original",
                back: "Retour",
                certificatePreview: "Aperçu du certificat"
              }
      }
    },

    en: {
      translation: {
        hero: {
          title: "Arold Awoubeng Tsatio",
          subtitle: "Software Developer | Project Manager | Cloud Engineer | DevOps",
          description:
            "I don’t just code I build experiences. I design modern and high-performance web applications with a strong focus on the user. Using technologies like React, JavaScript, and CSS, I create clean, dynamic, and well-structured interfaces. By combining backend development with project management, I effectively tackle both technical and organizational challenges. I place great importance on code quality, best practices, and collaboration. Collaborative and driven, my goal is to build reliable, scalable, and truly engaging applications. Because a successful application is more than just functionality — it’s an experience that leaves a lasting impression.",
          location: "Kaiserslautern, Germany",
          button: "View Projects",
          downloadCv: "Download CV"
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
                certificates: "Certificates",
                contact: "Contact",
                menu: "Menu"
                },

                footer: {
                rights: "All rights reserved."
                },
                certificates: {
                  title: "Certificates",
                  description: "My completed certifications and earned badges",
                  view: "View certificate",
                  open: "Open original",
                  back: "Back",
                  certificatePreview: "Certificate preview"
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