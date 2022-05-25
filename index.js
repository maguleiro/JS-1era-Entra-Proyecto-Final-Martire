let nombre = prompt("¿Cual es tu nombre?");
const plata = 1000;

function saludar(){

	respuesta = prompt("Hola " + nombre + " ¿Como fue tu dia?");
	if (respuesta == "bien"){
		alert("¡Me alegro!")
	} else{
		alert("Una pena...")
	}
}

saludar()

let fernet = 500;
let jagger = 850;
let gin = 450;
let birra = 250;
let vodka = 1500;

function bebida (){

	respuesta = prompt (`¿Que te gustaria tomar?
						-Fernet $500
						-Jaggermeister $850
						-Gin Tonic $450
						-Birra $250
						-Vodka $1500`)
	
	if (respuesta == "fernet"){
		let resta = plata - fernet;
		alert ("Muchas gracias, tu vuelto es " + resta)
	}
	if (respuesta == "jaggermeister"){
		let resta = plata - jagger;
		alert ("Muchas gracias, tu vuelto es " + resta)
	}
	if (respuesta == "gin"){
		let resta = plata - gin;
		alert ("Muchas gracias, tu vuelto es " + resta)
	}
	if (respuesta == "birra"){
		let resta = plata - birra;
		alert ("Muchas gracias, tu vuelto es " + resta)
	}
	if (respuesta == "vodka"){
		let resta = vodka - plata;
		alert ("No te alcanza te faltan " + resta)
	}
}

bebida()