window.addEventListener("DOMContentLoaded", function() {
    var etiquetas = [

        {
            titulo: "Cadena perpetua",
            imagenSrc: "imgs/Cadena_perpetua.jpg",            
            
          },
          {
            titulo: "Alien, El octavo pasajero",
            imagenSrc: "imgs/Alien.jpg",
            
          }

    ];

    var contenedor = document.getElementById("miDiv");
  
    for (var i = 0; i < etiquetas.length; i++) {
        var divEtiqueta = document.createElement("div");
        var h2Titulo = document.createElement("h2");
        var imgImagen = document.createElement("img");
    
        h2Titulo.textContent = etiquetas[i].titulo;
        imgImagen.src = etiquetas[i].imagenSrc;
    
        divEtiqueta.appendChild(h2Titulo);
        divEtiqueta.appendChild(imgImagen);
    
        contenedor.appendChild(divEtiqueta);
      }  

});