export interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  credential?: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Bachelor of Computer Science",
    issuer: "Sudan University of Science and Technology",
    year: "2026",
    skills: [
      "Computer Science",
      "Artificial Intelligence",
      "Machine Learning",
      "Software Engineering",
      "Algorithms",
      "Data Structures",
      "Database Systems",
    ],
  },

  {
    id: 2,
    title: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Google",
    year: "2025",
    skills: [
      "Python",
      "R",
      "SQL",
      "Pandas",
      "NumPy",
      "Statistics",
      "Data Analysis",
      "Data Visualization",
      "Machine Learning",
      "Regression",
      "Predictive Modeling",
    ],
  },

  {
    id: 3,
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    year: "2023",
    skills: [
      "SQL",
      "R",
      "Excel",
      "Spreadsheets",
      "Tableau",
      "Data Cleaning",
      "Data Analysis",
      "Data Visualization",
      "Power BI",
    ],
  },

  {
    id: 4,
    title: "Google Project Management Professional Certificate",
    issuer: "Google",
    year: "2025",
    skills: [
      "Project Management",
      "Agile",
      "Scrum",
      "Stakeholder Management",
      "Risk Management",
      "Project Planning",
      "Leadership",
    ],
  },

  {
    id: 5,
    title: "Google Digital Marketing & E-commerce",
    issuer: "Google",
    year: "2024",
    skills: [
      "Digital Marketing",
      "SEO",
      "SEM",
      "Google Ads",
      "Google Analytics",
      "Marketing Analytics",
      "E-commerce",
      "Email Marketing",
      "Social Media Marketing",
    ],
  },

  {
    id: 6,
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2023",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Data Science",
      "Jupyter Notebook",
      "Data Analysis",
      "Data Visualization",
    ],
  },
];