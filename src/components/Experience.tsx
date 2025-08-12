import React from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.experience.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {/* Experience Item */}
            <div className="relative flex items-start mb-12">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>

              <div className="ml-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t.experience.company}</h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{t.experience.period}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Backend Role */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {t.experience.backendRole}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {t.experience.backendDesc}
                    </p>
                  </div>

                  {/* Mobile Role */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {t.experience.mobileRole}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {t.experience.mobileDesc}
                    </p>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <h5 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                    {t.experience.technologiesUsed}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {['.NET', 'Flutter', 'Azure', 'Docker', 'Kubernetes', 'Riverpod', 'Azure DevOps', 'SonarQube'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;