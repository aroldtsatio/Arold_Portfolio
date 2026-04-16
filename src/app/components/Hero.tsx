import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38BDF8]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-block">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center text-[#0F172A] text-4xl shadow-xl shadow-[#38BDF8]/50 font-bold">
              AT
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-4 text-white">
            Arold Awoubeng Tsatio
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-6 text-[#38BDF8]">
            Werkstudent Softwareentwickler & Projektmanager
          </h2>
          
          <p className="text-lg md:text-xl text-[#94A3B8] mb-6 max-w-3xl mx-auto leading-relaxed">
            Informatikstudent im 5. Semester an der RPTU Kaiserslautern mit Schwerpunkt Softwareentwicklung und Fokus auf Frontend- und UI-Entwicklung. 
            Praktische Erfahrung in der Entwicklung moderner Webanwendungen mit JavaScript, React, HTML und CSS.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8 text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-[#38BDF8]" />
              <span className="text-sm">aroldtsatio@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#38BDF8]" />
              <span className="text-sm">Kaiserslautern, Deutschland</span>
            </div>
          </div>
          
          <div className="flex gap-6 justify-center mb-12">
            <motion.a
              href="https://github.com/aroldtsatio"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-[#1E293B] hover:bg-[#38BDF8] hover:text-[#0F172A] text-[#38BDF8] backdrop-blur-sm shadow-lg hover:shadow-xl transition-all border border-[#38BDF8]/20"
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/aroldtsatio"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-[#1E293B] hover:bg-[#38BDF8] hover:text-[#0F172A] text-[#38BDF8] backdrop-blur-sm shadow-lg hover:shadow-xl transition-all border border-[#38BDF8]/20"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:aroldtsatio@gmail.com"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-[#1E293B] hover:bg-[#38BDF8] hover:text-[#0F172A] text-[#38BDF8] backdrop-blur-sm shadow-lg hover:shadow-xl transition-all border border-[#38BDF8]/20"
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
          </div>
          
          <motion.button
            onClick={() => {
              const element = document.getElementById('projects');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#38BDF8] text-[#0F172A] rounded-full hover:bg-[#0EA5E9] transition-all shadow-lg shadow-[#38BDF8]/50 hover:shadow-xl hover:shadow-[#38BDF8]/70 font-medium"
          >
            Projekte ansehen
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}