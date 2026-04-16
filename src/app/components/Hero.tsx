import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import arold from '../../assets/arold.jpeg';

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
           <img
              src={arold}
              alt="Arold Awoubeng Tsatio"
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover object-[50%_25%] border-4 border-[#38BDF8] shadow-[0_0_40px_#38BDF8]"

            />

          </div>
          
          <h1 className="text-5xl md:text-7xl mb-4 text-white">
            Arold Awoubeng Tsatio
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-6 text-[#38BDF8]">
            Softwareentwickler | Projektmanager | Cloud engineer | DevOps
          </h2>
          
          <p className="text-lg md:text-xl text-[#94A3B8] mb-6 max-w-3xl mx-auto leading-relaxed">
            Ich entwickle moderne und performante Webanwendungen mit Fokus auf Benutzerfreundlichkeit und klar strukturierten Interfaces.

Durch meine Erfahrung in Frontend-Technologien wie React, JavaScript und CSS sowie meine Kenntnisse in Backend-Entwicklung und Projektmanagement kann ich sowohl technische als auch organisatorische Herausforderungen effizient lösen.

Ich arbeite gerne im Team, denke lösungsorientiert und lege großen Wert auf sauberen Code und strukturierte Entwicklungsprozesse.

Mein Anspruch ist es, Anwendungen zu entwickeln, die nicht nur funktionieren, sondern auch ein überzeugendes Nutzererlebnis bieten.
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
  href="https://gitlab.com/a_awoubeng24"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.1, y: -5 }}
  whileTap={{ scale: 0.95 }}
  className="p-3 rounded-full bg-[#1E293B] hover:bg-[#38BDF8] hover:text-[#0F172A] text-[#38BDF8] backdrop-blur-sm shadow-lg hover:shadow-xl transition-all border border-[#38BDF8]/20"
  aria-label="GitLab"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M22.5 9.5l-2-6a1 1 0 00-.95-.7 1 1 0 00-.9.6L16.5 9H7.5L5.35 3.4a1 1 0 00-.9-.6 1 1 0 00-.95.7l-2 6a1 1 0 00.25 1l10 10a1 1 0 001.4 0l10-10a1 1 0 00.25-1z"/>
  </svg>
</motion.a>
            <motion.a
              href="https://github.com/@a_awoubeng24"
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
              href="https://linkedin.com/in/arold-tsatio"
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