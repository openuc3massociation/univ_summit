// src/data/blogData.ts


import problemasSalidasImg from "../assets/blog/problemas-salidas-prof.png";

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  content: string; // O markdown, html o JSX como prefiráis vosotros (Ausina y Mario)
};

export const blogPosts: BlogPost[] = [
  {
    slug: "los-problemas-de-las-salidas-profesionales-en-la-universidad",
    title: "Cuáles son los problemas de las salidas profesionales en la universidad",
    summary: "Los problemas del salto a la vida profesional desde la universidad",
    image: problemasSalidasImg, 
    date: "2025-07-24",
    content: `
      <h2>Introducción</h2>
      <p>Actualmente, los problemas de una buena salida profesional son...</p>
    `
  }
];
