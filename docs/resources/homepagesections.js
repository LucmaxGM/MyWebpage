class HomeSect {
  constructor(name, html, img){
    this.name=name;
    this.html=html;
    this.img=img;
  }
}

export const homePageSections = [
  new HomeSect("Proyectos",
  `<h4>Proyectos en multiples lenguajes</h4>
  <ul>
  <li>Paradigma Imperativo</li>
  <li>Paradigma Orientado a Objectos</li>
  </ul>
  <h4>Y uso de multiples ejecutables:</h4>
  <ul>
  <li>C++</li>
  <li>C</li>
  <li>JavaScript</li>
  <li>React</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>Python<li>
  <li>SQL</li>
  </ul>
  <div class="acceder-btn"></div>
  `, "webdevelopment.png"),
  new HomeSect("Editor de Video",
  `<h2>Carrera Confiable</h2>
  <h3>Como Editor de Video:</h3>
  <h4>3 años brindando servicio:</h4>
  <ul>
  <li>Clientes Internacionales</li>
  <li>Comunicación Inglés y Español</li>
  <li>Trabajos Personalizados</li>
  <li>Escucha Activa y Busqueda de Soluciones</li><li>Manejo educado y orientado a dar el mejor servicio</li>
  </ul> 
  <div class="acceder-btn" data-link="https://www.fiverr.com/lucmax_gm"></div>
  `, ""
  
  ),
  new HomeSect("Desarrollador", `
  <h1>Web Development</h1>
  <h2>Desarrollador Full Stack</h2>
  <h3>Desarrollo de estructuras gráficas escalables y basadas en datos mediante:</h3>
  <h4>Front-End:</h4>
  <ul>
  <li>Vanilla JavaScript</li>
  <li>CSS<li>
  <li>React</li>
  <li>HTML</li>
  </ul>
  <h4>Back-End</h4>
  <ul>
  <li>Express</li>
  <li>Linux Terminal</li>
  <li>Node</li>
  <li>Python</li>
  <li>SQL</li>
  </ul>
  `, "desarrollador.png"),
  new HomeSect("GitHub Workflow", `
  <h1>Git y Github</h1>
  <h4>Manejo de Github y Git mediante la terminal de Linux y/o Termux para el trabajo colaborativo con otros desarrolladores</h4>
  <div class="acceder-btn" data-link="https://github.com/LucmaxGM"></div>
  
  
  `),

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
  <ul><li>Estudios Secundarios ✓</li>
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
    new imgCarr("Linux Terminal", "linux.png"),
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