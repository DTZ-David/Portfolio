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
    appimotionMobileDesc: string;
    appimotionBackendDesc: string;
    solarRiegoBackend: string;
    solarRiegoMobile : string;
    traffigDesc: string;
    syncUpCBackend : string;
    syncUpcMobile :string;
    sigming: string;
   
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
    privacyPolicy: string;
  };

  // Privacy Policy
  privacyPolicy: {
    title: string;
    lastUpdated: string;
    intro: string;
    dataCollectedTitle: string;
    dataCollectedBody: string;
    dataCollectedItems: string[];
    dataUseTitle: string;
    dataUseBody: string;
    dataUseItems: string[];
    thirdPartyTitle: string;
    thirdPartyBody: string;
    thirdPartyItems: string[];
    dataRetentionTitle: string;
    dataRetentionBody: string;
    userRightsTitle: string;
    userRightsBody: string;
    userRightsItems: string[];
    securityTitle: string;
    securityBody: string;
    childrenTitle: string;
    childrenBody: string;
    changesTitle: string;
    changesBody: string;
    contactTitle: string;
    contactBody: string;
    closeButton: string;
    backToPortfolio: string;
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
    backendDesc: "Construyo APIs de microservicios escalables y seguras con .NET, contenerizadas con Docker y desplegadas en Kubernetes (AKS). Tengo experiencia integrando servicios de Azure como Blob Storage y Key Vault, implementando CI/CD con Azure DevOps y asegurando la calidad del código con SonarQube. Mi enfoque combina arquitectura hexagonal, principios SOLID y bases de datos SQL/NoSQL (SQL Server, PostgreSQL, MongoDB, CosmosDB) para crear soluciones limpias y mantenibles. Trabajo bajo Scrum, disfruto la colaboración y mantengo una actitud proactiva orientada a la entrega de valor.",
      mobileRole: 'Desarrollador Móvil',
      mobileDesc: 'Diseño y desarrollo aplicaciones móviles multiplataforma con Flutter, priorizando interfaces modernas y usabilidad, siguiendo principios de Atomic Design. Gestiono el estado de forma eficiente con Riverpod e integro funcionalidades avanzadas como autenticación segura con Azure Entra ID, geolocalización y trazado de rutas en tiempo real con Google Maps API. He trabajado en la implementación de notificaciones push, consumo de APIs RESTful y sincronización en tiempo real con backends en .NET y bases de datos SQL/NoSQL. Mi enfoque combina buenas prácticas de arquitectura, optimización de rendimiento y una experiencia de usuario fluida. Trabajo bajo metodologías ágiles y mantengo una actitud proactiva, orientada a entregar valor tangible en cada iteración. ',
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
      appimotionMobileDesc: `
    Aplicación móvil para promover la movilidad sostenible, disponible en Google Play.
    Tecnologías: Flutter, Google Maps API, Riverpod, Docker.

    Aportes clave:
    - Desarrollo de la interfaz y funcionalidades móviles.
    - Integración con backend para gestión en tiempo real.
    - Uso de Google Maps API para visualización de rutas.
  `,
      appimotionBackendDesc:  `
    Plataforma backend que soporta la administración y trazabilidad del sistema Appimotion+.
    Tecnologías: .NET, REST API, MongoDB, Hangfire, Azure DevOps.
    Aportes clave:
    - Desarrollo de múltiples endpoints para el módulo AdminService, incluyendo gestión de usuarios, rutas, eventos y configuraciones.
    - Implementación de funcionalidades REST (CRUD, autenticación, validaciones, filtros).
    - Integración de procesos en segundo plano con Hangfire para limpieza de registros, tareas automáticas y reportes.
  `,
      solarRiegoBackend: `
    Backend desarrollado en .NET para la gestión de datos provenientes de sensores IoT instalados en invernaderos en Sotará, Cauca.
    Se encarga de recibir, almacenar y procesar variables agroambientales como temperatura, humedad del suelo y nivel de agua,
    facilitando la toma de decisiones para una agricultura sostenible.
    Tecnologías: .NET, REST API, MongoDB, IoT.
    Aportes clave:
    - Implementación de endpoints seguros y escalables para la ingesta de datos de sensores.
    - Diseño de modelo de datos para variables agroambientales con alta frecuencia de actualización.
    - Integración con fuentes renovables de energía para operación sostenible.
  `,
      solarRiegoMobile:  `
    Aplicación web desarrollada con Flutter que permite a los agricultores visualizar en tiempo real
    las métricas de temperatura, humedad del suelo y nivel de agua capturadas por sensores instalados en invernaderos.
    La plataforma facilita la gestión sostenible del recurso hídrico y energía renovable en la producción agrícola.
    Tecnologías: Flutter, REST API.
    Aportes clave:
    - Diseño de interfaz amigable y accesible para usuarios rurales.
    - Visualización dinámica de gráficos y alertas para una toma de decisiones eficiente.
    - Conexión en tiempo real con backend mediante API REST.
  `,
      traffigDesc: "Sistema de control de tráfico en tiempo real con capacidades avanzadas de análisis y monitoreo. Construido con arquitectura de microservicios para escalabilidad y rendimiento.",
      syncUpCBackend: `Desarrollé el backend para SyncUpC, una plataforma digital diseñada para la gestión de eventos académicos en la Universidad Popular del Cesar. Mi trabajo consistió en implementar una solución robusta y escalable utilizando .NET, aplicando principios de arquitectura hexagonal (Clean Architecture) y Domain-Driven Design (DDD).

El sistema se diseñó con una estructura de microservicios, lo que facilitó una clara separación de responsabilidades y un desarrollo más ágil.
`,
      syncUpcMobile: `SyncUpC es una solución digital compuesta por una aplicación móvil y una plataforma web diseñada para optimizar la gestión de eventos académicos en entornos universitarios. El sistema permite:

Consultar eventos institucionales en tiempo real.

Inscribirse y recibir notificaciones personalizadas.

Registrar la asistencia mediante escaneo de códigos QR, registrando horas de entrada/salida.`,
      sigming: `
    Aplicación móvil desarrollada para el equipo operativo de tránsito de la ciudad de Medellín, enfocada en la detección, reporte y seguimiento de fallas en señales viales, así como en la consulta de normativas asociadas a zonas específicas. La solución fue diseñada a medida para dispositivos de campo utilizados por personal técnico.
    🔧 Aportes clave:
    Desarrollo con Flutter, asegurando compatibilidad y rendimiento en dispositivos institucionales.
    Implementación de Atomic Design para facilitar la mantenibilidad y escalabilidad de la interfaz.
    `
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
      privacyPolicy: 'Política de Privacidad',
    },
    privacyPolicy: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización',
      intro: 'Esta Política de Privacidad describe cómo Héctor Alfonso Castaño David ("yo", "mi" o "el desarrollador") recopila, usa y protege la información de los usuarios de las aplicaciones móviles publicadas en Google Play Store. Al usar cualquiera de mis aplicaciones, aceptas los términos descritos en esta política.',
      dataCollectedTitle: 'Información Recopilada',
      dataCollectedBody: 'Las aplicaciones pueden recopilar los siguientes tipos de información según su funcionalidad:',
      dataCollectedItems: [
        'Información de uso: datos anónimos sobre cómo interactúas con la app (pantallas visitadas, funciones utilizadas).',
        'Datos de ubicación: solo cuando la funcionalidad principal lo requiera y con tu consentimiento explícito.',
        'Datos de cuenta: nombre de usuario y correo electrónico si la app requiere registro.',
        'Datos técnicos: modelo de dispositivo, versión de SO y registros de errores para mejorar la estabilidad.',
      ],
      dataUseTitle: 'Uso de la Información',
      dataUseBody: 'La información recopilada se utiliza exclusivamente para:',
      dataUseItems: [
        'Proveer y mantener el funcionamiento de la aplicación.',
        'Detectar y corregir errores técnicos.',
        'Mejorar la experiencia del usuario.',
        'Cumplir con obligaciones legales cuando aplique.',
      ],
      thirdPartyTitle: 'Servicios de Terceros',
      thirdPartyBody: 'Algunas aplicaciones integran servicios de terceros que pueden recopilar información de forma independiente:',
      thirdPartyItems: [
        'Google Play Services',
        'Firebase (Analytics y Crashlytics)',
        'Google Maps API (en apps con funcionalidad de mapas)',
      ],
      dataRetentionTitle: 'Retención de Datos',
      dataRetentionBody: 'Los datos se conservan únicamente durante el tiempo necesario para cumplir los fines descritos. Puedes solicitar la eliminación de tus datos en cualquier momento contactándome por correo.',
      userRightsTitle: 'Tus Derechos',
      userRightsBody: 'Como usuario tienes derecho a:',
      userRightsItems: [
        'Acceder a los datos personales que se hayan recopilado.',
        'Solicitar la corrección o eliminación de tus datos.',
        'Retirar tu consentimiento en cualquier momento.',
        'Presentar una queja ante la autoridad de protección de datos de tu país.',
      ],
      securityTitle: 'Seguridad',
      securityBody: 'Implemento medidas técnicas razonables para proteger tu información contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún sistema es completamente seguro y no puedo garantizar seguridad absoluta.',
      childrenTitle: 'Menores de Edad',
      childrenBody: 'Mis aplicaciones no están dirigidas a menores de 13 años y no recopilo intencionalmente información de ellos. Si detectas que un menor ha proporcionado datos personales, contáctame para eliminarlos.',
      changesTitle: 'Cambios a esta Política',
      changesBody: 'Esta política puede actualizarse periódicamente. Los cambios se publicarán en esta página con la fecha de actualización. Te recomiendo revisarla regularmente.',
      contactTitle: 'Contacto',
      contactBody: 'Si tienes preguntas sobre esta política o sobre el manejo de tus datos, puedes contactarme en:',
      closeButton: 'Cerrar',
      backToPortfolio: 'Volver al Portfolio',
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
     appimotionMobileDesc: "Mobile application to promote sustainable mobility, available on Google Play. Technologies: Flutter, Google Maps API, Riverpod, Docker. Key contributions: Development of the mobile interface and functionalities. Integration with backend for real-time management. Use of Google Maps API for route visualization.",
  appimotionBackendDesc: "Backend platform that supports the administration and traceability of the Appimotion+ system. Technologies: .NET, REST API, MongoDB, Hangfire, Azure DevOps. Key contributions: Development of multiple endpoints for the AdminService module, including user, route, event, and configuration management. Implementation of REST functionalities (CRUD, authentication, validations, filters). Integration of background processes with Hangfire for record cleanup, automated tasks, and reports.",
  solarRiegoBackend: "Backend developed in .NET for the management of data from IoT sensors installed in greenhouses in Sotará, Cauca. It is responsible for receiving, storing, and processing agro-environmental variables such as temperature, soil moisture, and water level, facilitating decision-making for sustainable agriculture. Technologies: .NET, REST API, MongoDB, IoT. Key contributions: Implementation of secure and scalable endpoints for sensor data ingestion. Design of a data model for agro-environmental variables with high update frequency. Integration with renewable energy sources for sustainable operation.",
  solarRiegoMobile: "Web application developed with Flutter that allows farmers to visualize in real time the metrics of temperature, soil moisture, and water level captured by sensors installed in greenhouses. The platform facilitates the sustainable management of water resources and renewable energy in agricultural production. Technologies: Flutter, REST API. Key contributions: Design of a friendly and accessible interface for rural users. Dynamic visualization of charts and alerts for efficient decision-making. Real-time connection with the backend through REST API.",
  traffigDesc: "Real-time traffic control system with advanced analysis and monitoring capabilities. Built with a microservices architecture for scalability and performance.",
  syncUpCBackend: "I developed the backend for SyncUpC, a digital platform designed for the management of academic events at the Popular University of Cesar. My work consisted of implementing a robust and scalable solution using .NET, applying principles of hexagonal architecture (Clean Architecture) and Domain-Driven Design (DDD). The system was designed with a microservices structure, which facilitated a clear separation of responsibilities and more agile development.",
  syncUpcMobile: "SyncUpC is a digital solution composed of a mobile application and a web platform designed to optimize the management of academic events in university environments. The system allows: Consulting institutional events in real time. Registering and receiving personalized notifications. Recording attendance by scanning QR codes, registering entry/exit times.",
  sigming: "Mobile application developed for the operational transit team of the city of Medellín, focused on the detection, reporting, and tracking of failures in road signs, as well as the consultation of associated regulations for specific areas. The solution was custom-designed for field devices used by technical personnel. 🔧 Key contributions: Development with Flutter, ensuring compatibility and performance on institutional devices. Implementation of Atomic Design to facilitate interface maintainability and scalability."
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
      privacyPolicy: 'Privacy Policy',
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated',
      intro: 'This Privacy Policy describes how Héctor Alfonso Castaño David ("I", "me", or "the developer") collects, uses, and protects information from users of mobile applications published on the Google Play Store. By using any of my apps, you agree to the terms described in this policy.',
      dataCollectedTitle: 'Information Collected',
      dataCollectedBody: 'Applications may collect the following types of information depending on their functionality:',
      dataCollectedItems: [
        'Usage information: anonymous data about how you interact with the app (screens visited, features used).',
        'Location data: only when core functionality requires it and with your explicit consent.',
        'Account data: username and email address if the app requires registration.',
        'Technical data: device model, OS version, and error logs to improve stability.',
      ],
      dataUseTitle: 'Use of Information',
      dataUseBody: 'Collected information is used exclusively to:',
      dataUseItems: [
        'Provide and maintain app functionality.',
        'Detect and fix technical errors.',
        'Improve user experience.',
        'Comply with legal obligations when applicable.',
      ],
      thirdPartyTitle: 'Third-Party Services',
      thirdPartyBody: 'Some applications integrate third-party services that may independently collect information:',
      thirdPartyItems: [
        'Google Play Services',
        'Firebase (Analytics and Crashlytics)',
        'Google Maps API (in apps with map functionality)',
      ],
      dataRetentionTitle: 'Data Retention',
      dataRetentionBody: 'Data is retained only for as long as necessary to fulfill the purposes described. You may request deletion of your data at any time by contacting me via email.',
      userRightsTitle: 'Your Rights',
      userRightsBody: 'As a user you have the right to:',
      userRightsItems: [
        'Access the personal data that has been collected.',
        'Request correction or deletion of your data.',
        'Withdraw your consent at any time.',
        'File a complaint with the data protection authority in your country.',
      ],
      securityTitle: 'Security',
      securityBody: 'I implement reasonable technical measures to protect your information against unauthorized access, loss, or alteration. However, no system is completely secure and I cannot guarantee absolute security.',
      childrenTitle: 'Children',
      childrenBody: 'My applications are not directed at children under 13 and I do not intentionally collect information from them. If you discover that a child has provided personal data, contact me to have it deleted.',
      changesTitle: 'Changes to This Policy',
      changesBody: 'This policy may be updated periodically. Changes will be posted on this page with the updated date. I recommend reviewing it regularly.',
      contactTitle: 'Contact',
      contactBody: 'If you have questions about this policy or how your data is handled, you can contact me at:',
      closeButton: 'Close',
      backToPortfolio: 'Back to Portfolio',
    },
    common: {
      backend: 'backend',
      mobile: 'mobile',
    },
  },
};