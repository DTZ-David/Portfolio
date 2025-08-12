export interface Translation {
  // Navigation
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    location: string;
    downloadCvEn: string;
    downloadCvEs: string;
  };
  
  // About Section
  about: {
    title: string;
    description1: string;
    description2: string;
    backend: string;
    backendDesc: string;
    mobile: string;
    mobileDesc: string;
    database: string;
    databaseDesc: string;
    architecture: string;
    architectureDesc: string;
  };
  
  // Skills Section
  skills: {
    title: string;
    backendSkills: string;
    mobileSkills: string;
  };
  
  // Experience Section
  experience: {
    title: string;
    company: string;
    period: string;
    backendRole: string;
    backendDesc: string;
    mobileRole: string;
    mobileDesc: string;
    technologiesUsed: string;
  };
  
  // Projects Section
  projects: {
    title: string;
    allProjects: string;
    backendProjects: string;
    mobileProjects: string;
    viewGallery: string;
    code: string;
    demo: string;
    viewCode: string;
    liveDemo: string;
    description: string;
    technologiesUsed: string;
    backendProject: string;
    mobileProject: string;
    // Project descriptions
    appimotionDesc: string;
    traffigDesc: string;
    mobilePosDesc: string;
    inventoryApiDesc: string;
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    letsConnect: string;
    email: string;
    phone: string;
    location: string;
    followMe: string;
    sendMessage: string;
    fullName: string;
    emailAddress: string;
    subject: string;
    message: string;
    sendButton: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
  };
  
  // Footer
  footer: {
    builtWith: string;
  };
  
  // Common
  common: {
    backend: string;
    mobile: string;
  };
}

