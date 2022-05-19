
let contador = 0;
let usuario =[];

while(contador <4)
{
	let nombre = prompt("Ingrese su nombre");
	let apellido = prompt("Ingrese su apellido");
	let email = prompt("Ingrese su email");
	let contrasenia = prompt("Ingrese su contrasenia");
	usuario.push(nombre, apellido, email, contrasenia);
	contador++;
	break;

}
console.log("Los datos del usuario son:")
console.log(usuario);


