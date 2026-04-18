import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from "react-i18next";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const currentLang = i18n.language;

  const changeLanguage = (lang: "fr" | "en" | "de") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

 const navItems = [
  { label: t("header.home"), id: 'hero' },
  { label: t("header.projects"), id: 'projects' },
  { label: t("header.skills"), id: 'skills' },
  { label: t("header.certificates"), id: 'certificates' },
  { label: t("header.contact"), id: 'contact' },
];

  const langButtonClass = (lang: string) =>
    `w-10 h-10 rounded-full border flex items-center justify-center transition ${
      currentLang === lang
        ? "bg-[#38BDF8] border-[#38BDF8]"
        : "border-[#38BDF8]/30 hover:bg-[#38BDF8]/10"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1E293B]/80 backdrop-blur-md border-b border-[#38BDF8]/20 shadow-lg">
      <nav className="max-w-7xl mx-auto px-3 md:px-6 py-4">

        {/* TOP BAR */}
        <div className="flex items-center justify-between">

          {/* LEFT SIDE (flags + text) */}
          <div className="flex items-center gap-3">

            {/* LANG SWITCHER */}
            <div className="flex gap-2 -ml-2">
              <button
                onClick={() => changeLanguage("fr")}
                className={langButtonClass("fr")}
                aria-label="Français"
              >
                <img src="https://flagcdn.com/w40/fr.png" className="w-5 h-5 rounded-full" />
              </button>

              <button
                onClick={() => changeLanguage("en")}
                className={langButtonClass("en")}
                aria-label="English"
              >
                <img src="https://flagcdn.com/w40/gb.png" className="w-5 h-5 rounded-full" />
              </button>

              <button
                onClick={() => changeLanguage("de")}
                className={langButtonClass("de")}
                aria-label="Deutsch"
              >
                <img src="https://flagcdn.com/w40/de.png" className="w-5 h-5 rounded-full" />
              </button>
            </div>

            {/* GREETING */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-base md:text-xl font-semibold text-[#38BDF8] hidden sm:block"
            >
              {t("header.greeting")}
            </motion.div>
          </div>

          {/* DESKTOP NAV */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#38BDF8] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </motion.div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#94A3B8] hover:text-[#38BDF8]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE NAV */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-4 pb-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
}