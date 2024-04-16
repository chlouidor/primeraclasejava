

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let edad= document.getElementById("edad");
let correo= document.getElementById("correo");
let error1= document.getElementById("error1");
let btnEnviar = document.getElementById("btnEnviar");

let nombreV = "";
let apellidoV = "";


btnEnviar.addEventListener("click", function(e){
e.preventDefault();


nombreV=nombre.value;
apellidoV=apellido.value;
edadV=edad.value;
correoV=correo.value;





if (nombreV ===""){
error1.innerHTML = "Debe ingresar el Nombre"
error1.style.color ="red";
return;
}
if (apellidoV ===""){
    error1.innerHTML = "Debe ingresar el Apellido"
    error1.style.color ="red";
    return;
    }
if (edadV ===""){
        error1.innerHTML = "Debe ingresar la Edad"
        error1.style.color ="red";
        return;
        }
if (correoV ===""){
            error1.innerHTML = "Debe ingresar el Correo"
            error1.style.color ="red";
         return;
         }
else
error1.innerHTML = "";
    console.log('nombre: $(nombreV), apellido: $(apellidoV), edad: $(edadV), correo:$(correoV)  ');
    console.log(object);




});