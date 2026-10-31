// Contenido del portafolio: textos, proyectos y links

export const profile = {
  name: 'Juan Marcelo Emmanuel Sosa',
  shortName: 'Juan Sosa',
  role: 'Desarrollador Java Backend',
  focus: 'Orientación Full-Stack con React',
  location: 'Santo Tomé, Corrientes, AR',
  timezone: 'America/Argentina/Buenos_Aires',
  email: 'jmemmanuelsosa@gmail.com',
  phone: '+54 9 3756 619987',
  whatsapp: 'https://wa.me/5493756619987',
  linkedin: 'https://www.linkedin.com/in/jmemmanuelsosa',
  github: 'https://github.com/jmemmanuelsosa-tech',
  cv: '/cv-juan-sosa.pdf',
  photo: '/foto-juan.jpg',
  available: true,
  intro:
    'Desarrollador Java Backend con orientación Full-Stack. Construyo APIs REST con Java, Spring Boot y Jakarta EE en producción, migré sistemas core de javax a Jakarta EE 10 y desarrollo interfaces con React. Estudio Ciberseguridad para que lo que construyo también sea seguro desde el diseño.',
}

export const experience = [
  {
    period: 'oct 2025 — actualidad',
    role: 'Desarrollador Java Backend',
    company: 'Algorya',
    points: [
      'Desarrollo e integración de APIs RESTful en Java, incluida la integración con la API de WhatsApp para mensajería automatizada, con validación de datos y manejo de errores.',
      'Migración de sistemas core de Java EE (javax) a Jakarta EE 10 sobre Payara Server y desarrollo de servicios con Spring Boot, reduciendo deuda técnica sin cortar la operación.',
      'Despliegue y mantenimiento de aplicaciones en servidores Linux con Docker, aplicando buenas prácticas de seguridad.',
      'Control de versiones con Git/GitHub, builds con Maven y validación de endpoints con Postman.',
    ],
    stack: ['Java', 'Spring Boot', 'Jakarta EE 10', 'Payara', 'Docker', 'Linux', 'Maven', 'Git/GitHub', 'Postman'],
  },
]


export const projects = [
  {
    year: '2026',
    title: 'Motor Bancario Core',
    kind: 'Monolito modular',
    description:
      'Núcleo transaccional con control de concurrencia sobre saldos, reglas de prevención de fraude y autenticación segura con Spring Security.',
    stack: ['Java 21', 'Spring Boot 3', 'Spring Security', 'React', 'MySQL', 'Docker'],
    repo: 'https://github.com/jmemmanuelsosa-tech/motor-bancario-core',
    demo: '',
  },
  {
    year: '2026',
    title: 'Pedidos API',
    kind: 'Backend REST',
    description:
      'API de gestión de pedidos con autenticación JWT, documentación con Swagger, tests unitarios con Mockito y despliegue con Docker.',
    stack: ['Spring Boot', 'Spring Security', 'JWT', 'Swagger', 'Mockito', 'MySQL', 'Docker'],
    repo: 'https://github.com/jmemmanuelsosa-tech',
    demo: '',
  },
  {
    year: '2026',
    title: 'ERP B2B',
    kind: 'Sistema de gestión',
    description:
      'Aplicación web con módulos de usuarios, clientes e inventario. Arquitectura en capas (MVC) con renderizado del lado del servidor.',
    stack: ['Java', 'Spring Boot', 'Thymeleaf', 'HTML5', 'CSS3'],
    repo: 'https://github.com/jmemmanuelsosa-tech/sistema-gestion-spring',
    demo: '',
  },
  {
    year: '2026',
    title: 'SIEM para SOC',
    kind: 'Ciberseguridad',
    description:
      'Plataforma de monitoreo con API REST protegida por JWT, motor de análisis de amenazas en Python y dashboard de eventos.',
    stack: ['Spring Boot 3', 'JWT', 'Python', 'Pandas', 'JavaScript'],
    repo: 'https://github.com/jmemmanuelsosa-tech/proyecto-siem-fullstack',
    demo: '',
  },
]

export const skills = [
  { group: 'Lenguajes', items: ['Java 17 / 21 / 25', 'SQL', 'JavaScript', 'Python', 'Bash'] },
  { group: 'Backend', items: ['Spring Boot 3', 'Spring Security', 'Jakarta EE 10', 'APIs REST', 'JWT', 'Maven'] },
  { group: 'Datos', items: ['MySQL', 'PostgreSQL', 'Neon'] },
  { group: 'Infraestructura', items: ['Docker', 'Linux', 'Payara Server', 'Git / GitHub', 'Postman'] },
  { group: 'Frontend', items: ['React', 'Thymeleaf', 'HTML / CSS'] },
  { group: 'Seguridad', items: ['Desarrollo seguro', 'Arquitecturas seguras', 'Análisis de amenazas', 'PowerShell'] },
]

// summary es opcional
export const education = [
  {
    period: 'feb 2026 — actualidad',
    title: 'Licenciatura en Ciberseguridad',
    place: 'Facultad de Defensa Nacional (FADENA)',
    summary:
      'Protección de infraestructuras críticas, programación orientada a la seguridad (C, C++, Python y Bash), auditoría y mitigación de amenazas.',
  },
  {
    period: 'feb 2024 — dic 2026',
    title: 'Tecnicatura Superior en Infraestructura Informática',
    place: "ISFD 'Jorge Luis Borges'",
    summary:
      'Programación y algoritmia, administración de servidores, redes corporativas y gestión de infraestructura IT.',
  },
  {
    period: 'mar 2018 — dic 2023',
    title: 'Bachiller con orientación en Informática',
    place: "CFP Rector 'Vicente Fidel López'",
    summary: '',
  },
]

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio' },
  { name: 'Portugués', level: 'Intermedio' },
]