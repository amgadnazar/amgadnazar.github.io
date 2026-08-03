export interface ContactItem {
  id: number;
  title: string;
  value: string;
  link: string;
  icon: "email" | "github" | "linkedin" | "location";
}

export const contact: ContactItem[] = [
  {
    id: 1,
    title: "Email",
    value: "amgadnazar11@gmail.com",
    link: "mailto:amgadnazar11@gmail.com",
    icon: "email",
  },

  {
    id: 2,
    title: "GitHub",
    value: "github.com/amgadnazar",
    link: "https://github.com/amgadnazar",
    icon: "github",
  },

  {
    id: 3,
    title: "LinkedIn",
    value: "linkedin.com/in/amjad-nazar",
    link: "https://linkedin.com/in/amjad-nazar",
    icon: "linkedin",
  },

  {
    id: 4,
    title: "Location",
    value: "Cairo, Egypt",
    link: "https://maps.google.com/?q=Cairo,Egypt",
    icon: "location",
  },
];