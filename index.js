// Función para mostrar u ocultar menú desplegable de características en el menú de navegación
function toggleFeaturesDropdown() {
  var dropdown = document.getElementById("desktopnav-features"); // Obtiene el elemento con el id "desktopnav-features"
  if (dropdown.classList.contains("show")) {
    // Si el elemento tiene la clase "show"
    dropdown.classList.remove("show"); // Elimina la clase "show" del elemento
    document.getElementById("desktopnav-features-icon").style.transform =
      "rotate(0deg)"; // Obtiene el icono del menú y lo rota 0 grados
  } else {
    // Si el elemento no tiene la clase "show"
    dropdown.classList.add("show"); // Agrega la clase "show" al elemento
    document.getElementById("desktopnav-features-icon").style.transform =
      "rotate(-180deg)"; // Obtiene el icono del menú y lo rota -180 grados
    document.getElementById("desktopnav-company").classList.remove("show"); // Elimina la clase "show" del menú de compañía si está presente
    document.getElementById("desktopnav-company-icon").style.transform =
      "rotate(0deg)"; // Obtiene el icono del menú de compañía y lo rota 0 grados
  }
}

// Función para mostrar u ocultar menú desplegable de compañía en el menú de navegación
function toggleCompanyDropdown() {
  var dropdown = document.getElementById("desktopnav-company"); // Obtiene el elemento con el id "desktopnav-company"
  if (dropdown.classList.contains("show")) {
    // Si el elemento tiene la clase "show"
    dropdown.classList.remove("show"); // Elimina la clase "show" del elemento
    document.getElementById("desktopnav-company-icon").style.transform =
      "rotate(0deg)"; // Obtiene el icono del menú de compañía y lo rota 0 grados
  } else {
    // Si el elemento no tiene la clase "show"
    dropdown.classList.add("show"); // Agrega la clase "show" al elemento
    document.getElementById("desktopnav-company-icon").style.transform =
      "rotate(-180deg)"; // Obtiene el icono del menú de compañía y lo rota -180 grados
    document.getElementById("desktopnav-features").classList.remove("show"); // Elimina la clase "show" del menú de características si está presente
    document.getElementById("desktopnav-features-icon").style.transform =
      "rotate(0deg)"; // Obtiene el icono del menú de características y lo rota 0 grados
  }
}

function closeMenu() {
  document.getElementById("mobile-links").style.transform = "scaleX(0)"; //que desaparezca
  document.getElementById("mobile-menu").style.backgroundColor = "transparent";
  setTimeout(() => {
    //establecer un retraso de 250 milisegundos antes de hacer que el menú desaparezca
    document.getElementById("mobile-menu").style.display = "none";
    document.getElementById("mobile-menu").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)"; //cambiar su color de fondo a un valor semitransparente
  }, 250);
}

function openMenu() {
  document.getElementById("mobile-menu").style.display = "block"; //para hacer que aparezca.
  document.getElementById("mobile-links").style.transform = "scaleX(1)"; //los enlaces móviles para hacer que aparezcan
}

function toggleMobileFeaturesDropdown() {
  var dropdown = document.getElementById("mobilenav-features"); //recuperando el elemento del menú desplegable y almacenándolo en una variable
  if (dropdown.classList.contains("mobile-dropdown-show")) {
    // la función verifica si la clase, presente en el elemento del menú desplegable
    dropdown.classList.remove("mobile-dropdown-show"); //Si la clase está presente, la función la elimina utilizando el método
    document.getElementById("mobilenav-features-icon").style.transform =
      "rotate(0deg)"; // la función establece el valor, elemento con la clase,
  } else {
    dropdown.classList.add("mobile-dropdown-show"); //no está presente en el elemento del menú desplegable
    document.getElementById("mobilenav-features-icon").style.transform =
      "rotate(-180deg)";
  }
}

function toggleMobileCompanyDropdown() {
  var dropdown = document.getElementById("mobilenav-company"); //función recupera el elemento del menú desplegable y lo almacena en una variable
  if (dropdown.classList.contains("mobile-dropdown-show")) {
    // verifica si la clase  está presente en el elemento del menú desplegable utilizando el método
    dropdown.classList.remove("mobile-dropdown-show"); //Si la clase está presente, la función la elimina utilizando el método
  } else {
    dropdown.classList.add("mobile-dropdown-show"); //no está presente en el elemento del menú desplegable, la función la agrega utilizando el método
  }
}
