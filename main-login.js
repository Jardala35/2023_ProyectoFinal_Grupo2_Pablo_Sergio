function login(){
  var nombre = document.getElementById("Usuario").value;
  var contraseña = document.getElementById("Pass").value;

  // Obtener los registros almacenados en localStorage
  var registros = localStorage.getItem("registros");
  if (registros) {
    registros = JSON.parse(registros);

    // Buscar el usuario en los registros
    var usuarioEncontrado = registros.find(function (usuario) {
      return usuario.nombre === nombre && usuario.contraseña === contraseña;
    });

    if (usuarioEncontrado) {
      window.location.href = "index.html"; 
    } else {
      alert("Nombre de usuario o contraseña incorrectos. Por favor, inténtalo nuevamente.");
    }
  } else {
    alert("No hay usuarios registrados. Por favor, regístrate primero.");
  }
}

  var boton = document.getElementById("pwd");
  var volver = document.getElementById("volver")
  var contenido = document.getElementById("segundoC");
  var contenido2 = document.getElementById("primerC")

boton.addEventListener("click", function(event) {
  event.preventDefault();
  contenido.style.display = "block";
  contenido2.style.display = "none";

});
volver.addEventListener("click", function(event) {
  event.preventDefault();
  contenido.style.display = "none";
  contenido2.style.display = "block";

});