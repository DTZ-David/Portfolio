import React from "react";
import { Github, Linkedin, Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Name and Title */}
            <h3 className="text-2xl font-bold mb-2">
              Héctor Alfonso Castaño David
            </h3>
            <p className="text-gray-400 mb-8">{t.hero.subtitle}</p>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/DTZ-David"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hecto-david"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
            </div>

            {/* Quick Contact */}
            <div className="mb-8 space-y-2 text-gray-400">
              <p>
                <a
                  href="mailto:dtzdavid99@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  dtzdavid99@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="mailto:hectorcastano.apps@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  hectorcastano.apps@gmail.com
                </a>
              </p>
              <p>{t.hero.location}</p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-400">
                <p>© {currentYear} Héctor Alfonso Castaño David.</p>
                <div className="flex items-center">
                  <span>{t.footer.builtWith}</span>
                  <Heart size={16} className="mx-1 text-red-500" />
                  <span>using React & Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
