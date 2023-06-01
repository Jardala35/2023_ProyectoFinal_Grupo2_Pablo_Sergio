
  window.addEventListener("DOMContentLoaded", function() {
    var etiquetas = [
      {
        titulo: "Oferta Base",
        imagenSrc: "/imgs/cards0.jpg",
        imagenAlt: "muestra",
        contenido: "Lorem ipsum",
        enlaceTexto: "Más información",
        enlaceHref: "#",
      },
      {
        titulo: "Otra oferta",
        imagenSrc: "/imgs/cards1.jpg",
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