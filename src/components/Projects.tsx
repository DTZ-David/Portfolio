import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectGallery from './ProjectGallery';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'backend' | 'mobile';
  githubUrl?: string;
  demoUrl?: string;
  images: string[];
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'backend' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 'appimotion',
      title: 'Appimotion',
      description: t.projects.appimotionDesc,
      technologies: ['.NET', 'Flutter', 'Azure', 'Google Maps API', 'Riverpod', 'Docker'],
      category: 'mobile',
      githubUrl: 'https://github.com/hectorcastano/appimotion',
      demoUrl: 'https://appimotion.demo.com',
      images: [
        'https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/163016/car-vehicle-drive-travel-163016.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 'traffig',
      title: 'Traffig',
      description: t.projects.traffigDesc,
      technologies: ['.NET', 'Azure', 'SQL Server', 'Docker', 'Kubernetes', 'SignalR'],
      category: 'backend',
      githubUrl: 'https://github.com/hectorcastano/traffig',
      images: [
        'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1123972/pexels-photo-1123972.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 'mobile-pos',
      title: 'Mobile POS System',
      description: t.projects.mobilePosDesc,
      technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Riverpod', 'i18n'],
      category: 'mobile',
      githubUrl: 'https://github.com/hectorcastano/mobile-pos',
      images: [
        'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4386346/pexels-photo-4386346.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    {
      id: 'inventory-api',
      title: 'Inventory Management API',
      description: t.projects.inventoryApiDesc,
      technologies: ['.NET', 'PostgreSQL', 'JWT', 'Docker', 'Azure DevOps', 'SonarQube'],
      category: 'backend',
      githubUrl: 'https://github.com/hectorcastano/inventory-api',
      images: [
        'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.projects.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-2 shadow-lg">
              {(['all', 'backend', 'mobile'] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 capitalize ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {category === 'all' ? t.projects.allProjects : category === 'backend' ? t.projects.backendProjects : t.projects.mobileProjects}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'backend' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-purple-500 text-white'
                    }`}>
                      {project.category === 'backend' ? t.common.backend : t.common.mobile}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gray-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    {t.projects.viewGallery}
                  </button>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        <Github size={16} className="mr-2" />
                        {t.projects.code}
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors duration-200"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        {t.projects.demo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Gallery Modal */}
          {selectedProject && (
            <ProjectGallery
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;