export const translations: Record<'es' | 'en', Translation> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de Mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      title: 'Héctor Alfonso Castaño David',
      subtitle: 'Desarrollador Backend .NET y Móvil Flutter',
      tagline: 'Construyendo sistemas backend robustos y aplicaciones móviles de alto rendimiento',
      location: 'Valledupar – Cesar, Colombia',
      downloadCvEn: 'Descargar CV (EN)',
      downloadCvEs: 'Descargar CV (ES)',
    },
    about: {
      title: 'Acerca de Mí',
      description1: 'Soy un Ingeniero de Sistemas con experiencia profesional tanto en desarrollo móvil como backend. Creo soluciones robustas, escalables y seguras utilizando el ecosistema .NET para sistemas backend, y aplicaciones móviles modernas y de alto rendimiento con Flutter.',
      description2: 'Me destaco en arquitectura limpia, integración de APIs, autenticación segura y gestión de bases de datos, siempre entregando soluciones de alta calidad enfocadas en el usuario.',
      backend: 'Backend',
      backendDesc: '.NET, APIs, Microservicios',
      mobile: 'Móvil',
      mobileDesc: 'Flutter, Dart, Multiplataforma',
      database: 'Base de Datos',
      databaseDesc: 'SQL, NoSQL, Almacenamiento en la Nube',
      architecture: 'Arquitectura',
      architectureDesc: 'Código Limpio, SOLID, Patrones de Diseño',
    },
    skills: {
      title: 'Habilidades y Tecnologías',
      backendSkills: 'Habilidades Backend',
      mobileSkills: 'Habilidades Móviles',
    },
    experience: {
      title: 'Experiencia Profesional',
      company: 'Inteia',
      period: 'Ene 2024 – Feb 2025',
      backendRole: 'Desarrollador Backend',
      backendDesc: 'Construí APIs de microservicios robustas en .NET, desplegadas con Docker y Kubernetes (AKS). Integré servicios de Azure incluyendo Blob Storage y Key Vault, implementé pipelines de CI/CD con Azure DevOps, y aseguré la calidad del código con análisis de SonarQube.',
      mobileRole: 'Desarrollador Móvil',
      mobileDesc: 'Diseñé e implementé interfaces de usuario modernas en Flutter siguiendo principios de Atomic Design. Gestioné el estado de la aplicación con Riverpod, integré autenticación segura con Azure Entra ID, e implementé seguimiento de rutas en tiempo real con Google Maps API.',
      technologiesUsed: 'Tecnologías Utilizadas',
    },
    projects: {
      title: 'Proyectos Destacados',
      allProjects: 'Todos los Proyectos',
      backendProjects: 'Proyectos Backend',
      mobileProjects: 'Proyectos Móviles',
      viewGallery: 'Ver Galería',
      code: 'Código',
      demo: 'Demo',
      viewCode: 'Ver Código',
      liveDemo: 'Demo en Vivo',
      description: 'Descripción',
      technologiesUsed: 'Tecnologías Utilizadas',
      backendProject: 'Proyecto Backend',
      mobileProject: 'Proyecto Móvil',
      appimotionDesc: 'Solución integral de gestión de movilidad y tráfico que combina aplicación móvil y servicios backend. Incluye seguimiento en tiempo real, optimización de rutas y análisis de tráfico.',
      traffigDesc: 'Sistema de control de tráfico en tiempo real con capacidades avanzadas de análisis y monitoreo. Construido con arquitectura de microservicios para escalabilidad y rendimiento.',
      mobilePosDesc: 'Aplicación de punto de venta multiplataforma construida con Flutter. Incluye gestión de inventario, procesamiento de pagos y sincronización offline.',
      inventoryApiDesc: 'API RESTful para gestión de inventario con autenticación basada en roles, notificaciones en tiempo real y funciones completas de reportes.',
    },
    contact: {
      title: 'Ponte en Contacto',
      subtitle: '¿Listo para comenzar tu próximo proyecto o tienes alguna pregunta? Me encantaría escucharte. Creemos algo increíble juntos.',
      letsConnect: 'Conectemos',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      location: 'Ubicación',
      followMe: 'Sígueme',
      sendMessage: 'Enviar Mensaje',
      fullName: 'Nombre Completo',
      emailAddress: 'Dirección de Correo',
      subject: 'Asunto',
      message: 'Mensaje',
      sendButton: 'Enviar Mensaje',
      namePlaceholder: 'Tu nombre completo',
      emailPlaceholder: 'tu.correo@ejemplo.com',
      subjectPlaceholder: '¿De qué se trata?',
      messagePlaceholder: 'Cuéntame sobre tu proyecto o lo que te gustaría discutir...',
    },
    footer: {
      builtWith: 'Construido con',
    },
    common: {
      backend: 'backend',
      mobile: 'móvil',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'Héctor Alfonso Castaño David',
      subtitle: 'Backend .NET & Flutter Mobile Developer',
      tagline: 'Building robust backend systems & high-performance mobile apps',
      location: 'Valledupar – Cesar, Colombia',
      downloadCvEn: 'Download CV (EN)',
      downloadCvEs: 'Download CV (ES)',
    },
    about: {
      title: 'About Me',
      description1: 'I am a Systems Engineer with professional experience in both mobile and backend development. I create robust, scalable, and secure solutions using the .NET ecosystem for backend systems, and modern, high-performance mobile apps with Flutter.',
      description2: 'I excel in clean architecture, API integration, secure authentication, and database management, always delivering high-quality, user-focused solutions.',
      backend: 'Backend',
      backendDesc: '.NET, APIs, Microservices',
      mobile: 'Mobile',
      mobileDesc: 'Flutter, Dart, Cross-platform',
      database: 'Database',
      databaseDesc: 'SQL, NoSQL, Cloud Storage',
      architecture: 'Architecture',
      architectureDesc: 'Clean Code, SOLID, Design Patterns',
    },
    skills: {
      title: 'Skills & Technologies',
      backendSkills: 'Backend Skills',
      mobileSkills: 'Mobile Skills',
    },
    experience: {
      title: 'Professional Experience',
      company: 'Inteia',
      period: 'Jan 2024 – Feb 2025',
      backendRole: 'Backend Developer',
      backendDesc: 'Built robust microservices APIs in .NET, deployed with Docker & Kubernetes (AKS). Integrated Azure services including Blob Storage and Key Vault, implemented CI/CD pipelines with Azure DevOps, and ensured code quality with SonarQube analysis.',
      mobileRole: 'Mobile Developer',
      mobileDesc: 'Designed and implemented modern UI interfaces in Flutter following Atomic Design principles. Managed application state with Riverpod, integrated secure authentication with Azure Entra ID, and implemented real-time route tracking with Google Maps API.',
      technologiesUsed: 'Technologies Used',
    },
    projects: {
      title: 'Featured Projects',
      allProjects: 'All Projects',
      backendProjects: 'Backend Projects',
      mobileProjects: 'Mobile Projects',
      viewGallery: 'View Gallery',
      code: 'Code',
      demo: 'Demo',
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
      description: 'Description',
      technologiesUsed: 'Technologies Used',
      backendProject: 'Backend Project',
      mobileProject: 'Mobile Project',
      appimotionDesc: 'Comprehensive mobility and traffic management solution combining mobile app and backend services. Features real-time tracking, route optimization, and traffic analytics.',
      traffigDesc: 'Real-time traffic control system with advanced analytics and monitoring capabilities. Built with microservices architecture for scalability and performance.',
      mobilePosDesc: 'Cross-platform point-of-sale application built with Flutter. Features inventory management, payment processing, and offline synchronization.',
      inventoryApiDesc: 'RESTful API for inventory management with role-based authentication, real-time notifications, and comprehensive reporting features.',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to start your next project or have a question? I\'d love to hear from you. Let\'s create something amazing together.',
      letsConnect: 'Let\'s Connect',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      followMe: 'Follow Me',
      sendMessage: 'Send Message',
      fullName: 'Full Name',
      emailAddress: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      sendButton: 'Send Message',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'your.email@example.com',
      subjectPlaceholder: 'What\'s this about?',
      messagePlaceholder: 'Tell me about your project or what you\'d like to discuss...',
    },
    footer: {
      builtWith: 'Built with',
    },
    common: {
      backend: 'backend',
      mobile: 'mobile',
    },
  },
};