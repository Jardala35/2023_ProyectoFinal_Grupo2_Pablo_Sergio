
function registro(){
    var user, password, email, password2

    user = document.getElementById("Usuario").value;
    password = document.getElementById("Pass").value;
    email = document.getElementById("email").value;
    password2 = document.getElementById("Pass2").value;

    if(user == "Admin"){
        alert("El usuario introducido ya esta en uso.")
    }else if(password != password2){
        alert("Las contraseñas no coinciden")
    }else if(email != ""  && password != ""  && password2 != ""  && user != ""){
      
    }else{
        alert("Datos Incorrectos o campos sin rellenar")
    }  

    var username = document.getElementById("Usuario").value;
    var password = document.getElementById("Pass").value;

    localStorage.setItem("Usuario", username);
    localStorage.setItem("Pass", password);
    
    document.getElementById("formu").reset();
}
