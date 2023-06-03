
  window.addEventListener("DOMContentLoaded", function() {
    var etiquetas = [
      {
        titulo: "Cadena perpetua",
        imagenSrc: "/imgs/Cadena_perpetua.jpg",
        imagenAlt: "muestra",
        contenido: "Lorem ipsum",
        enlaceTexto: "Más información",
        enlaceHref: "#",
      },
      {
        titulo: "Alien, El octavo pasajero",
        imagenSrc: "/imgs/Alien.jpg",
        imagenAlt: "muestra",
        contenido: "Dolor sit amet",
        enlaceTexto: "Más información",
        enlaceHref: "#",
      },
      {
        titulo: "Vengadores, Infinity war",
        imagenSrc: "/imgs/avengers-infinity-war.jpg",
        imagenAlt: "muestra",
        contenido: "Dolor sit amet",
        enlaceTexto: "Más información",
        enlaceHref: "#",
      },
      {
        titulo: "El silencio de los corderos",
        imagenSrc: "/imgs/El_silencio_de_los_corderos.jpg",
        imagenAlt: "muestra",
        contenido: "Dolor sit amet",
        enlaceTexto: "Más información",
        enlaceHref: "#",
      },
      {
        titulo: "Gladiator",
        imagenSrc: "/imgs/Gladiator.jpg",
        imagenAlt: "muestra",
        contenido: "Dolor sit amet",
        enlaceTexto: "Más información",
        enlaceHref: "#",
      },
      {
        titulo: "Interstellar",
        imagenSrc: "/imgs/Interstellar.jpg",
        imagenAlt: "muestra",
        contenido: "Dolor sit amet",
        enlaceTexto: "Más información",
        enlaceHref: "#",
      },
      {
        titulo: "El señor de los anillos, el retorno del rey",
        imagenSrc: "/imgs/Lord_of_rings.jpg",
        imagenAlt: "muestra",
        contenido: "Dolor sit amet",
        enlaceTexto: "Más información",
        enlaceHref: "#",
      },
      {
        titulo: "Matrix",
        imagenSrc: "/imgs/Matrix.jpg",
        imagenAlt: "muestra",
        contenido: "Dolor sit amet",
        enlaceTexto: "Más información",
        enlaceHref: "#",
      },
      {
        titulo: "Origen",
        imagenSrc: "/imgs/origen.jpg",
        imagenAlt: "muestra",
        contenido: "Dolor sit amet",
        enlaceTexto: "Más información",
        enlaceHref: "#",
      },
      {
        titulo: "Pulp fiction",
        imagenSrc: "/imgs/Pulp_fiction.jpg",
        imagenAlt: "muestra",
        contenido: "Dolor sit amet",
        enlaceTexto: "Más información",
        enlaceHref: "#",
      },
      {
        titulo: "El resplandor",
        imagenSrc: "/imgs/resplandor.jpg",
        imagenAlt: "muestra",
        contenido: "Dolor sit amet",
        enlaceTexto: "Más información",
        enlaceHref: "#",
      },
      {
        titulo: "Terminator 2, el juicio final",
        imagenSrc: "/imgs/Terminator_2_El_juicio_final.jpg",
        imagenAlt: "muestra",
        contenido: "Dolor sit amet",
        enlaceTexto: "Más información",
        enlaceHref: "#",
      },
      {
        titulo: "El caballero oscuro",
        imagenSrc: "/imgs/the_dark_knight.jpg",
        imagenAlt: "muestra",
        contenido: "Dolor sit amet",
        enlaceTexto: "Más información",
        enlaceHref: "#",
      },      
      // Agrega más objetos si deseas más etiquetas
    ];
  
    var contenedor = document.getElementById("miDiv");
  
    for (var i = 0; i < etiquetas.length; i++) {
        var divContenedor = document.createElement("div");
        divContenedor.className = "contenedor2";
      
        var divTarjeta = document.createElement("div");
        divTarjeta.className = "tarjeta";
      
        var h2Titulo = document.createElement("h2");
        h2Titulo.className = "titulo";
        h2Titulo.textContent = etiquetas[i].titulo;
      
        var divCuerpo = document.createElement("div");
        divCuerpo.className = "cuerpo";
      
        var imgImagen = document.createElement("img");
        imgImagen.src = etiquetas[i].imagenSrc;
        imgImagen.alt = etiquetas[i].imagenAlt;
      
        var pContenido = document.createElement("p");
        pContenido.textContent = etiquetas[i].contenido;
      
        divCuerpo.appendChild(imgImagen);
        divCuerpo.appendChild(pContenido);
      
        var divPie = document.createElement("div");
        divPie.className = "pie";
      
        var enlaceMasInfo = document.createElement("a");
        enlaceMasInfo.href = etiquetas[i].enlaceHref;
        enlaceMasInfo.textContent = etiquetas[i].enlaceTexto;
      
        divPie.appendChild(enlaceMasInfo);
      
        divTarjeta.appendChild(h2Titulo);
        divTarjeta.appendChild(divCuerpo);
        divTarjeta.appendChild(divPie);
      
        divContenedor.appendChild(divTarjeta);
      
        contenedor.appendChild(divContenedor);
      }
  
      divContenedor.appendChild(divTarjeta);
  
      contenedor.appendChild(divContenedor);
    }
  );