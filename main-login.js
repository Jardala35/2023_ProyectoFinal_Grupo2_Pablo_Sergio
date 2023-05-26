function login(){
    var user, password

    user = document.getElementById("Usuario").value;
    password = document.getElementById("Pass").value;

    if(user == "Admin" && password == "1234"){
        window.location.href = "registro.html";
    }else{
        alert("Datos Incorrectos")
    }  
}