function crearUsuario(){
  
}

let userr = "Pepe";
let passs = "123pepe"
// Inicio de sesión
function inicioSecion(){
  const correoLogin = document.getElementById("correo-login").value;
  const contrasenaLogin = document.getElementById("contrasena-login").value;

  if (correoLogin == userr && contrasenaLogin == passs) {
    alert(`¡Bienvenido, !`); // Si coincide, muestra bienvenida
    return true;
    }else{
    alert('Correo o contraseña incorrectos.');
    return false;
  }

};
