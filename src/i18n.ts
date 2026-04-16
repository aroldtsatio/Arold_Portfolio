import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        hero: {
          title: "Arold Awoubeng Tsatio",
          subtitle: "Working Student Software Developer & Project Manager",
          description:
            "I build modern and user-friendly web applications with a strong focus on frontend development, clean interfaces, and practical solutions.",
          button: "View Projects",
          location: "Kaiserslautern, Germany",
        },
      },
    },
    fr: {
      translation: {
        hero: {
          title: "Arold Awoubeng Tsatio",
          subtitle: "Développeur logiciel en alternance & chef de projet",
          description:
            "Je développe des applications web modernes et intuitives, avec un fort intérêt pour le frontend, les interfaces propres et les solutions concrètes.",
          button: "Voir les projets",
          location: "Kaiserslautern, Allemagne",
        },
      },
    },
    de: {
      translation: {
        hero: {
          title: "Arold Awoubeng Tsatio",
          subtitle: "Werkstudent Softwareentwickler & Projektmanager",
          description:
            "Ich entwickle moderne und benutzerfreundliche Webanwendungen mit Fokus auf Frontend, klare Interfaces und praxisnahe Lösungen.",
          button: "Projekte ansehen",
          location: "Kaiserslautern, Deutschland",
        },
      },
    },
  },
  lng: localStorage.getItem("lang") || "de",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;