
  window.addEventListener("DOMContentLoaded", function() {
    var etiquetas = [
      {
        titulo: "Cadena perpetua",
        imagenSrc: "imgs/Cadena_perpetua.jpg",
        imagenAlt: "muestra",       
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      },
      {
        titulo: "Alien, El octavo pasajero",
        imagenSrc: "imgs/Alien.jpg",
        imagenAlt: "muestra",        
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      },
      {
        titulo: "Vengadores, Infinity war",
        imagenSrc: "imgs/avengers-infinity-war.jpg",
        imagenAlt: "muestra",        
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      },
      {
        titulo: "El silencio de los corderos",
        imagenSrc: "imgs/El_silencio_de_los_corderos.jpg",
        imagenAlt: "muestra",        
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      },
      {
        titulo: "Gladiator",
        imagenSrc: "imgs/Gladiator.jpg",
        imagenAlt: "muestra",        
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      },
      {
        titulo: "Interstellar",
        imagenSrc: "imgs/Interstellar.jpg",
        imagenAlt: "muestra",        
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      },
      {
        titulo: "LoR, El retorno del rey",
        imagenSrc: "imgs/Lord_of_rings.jpg",
        imagenAlt: "muestra",        
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      },
      {
        titulo: "Matrix",
        imagenSrc: "imgs/Matrix.jpg",
        imagenAlt: "muestra",        
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      },
      {
        titulo: "Origen",
        imagenSrc: "imgs/origen.jpg",
        imagenAlt: "muestra",       
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      },
      {
        titulo: "Pulp fiction",
        imagenSrc: "imgs/Pulp_fiction.jpg",
        imagenAlt: "muestra",        
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      },
      {
        titulo: "El resplandor",
        imagenSrc: "imgs/resplandor.jpg",
        imagenAlt: "muestra",        
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      },
      {
        titulo: "Terminator 2, el juicio final",
        imagenSrc: "imgs/Terminator_2_El_juicio_final.jpg",
        imagenAlt: "muestra",        
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      },
      {
        titulo: "El caballero oscuro",
        imagenSrc: "imgs/the_dark_knight.jpg",
        imagenAlt: "muestra",        
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      },
      {
        titulo: "Malditos bastardos",
        imagenSrc: "imgs/inglourious_basterds.jpg",
        imagenAlt: "muestra",        
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      }, 
      {
        titulo: "Old boy",
        imagenSrc: "imgs/Old_boy.jpg",
        imagenAlt: "muestra",        
        enlaceTexto: "Más información",
        enlaceHref: "pelicula.html",
      },       
     
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
        imgImagen.className = "imgLista";
        imgImagen.src = etiquetas[i].imagenSrc;
        imgImagen.alt = etiquetas[i].imagenAlt;      
        
      
        divCuerpo.appendChild(imgImagen);
       
      
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
     
    }
  );