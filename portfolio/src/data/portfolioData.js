export const personalInfo = {
  name: "Martín Birchenz",
  title: "Full Stack Developer y Estudiante de Ingeniería en Sistemas",
  location: "Nogoyá, Entre Ríos, Argentina",
  about:
    "Estudiante de Ingeniería en Sistemas de Información con un enfoque práctico orientado a la resolución de problemas reales. Me especializo en el desarrollo de software escalable, modular y robusto de punta a punta, aplicando arquitecturas desacopladas cliente-servidor y código limpio en producción.",
  email: "birchenzmartin@gmail.com",
  phone: "+54 9 3435 611122",
  github: "https://github.com/Martin-Birchenz",
  linkedin: "https://linkedin.com/in/martin-birchenz",
  cvUrl: "/cv-martin-birchenz.pdf",
};

export const skillsData = {
  "Lenguajes & Frontend": [
    "JavaScript (ES6+)",
    "React",
    "Context API",
    "Vite",
    "Bootstrap 5",
    "HTML5 / CSS3",
  ],
  "Backend & Arquitectura": [
    "Node.js",
    "Express",
    "Arquitectura en Capas",
    "APIs RESTful",
    "JWT & RBAC",
    "Zod / Validaciones",
    "Multer",
  ],
  "Bases de Datos & Cloud": [
    "MySQL (Modelado relacional)",
    "Aiven Cloud",
    "Cloudinary",
    "Render",
    "Vercel",
  ],
  "Herramientas & Enfoque": [
    "Git / GitHub",
    "Postman",
    "VS Code",
    "Integración con IA (Flujo dev)",
    "Integración Software / Hardware (IoT)",
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "Club Deportivo Nogoyá",
    subtitle: "Plataforma Integral de Gestión Institucional y Deportiva",
    status: "production",
    description:
      "Sistema web integral para la administración operativa e institucional de un club social y deportivo. Incluye portal institucional, control de accesos por roles (RBAC) para administración de socios, cobranza de cuotas, colonia de vacaciones, gestión de disciplinas deportivas, reserva de canchas/turnos y un TPV para cantina con comandas y arqueo de caja diario.",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MySQL (Aiven)",
      "Bootstrap 5",
      "JWT",
      "Zod",
    ],
    demoUrl: "https://tudemo-depor.vercel.app",
    codeUrl: "https://github.com/Martin-Birchenz/depor.git",
  },
  {
    id: 2,
    title: "Nüdo e Hilarias",
    subtitle: "E-commerce y Sistema de Gestión Comercial",
    status: "production",
    description:
      "Plataforma comercial para negocio de telas, mercería e hilados. Cuenta con catálogo público dinámico con variantes de colores, carrito con checkout guiado a WhatsApp y panel administrativo con control de inventario, alertas de stock mínimo, gestión de pedidos y subida de imágenes optimizada.",
    tech: [
      "React",
      "Context API",
      "Node.js",
      "Express (Capas)",
      "MySQL",
      "Cloudinary",
      "JWT Bearer",
    ],
    demoUrl: "https://tudemo-nudo.vercel.app",
    codeUrl: "https://github.com/Martin-Birchenz",
  },
  {
    id: 3,
    title: "Agro Gestión",
    subtitle: "Trazabilidad y Automatización Agropecuaria",
    status: "development",
    description:
      "Plataforma orientada al sector agropecuario y ganadero diseñada para integrar software con dispositivos físicos (balanzas electrónicas y sensores de campo). Permite la captura de datos in-situ, pesaje en tiempo real y trazabilidad animal para optimizar la toma de decisiones productivas.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "IoT / Sensores",
      "Arquitectura modular",
    ],
    demoUrl: null,
    codeUrl: "https://github.com/Martin-Birchenz",
  },
];
