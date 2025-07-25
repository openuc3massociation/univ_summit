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
  "slug": "los-problemas-de-las-salidas-profesionales-en-la-universidad",
  "title": "Cuáles son los problemas de las salidas profesionales en la universidad",
  "summary": "Los problemas del salto a la vida profesional desde la universidad",
  "image": problemasSalidasImg,
  "date": "2025-07-24",
  "content": `
    <h2>Introducción</h2>
    <p>La transición de la universidad al mercado laboral en España continúa siendo un reto mayúsculo: en marzo de 2025, la tasa de desempleo juvenil alcanzó el 26,5 %, frente al 14,3 % de media en la Unión Europea :contentReference[oaicite:0]{index=0}. A pesar de que la inserción laboral ha mejorado en la última década —con la tasa de desempleo de universitarios jóvenes cayendo del 29,2 % en 2013 al 12,5 % en 2023—, persisten obstáculos estructurales en la empleabilidad, calidad de formación y adecuación profesional :contentReference[oaicite:1]{index=1}.</p>

    <h2>Oportunidades actuales desde la universidad</h2>
    <h3>Ferias de empleo y eventos como Forempleo</h3>
    <p>Forempleo de la Universidad Carlos III de Madrid reúne alrededor de 158 empresas y más de 7.000 visitantes en su edición de octubre de 2024 :contentReference[oaicite:2]{index=2}. Este foro ofrece la posibilidad de participar en talleres prácticos (cv, entrevista, LinkedIn) y conocer ofertas de prácticas y empleo directo con empresas como consultoras, tecnología y organismos oficiales.</p>

    <h3>Prácticas académicas — curriculares y extracurriculares</h3>
    <p>La Ley española regula las prácticas universitarias mediante el Real Decreto 592/2014. Investigaciones muestran que realizar prácticas curriculares aumenta en 3-4 puntos porcentuales la probabilidad de encontrar empleo en 3-6 meses tras el grado, mejora la adecuación al trabajo y reduce el desempleo a los 4 años en un 5–7 % :contentReference[oaicite:3]{index=3}.</p>

    <h3>Formación dual y programas mixtos</h3>
    <p>El modelo de formación dual universitario, presente en una de cada tres universidades españolas (64 % en ingeniería), combina estudios y empleo, y presenta altas tasas de contratación en universidades como Mondragón o Lleida :contentReference[oaicite:4]{index=4}.</p>

    <h2>Dificultades persistentes</h2>
    <ul>
      <li><strong>Desajuste formación-empleo:</strong> aproximadamente el 76 % de las empresas identifica una brecha clara entre competencias universitarias y demandas reales del mercado laboral (técnicas, digitales y blandas) :contentReference[oaicite:5]{index=5}.</li>
      <li><strong>Sobrecualificación y bajo salario:</strong> el 70 % de los titulados sobrecualificados cobra menos de 1.500 € al mes; un 35,9 % de los jóvenes universitarios trabajan en empleos por debajo de su nivel formativo — España lidera este fenómeno en la UE :contentReference[oaicite:6]{index=6}.</li>
      <li><strong>Precariedad de las prácticas:</strong> se detectaron más de 4.800 casos de falsos becarios entre 2018 y marzo de 2022, con sanciones por valor de 15 millones €; y desde 2024 las prácticas deben cotizar sí o sí :contentReference[oaicite:7]{index=7}.</li>
      <li><strong>Percepción estudiantil:</strong> tres de cada cuatro estudiantes consideran que la universidad no los prepara bien para el mundo laboral, principalmente por falta de prácticas reales y experiencia profesional :contentReference[oaicite:8]{index=8}.</li>
      <li><strong>Emigración de talento:</strong> sólo un 54 % de recién titulados cotiza al año de terminar los estudios, y un 40 % están en empleos por debajo de su nivel cuatro años después —el 82 % estaría dispuesto a emigrar por mejor oportunidad :contentReference[oaicite:9]{index=9}.</li>
    </ul>

    <h2>Beneficios comprobados</h2>
    <p>A pesar de los desafíos, las prácticas bien diseñadas tienen impacto significativo: aceleran la entrada laboral, mejoran habilidades transversales, amplían redes profesionales y facilitan la adecuación al primer empleo :contentReference[oaicite:10]{index=10}. Además, la incorporación a sectores altamente cualificados ha crecido un 76 % entre 2013 y 2023 :contentReference[oaicite:11]{index=11}.</p>

    <h2>Áreas de mejora</h2>
    <ul>
      <li><strong>Colaboración universidad-empresa:</strong> diseñar prácticas y planes formativos con participación empresarial para cerrar la brecha de competencias :contentReference[oaicite:12]{index=12}.</li>
      <li><strong>Estandarización de calidad:</strong> certificación de prácticas con objetivos claros, tutorías académicas y empresariales bien formadas y evaluadas.</li>
      <li><strong>Regulación definitiva del Estatuto del Becario:</strong> asegurar remuneración mínima, derechos equivalentes a empleados, límite de becarios en plantilla y cotización ampliada :contentReference[oaicite:13]{index=13}.</li>
      <li><strong>Potenciar la formación dual:</strong> expandir programas exitosos y promover templado por comunidades autónomas y gobiernos para replicar buenos casos :contentReference[oaicite:14]{index=14}.</li>
      <li><strong>Orientación profesional desde etapas tempranas:</strong> dotar a estudiantes de información realista sobre empleabilidad según carrera, mercado y habilidades requeridas :contentReference[oaicite:15]{index=15}.</li>
    </ul>

    <h2>Conclusión</h2>
    <p>La universidad ofrece hoy herramientas como ferias de referencia (Forempleo), prácticas curriculares y formación dual para facilitar el salto a la vida profesional. Sin embargo, sin mejoras estructurales —en calidad, regulación, alineamiento académico-laboral y cooperación con empresas— los jóvenes continuarían enfrentándose a sobrecualificación, precariedad y desmotivación. Abordar estos retos requiere la actuación coordinada de instituciones, centros universitarios y empresas para convertir la universidad en un puente eficaz hacia el empleo digno.</p>

    <div class="fuentes">
      <h3>Fuentes y enlaces</h3>
      <ul>
        <li>El País: “Competencias profesionales, disrupción tecnológica y empleo juvenil”, junio 2025 :contentReference[oaicite:16]{index=16}</li>
        <li>El País: “La universidad española y su lejanía del mundo laboral”, noviembre 2024 :contentReference[oaicite:17]{index=17}</li>
        <li>Cadena SER: sobre emigración y tasas de empleo juvenil, marzo 2025 :contentReference[oaicite:18]{index=18}</li>
        <li>Cadena SER: España lidera sobrecualificación en la UE :contentReference[oaicite:19]{index=19}</li>
        <li>U-Ranking / Fundación BBVA-Ivie: informe inserción laboral 2013-2023 :contentReference[oaicite:20]{index=20}</li>
        <li>Funcas: informe sobre transición universidad-trabajo y sobreactuación :contentReference[oaicite:21]{index=21}</li>
        <li>Infocop: percepción del alumnado sobre falta de preparación laboral :contentReference[oaicite:22]{index=22}</li>
        <li>Investigación sobre PAE y empleabilidad (EILU 2010) :contentReference[oaicite:23]{index=23}</li>
        <li>Wikipedia: Estatuto del Becario y cotización desde 2024, casos de falsos becarios :contentReference[oaicite:24]{index=24}</li>
        <li>El País: formación dual en universidades españolas :contentReference[oaicite:25]{index=25}</li>
      </ul>
    </div>
  `
}

];
