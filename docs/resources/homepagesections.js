class HomeSect {
  constructor(name, html, img){
    this.name=name;
    this.html=html;
    this.img=img;
  }
}

export const homePageSections = [
  new HomeSect("Proyectos",
  `<h2>Desarrollador Full-Stack</h2>
  <h3>Multiples Proyectos</h3>

  <h4>Formación y scripts en:</h4>
  <ul>
  <li>C++</li>
  <li>C</li>
  <li>JavaScript</li>
  <li>React</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>Python</li>
  <li>SQL</li>
  <li>CSS</li>
  <li>HTML</li>
  </ul>
  <h2>Paradigmas en uso:</h2>
    <ul>
  <li>Paradigma Imperativo</li>
  <li>Paradigma Orientado a Objetos</li>
  <li>Paradigma Declarativo - Reactivo</li>
  </ul>
  <div class="acceder-btn" data-link="https://github.com/LucmaxGM/script-projects"></div>
  `, "banner-programacion.jpg"),
  new HomeSect("Editor de Video",
  `<h2>Carrera Confiable</h2>
  <h4>3 años brindando servicio:</h4>
  <ul>
  <li>Clientes Internacionales</li>
  <li>Comunicación Inglés y Español</li>
  <li>Trabajos Personalizados</li>
  <li>Escucha Activa y Búsqueda de Soluciones</li><li>Trato profesional y orientado a brindar el mejor servicio</li>
  <li>Clientes maravillados y satisfechos</li>
  </ul> 
  <div class="acceder-btn" data-link="https://www.fiverr.com/lucmax_gm"></div>
  `, "banner-editor-de-video.jpg"
  
  ),
  new HomeSect("Desarrollador", `
  <h1>Web Development</h1>
  <h2>Desarrollo Front-End</h2>
  <ul>
  <li>Vanilla JavaScript</li>
  <li>React</li>
  <li>CSS</li>
  <li>HTML</li>
  </ul>
  <h4>En el Front-End busco:</h4>
   <ul><li>Proporcionar función: Crear estructuras vistosas, utiles y profesionales, que ayuden al usuario a conseguir lo que necesita sin añadir fricción.</li>
   <li>Crecer sin romperse: Desarollar sistemas que renderizen estructuras visuales y elementos gráficos según datos, manteniendo la escalabilidad y la simplicidad.</li>
   </ul>
  <div class="acceder-btn" data-func="showSections"></div>
  `, "banner-webdevelopment.jpg"),
  new HomeSect("Back-End", `
  <h1>Web-Development</h1>
  <h2>Desarrollo Back-End</h2>
    <ul>
  <li>Express</li>
  <li>Git y GitHub</li>
  <li>Termux Terminal</li>
  <li>Node.js</li>
  <li>Python</li>
  <li>SQL</li>
  </ul>
  <h3>En el desarrollo Back-End busco:</h3>
   <ul>
   <li>Crear sistemas lógicos que se amolden a las necesidades de los clientes y/o de la empresa</li>
   <li>Maximizar la fiabilidad del sistema</li>
   <li>Proporcionar seguridad</li>
   </ul>
  <div class="acceder-btn" data-func="backEndDisplay"></div>
  
  
  `, "banner-desarrollo-back-end.jpg"),
  new HomeSect("Editor Multimedia", `
  <h3>Editor Multimedia y Diseño Gráfico</h3>
  <li>Trabajos Creativos</li>
  <li>Diseño Profesional</li>
  <li>Proyectos Personalizados</li>
  <li>Estructura visual útil y con Proposito</li>
  <li>Facilitar el mensaje al consumidor</li>
  </ul>
  <h3>Plataformas:</h3>
  <ul>
  <li>Video</li>
  <li>Foto</li>
  <li>Audio</li>
  <li>Documentos</li>
  <li>Web</li>
  </ul>
  <h3>Herramientas para ayudarte a destacar</h3>
  <ul>
  <li>Canvas</li>
  <li>Web Responsivas</li>
  <li>QR, links, clickeables</li>
  <li>Transiciones dinamicas</li>
  <li>Combinación de audio, imagen y efectos</li>
  </ul>
  <h3>3 años de experiencia<h3>
  <ul>
  <li>Videos para bodas</li>
  <li>Trailers para peliculas</li>
  <li>Gameplays divertidos</li>
  <li>Hype Videos</li>
  <li>Panfletos de cumpleaños</li>
  <li>Diseño de Logotipos: marcas personales, logos de aplicaciones, minimalistas, etc</li>
  <li>Manejo de redes sociales</li>
  <li>Canal de Youtube propio</li>
  <li>Video con más de 100.000 visitas</li>
  </ul>
  `, "banner-editor-multimedia.jpg"),
  new HomeSect("Formando", `
  <h2>Campeón Nacional</h2>
  <h4>Formando Emprendedores 2023</h4>
  <p>Simulación de manejo empresarial</p>
  <ul><li>Trabajo en equipo</li>
  <li>Liderazgo y toma de decisiones</li>
  <li>Trabajo bajo presión</li>
  <li>Cálculo y Pensamiento Crítico</li>
  </ul>
  <h4>Llevé, junto a mi equipo, a mi instituto secundario a participar del certamen provincial y nacional de "Formando Emprendedores" donde nos consagramos campeones Nacionales al terminar en primer lugar en la instancia nacional en Gualeguaychu 2023</h4>
  <div class="acceder-btn" data-link="https://www.instagram.com/p/CzdjJBTuSrF/?igsh=bDhnNGRpYjY5bm96"></div>
  `, "formandoemp2023LucasBlasco.jpg"),
  new HomeSect("Estudios",
  `<h3>Estudios:</h3>
  <ol><li>Bach. Econ. Adminis. y Contabilidad</li></ol>
  <li>Cursos de programación: ✓</li>
  <ol><a href="https://www.sololearn.com/profile/36382950/?ref=app"><li>SoloLearn</li></a>
  <a href=""> <li>Mimo</li></a>
  
  </ol>
  <li>Estudios Terciarios (en proceso)</li>
  <ol><li>Lic. I.A. y Robótica</li></ol>
  </ul>

  `, "pizarra.jpg")
  ];
  class imgCarr {
    constructor(name, src){
      this.name=name;
      this.src=src;
    }
  }
  
  export const carrousel = [
    new imgCarr("C++", `cpp.png`),
    new imgCarr("C", "c-language.png"),
    new imgCarr("SQL", "sql.png"),
    new imgCarr("Nodejs", "nodejs.png"),
    new imgCarr("Python", "python.png"),
    new imgCarr("HTML", "html.png"),
    new imgCarr("CSS", "css.png"),
    new imgCarr("JavaScript", "javascript.png"),
    new imgCarr("Express", "express.png"),
    new imgCarr("React", "react.png"),
    new imgCarr("Excel", "excel.png"),
    new imgCarr("Github", "github.png"),
    new imgCarr("Termux Terminal", "linux.png"),
    new imgCarr("VS Code","vs-code.png")
    ];

class programmingLanguages {
  constructor(language, items=[], link=""){
    this.language=language;
    this.items=items;
    this.link=link;
  }
}
class projects {
  constructor(project, link="", info=""){
    this.project=project;
    this.link=link;
    this.info=info;
  }
}