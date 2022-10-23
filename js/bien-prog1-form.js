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

  let rotary_img = `
<!-- Show languages Icons rotating -->
    <div>
      <div class="imagenes">
        <a  href="html.html"><img class="imagen" src="images/html.png" alt=""></a>
        <a  href="css.html"><img class="imagen" src="images/css.png" alt=""></a>
        <a  href="js.html"><img class="imagen" src="images/js.png" alt=""></a></h1>
        <a  href="python.html"><img class="imagen" src="images/python.png" alt=""></a>
      </div>
    </div>
      `
  pagina= getNameURLWeb();
  console.log(pagina)
  switch (pagina) {
    case "index.html":
      encabezado = rotary_img;
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
  return encabezado
}

function getNameURLWeb(){
  var sPath = window.location.pathname;
  var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
  return sPage;
}
// Modify header in function of the page name
document.getElementById("header_id").innerHTML = traerHeader()

// HTML page 

function toggleHidden(selector) {
  element = document.querySelector(selector);
  element.hidden = element.hidden ? false : true;
}

function switchIcon(selector) {
  var icon = document.querySelector(selector);
  icon.classList.toggle('fa-chevron-down');
  icon.classList.toggle('fa-chevron-up');
}

// Validacion del formualio

function validar(){
  if (document.formulario.nombre.value.length==0){
    alert("Tiene que escribir su nombre")
    document.formulario.nombre.focus()
    return 0;
  }

  if (document.formulario.mail.value.length==0){
    alert("Tiene que ingresar un mail")
    document.formulario.mail.focus()
    return 0;
  }

  if (document.formulario.motivo.selectedIndex==0){
    alert("Debe seleccionar un motivo de su contacto.")
    document.formulario.motivo.focus()
    return 0;
  }

}

const $form = document.querySelector('#form')
$form.addEventListener('submit', hadleSubmit)

async function hadleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })

  if (response.ok){
    this.reset()
    alert('Gracias por contactarnos, recibirás una respuesta pronto')
  }
}