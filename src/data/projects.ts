import type { Project } from "../components/ProjectCard";

export const projects: Project[] = [
  {
    id: 1,
    featured: true,
    category: "Healthcare AI",
    title: "Enterprise AI Medical Assistant Platform",
    image: "/projects/medical-ai.png",
    description:
      "A production-ready AI-powered healthcare SaaS platform for hospitals and clinics. Built with FastAPI, React, Google Gemini, RAG, Supabase, ChromaDB, and the official Meta WhatsApp Cloud API to automate patient communication, appointments, medical information, and clinic workflows.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Gemini AI",
      "RAG",
      "Supabase",
      "ChromaDB",
      "WhatsApp Cloud API",
      "TailwindCSS",
    ],
    github: "https://github.com/amgadnazar/AI-Medical-Assistant",
    demo: "request-demo",
  },

  {
    id: 2,
    featured: false,
    category: "AI Products",
    title: "AI Hotel WhatsApp Assistant",
    image: "/projects/hotel-ai.png",
    description:
      "AI-powered hotel concierge that enables guests to communicate naturally through WhatsApp. Supports reservations, hotel information, room availability, guest profiles, and intelligent responses using Gemini AI and Retrieval-Augmented Generation.",
    technologies: [
      "Python",
      "FastAPI",
      "Gemini AI",
      "RAG",
      "Supabase",
      "ChromaDB",
      "WhatsApp",
    ],
    github: "https://github.com/amgadnazar/hotel-ai-whatsapp-agent",
    demo: "request-demo",
  },

  {
    id: 3,
    featured: false,
    category: "Mobile Applications",
    title: "Automotive Workshop Management System",
    image: "/projects/workshop-management.png",
    description:
      "Complete workshop management platform with customer and administrator mobile applications. Includes appointment booking, spare parts management, notifications, authentication, and Firebase backend.",
    technologies: [
      "React Native",
      "Node.js",
      "Firebase",
      "Firestore",
      "Authentication",
    ],
    github:
      "https://github.com/amgadnazar/automotive-workshop-management-system",
    demo: "request-demo",
  },

  {
    id: 4,
    featured: false,
    category: "Machine Learning",
    title: "Toxic Comment Classification",
    image: "/projects/toxic-text-classification.png",
    description:
      "esearch project comparing Logistic Regression, LSTM, and DistilBERT for toxic comment detection using an augmented Jigsaw dataset containing more than 178,000 comments, with performance evaluation across multiple NLP models.",
    technologies: [
      "Python",
      "Machine Learning",
      "NLP",
      "LSTM",
      "DistilBERT",
      "Scikit-learn",
    ],
    github:
      "https://github.com/amgadnazar/toxic-comment-classification/tree/main/paper",
    demo: "research-paper",
  },

  {
    id: 5,
    featured: false,
    category: "Business Intelligence",
    title: "Banking Analytics Dashboard",
    image: "/projects/banking-dashboard.png",
    description:
      "Interactive Power BI dashboard for customer analytics, financial KPIs, branch performance, revenue tracking, and executive decision making with real-time performance insights and interactive visual reporting.",
    technologies: [
      "Power BI",
      "SQL",
      "Excel",
      "Data Analysis",
      "Business Intelligence",
    ],
    github:
      "https://github.com/amgadnazar/banking-analytics-dashboard/blob/main/banking_dashboard_amjad.pbix",
    demo: "powerbi-preview",
  },
    {
    id: 6,
    featured: false,
    category: "Data Visualization",
    title: "Eefaa Marketing Dashboard",
    image: "/projects/eefaa-dashboard.png",
    description:
      "Interactive Tableau dashboard analyzing marketing campaigns, conversions, CPA, regional performance, and business KPIs, providing real-time insights, trend analysis, and executive-level reporting.",
    technologies: [
      "Tableau",
      "Google Sheets",
      "Data Analytics",
      "Marketing Analytics",
    ],
    github:
      "https://github.com/amgadnazar/marketing-dashboard-tableau",
    demo:
      "https://public.tableau.com/views/EefaaMarketingDashboardQ12024/MarketingPerformanceDashboard",
  },

  {
    id: 7,
    featured: false,
    category: "Scientific Computing",
    title: "Sea Surface Temperature Contour Plot",
    image: "/projects/sea-surface-temperature.png",
    description:
      "Scientific visualization project using NetCDF climate datasets to analyze global sea surface temperatures and generate contour maps with Python.",
    technologies: [
      "Python",
      "NumPy",
      "Matplotlib",
      "NetCDF",
      "Scientific Computing",
    ],
    github:
      "https://github.com/amgadnazar/sea-surface-temp-contour-plot",
    demo: "view-results",
  },

  {
    id: 8,
    featured: false,
    category: "Automation",
    title: "Google Sheets KPI Dashboard",
    image: "/projects/google-kpi.png",
    description:
      "Automated KPI dashboard built with Google Apps Script that generates revenue, sales, quantity, and monthly performance reports from Google Sheets, streamlining business reporting and analysis.",
    technologies: [
      "Google Apps Script",
      "Google Sheets",
      "JavaScript",
      "Automation",
    ],
    github:
      "https://github.com/amgadnazar/google-sheets-kpi-dashboard",
    demo: "view-analysis",
  },

  {
    id: 9,
    featured: false,
    category: "Data Analysis",
    title: "Sales Data Analysis",
    image: "/projects/sales-analysis.png",
    description:
      "Retail sales analytics project using Python, Pandas, and Matplotlib to identify sales trends, best-performing products, monthly revenue, and city-level insights.",
    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Data Analysis",
      "Visualization",
    ],
    github:
      "https://github.com/amgadnazar/sales-data-analysis",
    demo: "view-analysis",
  },
  {
  id: 10,
  featured: false,
  category: "Web Development",

  title: "Personal Portfolio Website",

  image: "/projects/portfolio.png",

  description:
    "Modern responsive portfolio website showcasing AI, Machine Learning, Data Analytics, and Software Engineering projects with a clean UI, smooth animations, and built using React, TypeScript, Tailwind CSS, and Framer Motion.",

  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "Framer Motion",
    "Responsive Design",
    "UI/UX",

  ],

  github: "https://github.com/amgadnazar/amgadnazar.github.io",

  demo: "https://amgadnazar.github.io/",
},
];