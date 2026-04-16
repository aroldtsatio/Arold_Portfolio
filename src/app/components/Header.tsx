import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from "react-i18next";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  

  const navItems = [
    { label: 'Start', id: 'hero' },
    { label: 'Projekte', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Kontakt', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1E293B]/80 backdrop-blur-md border-b border-[#38BDF8]/20 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => {
              i18n.changeLanguage("fr");
              localStorage.setItem("lang", "fr");
            }}
            className="px-3 py-1 rounded-md border border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#0F172A] transition text-sm"
          >
            FR
          </button>

          <button
            onClick={() => {
              i18n.changeLanguage("en");
              localStorage.setItem("lang", "en");
            }}
            className="px-3 py-1 rounded-md border border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#0F172A] transition text-sm"
          >
            EN
          </button>

          <button
            onClick={() => {
              i18n.changeLanguage("de");
              localStorage.setItem("lang", "de");
            }}
            className="px-3 py-1 rounded-md border border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#0F172A] transition text-sm"
          >
            DE
          </button>
        </div>
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-semibold text-[#38BDF8]"
          >
            Hallo, schön dass du da bist!
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#38BDF8] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#94A3B8] hover:text-[#38BDF8]"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>


        {/* Mobile Navigation */}
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
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-[#94A3B8] hover:text-[#38BDF8] transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}