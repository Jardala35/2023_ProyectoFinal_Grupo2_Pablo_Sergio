function registro(){
    var user, password, email, password2,booleano

    booleano = true

    user = document.getElementById("Usuario").value;
    email = document.getElementById("email").value;
    password = document.getElementById("Pass").value;
    password2 = document.getElementById("Pass2").value;

    if(user == "Admin"){
        alert("El usuario introducido ya esta en uso.")
        booleano = false;
    }else if(password != password2){
        alert("Las contraseñas no coinciden")
        booleano = false;
    }else if( password == ""  || password2 == ""  || user == "" || email == ""){
        alert("Datos Incorrectos o campos sin rellenar")
        booleano = false;
    } else if (!/[A-Z]/.test(password)){
        alert("La contraseña tiene que contener un caracter en mayuscula")
        booleano = false;
    }

    var nombre = document.getElementById("Usuario").value;
    var contraseña = document.getElementById("Pass").value;
    var fecha = document.getElementById("date").value;

    var usuario = {
      nombre: nombre,
      contraseña: contraseña,
      fecha: fecha
    };

    var registros = localStorage.getItem("registros");
    if (registros) {
      registros = JSON.parse(registros);
    } else {
      registros = [];
    }

    registros.push(usuario);

    localStorage.setItem("registros", JSON.stringify(registros));
    if(booleano){
        window.location.href = "login.html"
    }

    //var username = document.getElementById("Usuario").value;
    //var password = document.getElementById("Pass").value;

    //localStorage.setItem("Usuario", username);
    //localStorage.setItem("Pass", password);

    var emailInput = document.getElementById("email");
    var email = emailInput.value;
  
   
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (!emailRegex.test(email)) {
     
      alert("Correo electrónico inválido");
    }
    
    document.getElementById("formu").reset();
}
