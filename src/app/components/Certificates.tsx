import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import linuxFoundationLogo from "../../assets/certificates/linux-foundation-logo.png";
import linuxBadge from "../../assets/certificates/linux-badge.png";
import linuxCertificatePreview from "../../assets/certificates/linux-certificate-preview.png";
import agileLogo from "../../assets/certificates/agile-logo.png";
import agileBadge from "../../assets/certificates/agile-badge.png";
import agilePreview from "../../assets/certificates/agile-preview.png";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  logo: string;
  badge: string;
  preview: string;
}

const certificates: Certificate[] = [
  {
    title: "Introduction to Linux (LFS101)",
    issuer: "The Linux Foundation",
    date: "April 2026",
    link: "#",
    logo: linuxFoundationLogo,
    badge: linuxBadge,
    preview: linuxCertificatePreview,
  },
    {
    title: "Agiles Projektmanagement",
    issuer: "LinkedIn Learning",
    date: "April 2026",
    link: "#", 
    logo: agileLogo, 
    badge: agileBadge,
    preview: agilePreview,
  },
];

export function Certificates() {
  const { t } = useTranslation();
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="certificates" className="py-20 px-6 bg-[#0F172A] relative scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-white text-center mb-4">
            {t("certificates.title")}
          </h2>
          <p className="text-white/80 text-center mb-16 max-w-2xl mx-auto">
            {t("certificates.description")}
          </p>
        </motion.div>

        <div className="flex justify-center">
          {certificates.map((cert, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="w-full max-w-xl"
                style={{ perspective: "1200px" }}
              >
                <div
                  className="relative h-[500px] md:h-[520px] transition-transform duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 bg-white border border-gray-200 rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between gap-4 mb-8">
                        <img
                          src={cert.logo}
                          alt={cert.issuer}
                          className="h-12 object-contain"
                        />
                        <span className="text-sm text-gray-500 font-medium">
                          {cert.date}
                        </span>
                      </div>

                      <div className="flex justify-center mb-6">
                        <img
                          src={cert.badge}
                          alt={`${cert.title} badge`}
                          className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-md"
                        />
                      </div>

                      <div className="text-center mb-6">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                          {cert.title}
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg">
                          {cert.issuer}
                        </p>
                      </div>

                      <div className="mt-auto flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                          onClick={() => toggleFlip(index)}
                          className="px-6 py-3 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition font-medium"
                        >
                          {t("certificates.view")}
                        </button>

                        {cert.link && cert.link !== "#" && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full border border-sky-500 text-sky-600 hover:bg-sky-50 transition font-medium"
                          >
                            {t("certificates.open")}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 bg-white border border-gray-200 rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {t("certificates.certificatePreview")}
                        </h3>
                        <button
                          onClick={() => toggleFlip(index)}
                          className="text-sm text-sky-600 hover:underline font-medium"
                        >
                          {t("certificates.back")}
                        </button>
                      </div>

                      <div className="flex-1 flex items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden">
                        <img
                          src={cert.preview}
                          alt={`${cert.title} certificate`}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="mt-4 flex justify-center">
                        {cert.link && cert.link !== "#" && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition font-medium"
                          >
                            {t("certificates.open")}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}