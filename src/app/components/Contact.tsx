import { motion } from 'motion/react';
import { Mail, MapPin, Send, Phone, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('Vielen Dank für Ihre Nachricht! (Dies ist eine Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#0F172A] relative">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38BDF8]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white text-center">
            Kontakt
          </h2>
          <p className="text-[#94A3B8] text-center mb-16 max-w-2xl mx-auto">
            Haben Sie ein Projekt im Kopf oder möchten Sie zusammenarbeiten? Ich freue mich auf Ihre Nachricht!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] rounded-2xl p-8 h-full shadow-xl">
              <h3 className="text-2xl mb-6 text-[#0F172A] font-semibold">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0F172A]/20 backdrop-blur-sm rounded-xl">
                    <Mail size={20} className="text-[#0F172A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#0F172A]/70 mb-1">Email</p>
                    <a href="mailto:aroldtsatio@gmail.com" className="text-[#0F172A] hover:text-[#0F172A]/80 transition-colors font-medium">
                      aroldtsatio@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0F172A]/20 backdrop-blur-sm rounded-xl">
                    <Phone size={20} className="text-[#0F172A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#0F172A]/70 mb-1">Telefon</p>
                    <a href="tel:+491634707002" className="text-[#0F172A] font-medium">
                      +49 163 4707002
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0F172A]/20 backdrop-blur-sm rounded-xl">
                    <MapPin size={20} className="text-[#0F172A]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#0F172A]/70 mb-1">Standort</p>
                    {/* <p className="text-[#0F172A] font-medium">Meisenweg 8</p> */}
                    <p className="text-[#0F172A] font-medium">67663 Kaiserslautern</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#0F172A]/20">
                <p className="text-[#0F172A]/80 text-sm leading-relaxed mb-6">
                  Ab sofort verfügbar – Deutschlandweit (Vor Ort, Hybrid, Remote)
                </p>
                
                <div className="flex gap-4">
                  <a
                    href="https://github.com/aroldtsatio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#0F172A]/20 hover:bg-[#0F172A]/30 rounded-xl transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={20} className="text-[#0F172A]" />
                  </a>
                  <a
                    href="https://linkedin.com/in/arold-tsatio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#0F172A]/20 hover:bg-[#0F172A]/30 rounded-xl transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} className="text-[#0F172A]" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-[#1E293B] backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#38BDF8]/10">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-[#94A3B8] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#38BDF8]/20 bg-[#0F172A] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all placeholder:text-[#94A3B8]/50"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-[#94A3B8] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#38BDF8]/20 bg-[#0F172A] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all placeholder:text-[#94A3B8]/50"
                    placeholder="ihre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[#94A3B8] mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[#38BDF8]/20 bg-[#0F172A] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all resize-none placeholder:text-[#94A3B8]/50"
                    placeholder="Ihre Nachricht..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-[#38BDF8] text-[#0F172A] rounded-xl hover:bg-[#0EA5E9] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#38BDF8]/50 font-medium"
                >
                  <Send size={18} />
                  Nachricht senden
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
