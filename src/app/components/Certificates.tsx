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
    <section
      id="certificates"
      className="py-16 md:py-20 px-4 sm:px-6 bg-[#0F172A] relative scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
            {t("certificates.title")}
          </h2>

          <p className="text-white/70 text-center mb-10 md:mb-14 max-w-2xl mx-auto">
            {t("certificates.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 justify-items-center">
          {certificates.map((cert, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="w-full max-w-[360px] md:max-w-[500px]"
                style={{ perspective: "1200px" }}
              >
                <div
                  className="relative h-[430px] md:h-[460px] transition-transform duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 bg-white border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between gap-4 mb-8">
                        <img
                          src={cert.logo}
                          alt={cert.issuer}
                          className="h-9 md:h-11 max-w-[140px] object-contain"
                        />

                        <span className="text-sm md:text-base text-gray-500 font-semibold whitespace-nowrap">
                          {cert.date}
                        </span>
                      </div>

                      <div className="flex justify-center mb-7">
                        <img
                          src={cert.badge}
                          alt={`${cert.title} badge`}
                          className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-md"
                        />
                      </div>

                      <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                          {cert.title}
                        </h3>

                        <p className="text-gray-600 text-lg md:text-xl font-medium">
                          {cert.issuer}
                        </p>
                      </div>

                      <div className="mt-auto flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                          onClick={() => toggleFlip(index)}
                          className="px-5 py-2.5 text-sm md:text-base rounded-full bg-sky-500 text-white hover:bg-sky-600 transition font-semibold"
                        >
                          {t("certificates.view")}
                        </button>

                        {cert.link && cert.link !== "#" && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 text-sm md:text-base rounded-full border border-sky-500 text-sky-600 hover:bg-sky-50 transition font-semibold"
                          >
                            {t("certificates.open")}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 bg-white border border-white/20 rounded-3xl p-5 md:p-6 shadow-2xl"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <h3 className="text-base md:text-xl font-semibold text-gray-900">
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

                      {cert.link && cert.link !== "#" && (
                        <div className="mt-4 flex justify-center">
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition font-semibold"
                          >
                            {t("certificates.open")}
                          </a>
                        </div>
                      )}
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