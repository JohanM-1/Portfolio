He analizado sus requerimientos y he trazado un plan para implementar los cambios solicitados en el portafolio:

### 1. Actualización de Contenido y Navbar

* **Navbar**: Eliminaré el texto "Portafolio" del `src/Components/Navbar.jsx`.

* **Bienvenida/Hero**: Actualizaré `src/data/bienvenida.json` con el texto : "Soy desarrollador de software con sede en Colombia, con enfoque en la construcción y validación de productos digitales robustos, accesibles y orientados a resolver problemas reales. Actualmente trabajo en Factoryim, participando en el ciclo completo de desarrollo de aplicaciones web, móviles y APIs.

  &#x20;

  Hola, soy Johan. Mi interés por el desarrollo comenzó cuando decidí crear una aplicación para identificar serpientes en mi región, un proyecto que me permitió trabajar con Python, APIs y aplicaciones móviles, y que fortaleció mi enfoque en la calidad, la validación funcional y el diseño correcto de los flujos de negocio.

  A lo largo de mi experiencia profesional, he colaborado en una agencia de desarrollo participando en proyectos empresariales, plataformas corporativas, ecommerce y aplicaciones con arquitecturas desacopladas. He trabajado de cerca con equipos de desarrollo en la planificación, ejecución y validación de funcionalidades, asegurando que los productos cumplan con los requerimientos antes de llegar a producción.

  Actualmente, mi enfoque principal está en el desarrollo y aseguramiento de la calidad del software, combinando pruebas funcionales, validación de APIs y revisión de flujos frontend–backend para entregar soluciones estables, confiables y bien estructuradas.

  Algunas de las tecnologías con las que he trabajado recientemente incluyen:"

* **Estilo del CV**: Modificaré `src/Components/Bienvenida.jsx` para que el botón de descarga sea un enlace de texto resaltado ("Ver resumen completo") y ocupe menos espacio visual.

### 2. Iconos Sociales Específicos

* Crearé un nuevo componente `src/Components/SocialLinks.jsx` utilizando exactamente el código HTML/SVG que proporcionó (GitHub, LinkedIn, CodePen, Instagram, Goodreads).

* Reemplazaré la sección de iconos actual en el footer de `HomePage.jsx` y en `Bienvenida.jsx` con este nuevo componente.

### 3. Ajustes Visuales en HomePage

* **Eliminación de Números**: Quitaré la numeración "02.", "03.", etc., de los títulos de las secciones en `src/HomePage.jsx`.

* **Animación del Mouse**: Implementaré un efecto de "spotlight" (luz focal) que siga el cursor del mouse. Esto se hará agregando un manejador de eventos en `HomePage.jsx` que actualice variables CSS (`--x`, `--y`) y un overlay con gradiente radial.

### 4. Sección "Todos los Proyectos"

* Mencionó proyectos como "clickup" y "salopem" que faltan. Dado que no encontré información de estos en el código actual, agregaré una **Tabla de Archivo** o una lista simple al final de la sección de proyectos, utilizando marcadores de posición para estos nombres, para que pueda rellenar los detalles más tarde (o si los tiene a mano, los agregaré). *Asumiré agregar una estructura de tabla simple para "Otros Proyectos Notables" al final de la sección de proyectos.*

### 5. Archivos a Modificar

* `src/Components/Navbar.jsx`

* `src/Components/Bienvenida.jsx`

* `src/Components/HomePage.jsx`

* `src/Components/SocialLinks.jsx` (Nuevo)

* `src/data/bienvenida.json`

* `src/index.css` (Para estilos de animación del mouse)

¿Está de acuerdo con este plan?
