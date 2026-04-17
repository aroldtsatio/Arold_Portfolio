import { motion } from 'motion/react';
import { useTranslation } from "react-i18next";

interface SkillCategory {
  key: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    key: 'frontend',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React', 'React Native', 'Vue.js'],
  },
  {
    key: 'backend',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Node.js', 'SQL', 'JUnit', 'Docker'],
  },
  {
    key: 'pm',
    skills: ['Scrum', 'Agile Methoden', 'Jira', 'Confluence', 'GitLab', 'Issue-Tracking', 'Sprintplanung'],
  },
  {
    key: 'tools',
    skills: ['Git', 'GitLab', 'GitHub', 'VS Code', 'IntelliJ', 'Maven', 'Gradle', 'AWS EC2'],
  },
  {
    key: 'uiux',
    skills: ['Responsive Design', 'Benutzerfreundlichkeit', 'Intuitive Interfaces', 'Prototyping'],
  },
  {
    key: 'other',
    skills: ['Python', 'PHP', 'TDD', 'Code Reviews', 'Datenverarbeitung', 'Cloud Computing'],
  },
];

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 px-6 bg-[#0F172A] relative scroll-mt-28">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white text-center">
            {t("skills.title")}
          </h2>

          <p className="text-[#94A3B8] text-center mb-16 max-w-2xl mx-auto">
            {t("skills.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-[#1E293B] backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#38BDF8]/10 hover:border-[#38BDF8]/30 transition-all"
            >
              <h3 className="text-xl mb-4 text-[#38BDF8]">
                {t(`skills.categories.${category.key}`)}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#94A3B8] rounded-lg text-sm hover:border-[#38BDF8]/40 hover:text-[#38BDF8] hover:shadow-md transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}