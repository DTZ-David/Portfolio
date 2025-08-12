import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProjectGallery from "./ProjectGallery";
import { useLanguage } from "../contexts/LanguageContext";

import img1 from "../assets/images/appimotion.png";
import img2 from "../assets/images/image.png";

import img3 from "../assets/images/AuthScreen.png";
import img4 from "../assets/images/EventView.png";
import img5 from "../assets/images/FeedView.png";
import img6 from "../assets/images/image2.png";

import img7 from "../assets/images/SolarRiego.png";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "backend" | "mobile";
  githubUrl?: string;
  demoUrl?: string;
  images: string[];
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "backend" | "mobile"
  >("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: "appimotion-backend",
      title: "Appimotion+ Backend",
      description: t.projects.appimotionBackendDesc,
      technologies: [".NET", "REST API", "MongoDB", "Hangfire", "Azure DevOps"],
      category: "backend",

      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png",
      ],
    },
    {
      id: "agro-monitoring-backend",
      title: "Backend - Sistema de Monitoreo Agrícola",
      description: t.projects.solarRiegoBackend,
      technologies: [".NET", "REST API", "MongoDB", "IoT"],
      category: "backend",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png",
      ],
    },

    {
      id: "appimotion-mobile",
      title: "Appimotion+ Mobile",
      description: t.projects.appimotionMobileDesc,
      technologies: ["Flutter", "Google Maps API", "Riverpod", "Docker"],
      category: "mobile",
      demoUrl:
        "https://play.google.com/store/apps/details?id=com.inteia.appimotion_plus&hl=es_CO",
      images: [img1, img2],
    },

    {
      id: "traffig",
      title: "Traffig",
      description: t.projects.traffigDesc,
      technologies: [".NET", "Azure", "SQL Server", "Docker", "Kubernetes"],
      category: "backend",
      demoUrl:
        "https://impactotic.co/resource-center/smartcityexpo/inteia-hub-sostenibilidad-e-interoperabilidad-tecnologica-para-los-territorios",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png",
      ],
    },
    {
      id: "sigmint",
      title: "SIGMINT",
      description: t.projects.sigming,
      technologies: ["Flutter", "REST API", "Atomic Design", "Map Integration"],
      category: "mobile",
      // demoUrl o githubUrl si tienes
      images: [
        "https://www.medellin.gov.co/es/wp-content/uploads/2022/03/Open-Graph-.png",
      ],
    },
    {
      id: "mobile-pos",
      title: "SyncUpC",
      description: t.projects.syncUpcMobile,
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "MongoDB",
        "Riverpod",
        "Supabase",
        "QR Generator",
      ],
      category: "mobile",
      githubUrl: "https://github.com/DTZ-David/SyncUpC-App.git",
      images: [img3, img4, img5],
    },
    {
      id: "inventory-api",
      title: "SyncUpC-Backend",
      description: t.projects.syncUpCBackend,
      technologies: [
        ".NET",
        "PostgreSQL",
        "JWT",
        "Docker",
        "Azure DevOps",
        "SonarQube",
      ],
      category: "backend",
      githubUrl: "https://github.com/DTZ-David/SyncUpC-Backend.git",
      images: [img6],
    },
    {
      id: "agro-monitoring-mobile",
      title: "SolarRiego",
      description: t.projects.solarRiegoMobile,
      technologies: ["Flutter", "REST API"],
      category: "mobile",
      images: [img7],
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
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
              {(["all", "backend", "mobile"] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 capitalize ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {category === "all"
                    ? t.projects.allProjects
                    : category === "backend"
                    ? t.projects.backendProjects
                    : t.projects.mobileProjects}
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
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.category === "backend"
                          ? "bg-blue-500 text-white"
                          : "bg-purple-500 text-white"
                      }`}
                    >
                      {project.category === "backend"
                        ? t.common.backend
                        : t.common.mobile}
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
