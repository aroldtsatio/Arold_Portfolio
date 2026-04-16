import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E293B] border-t border-[#38BDF8]/20 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#94A3B8] text-sm">
              © {currentYear} Arold Awoubeng Tsatio. Alle Rechte vorbehalten.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/aroldtsatio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-[#38BDF8] text-[#94A3B8] transition-colors hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/arold-tsatio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-[#38BDF8] text-[#94A3B8] transition-colors hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:aroldtsatio@gmail.com"
              className="p-2 hover:text-[#38BDF8] text-[#94A3B8] transition-colors hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}