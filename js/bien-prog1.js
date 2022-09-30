function traerHeader(pagina) {
  let encabezado
  let cssv = `
  <div class="header2">
    <img src="images/css.png" alt="CSS">
    <h3>Cascading Style Sheet </h3>
  </div>
`;


  let jsv=`
  <div class="header2">
    <img src="images/js.png" alt="JS">
    <h3>Javascript </h3>
  </div>`

  let htmlv=`
  <div class="header2">
    <img src="images/html.png" alt="HTML">
    <h3>HTML HyperText Markup Language </h3>
  </div>`

  let pythonV=`
  <div class="header2">
    <img src="images/python.png" alt="Python">
    <h3>Python </h3>
  </div>
  `

  let contactov=`
  <div class="header2">
    <img src="images/arroba.png" alt="Contacto">
    <h3>Contacte al equipo de buenas prácticas </h3>
  </div>
  `

  let menuv =
    `
<!-- This is the menu -->
     <div class="navbar">
      <nav>
        <ul class="navmenu">
          <li> <a href="index.html"><i class="fa-sharp fa-solid fa-house fa-2xl"></i></a></li>
          <li> <a href="html.html"><i class="fa-brands fa-html5 fa-2xl"></i></a> </li>
          <li> <a href="css.html"><i class="fa-brands fa-css3-alt fa-2xl"></i></a> </li>
          <li> <a href="js.html"><i class="fa-brands fa-js fa-2xl"></i></a> </li>
          <li> <a href="contacto.html"><i class="fa-sharp fa-solid fa-at fa-2xl"></i></a> </li>
        </ul>
      </nav>
    </div>
    `

  let carouselv = `
<!-- Carousel que muestra los diferentes lenguajes de programación tratados en el sitio -->
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="img_item">
    <img src="images/html.png" class="d-block" alt="HTML">
    </div>
    <div class="carousel-caption d-none d-md-block">
    <h3>HTML HyperText Markup Language</h3>
    </div>
    </div>
    <div class="carousel-item">
    <div class="img_item">
    <img src="images/css.png" class="d-block " alt="CSS">
    </div>
    <div class="carousel-caption d-none d-md-block">
    <h3>CSS Cascading Style Sheet</h3>
    </div>
    </div>
    <div class="carousel-item">
    <div class="img_item">
    <img src="images/js.png" class="d-block " alt="Javascript">
    </div>
    <div class="carousel-caption d-none d-md-block">
    <h3>JS Javascript</h3>
    </div>
    </div>
    <div class="carousel-item">
    <div class="img_item">
        <img src="images/python.png" class="d-block " alt="Python">
      </div>
      <div class="carousel-caption d-none d-md-block">
        <h3>Py Python</h3>
      </div>
      </div>
      </div>
      </div> 
      `
  pagina= getNameURLWeb();
  // console.log(pagina)

  switch (pagina) {
    case "index.html":
      encabezado = carouselv;
      break;
    case "html.html":
      encabezado = htmlv;
      break;
    case "css.html":
      encabezado= cssv;
      break;
    case "python.html":
      encabezado=pythonV;
      break;
    case "contacto.html":
      encabezado=contactov;
      break;
    case "js.html":
      encabezado=jsv;
      break;
  } 
  // console.log(encabezado)
  encabezado += menuv
  console.log(encabezado)
  return encabezado
}

function getNameURLWeb(){
  var sPath = window.location.pathname;
  var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
  return sPage;
}

document.getElementById("header_id").innerHTML = traerHeader()