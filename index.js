let nombre = prompt("¿Cual es tu nombre?");

const plata = 1000;
let fernet = 500;
let jagger = 850;
let gin = 450;
let birra = 250;
let vodka = 1500;

function saludar(){

	respuesta = prompt("Hola " + nombre + " ¿Como fue tu dia?");
	if (respuesta == "bien"){
		alert("¡Me alegro!")
	} else{
		alert("Una pena...")
	}
}

saludar()

class Producto{
	constructor(id,nombre,precio)
	{
		this.id=id;
		this.nombre=nombre;
		this.precio=precio;
	}
}



const producto1 = new Producto(1, "Fernet", "$500");
const producto2 = new Producto(2, "Jaggermeister", "$850");
const producto3 = new Producto(3, "Gin","$450");
const producto4 = new Producto(4, "Birra","$250");
const producto5 = new Producto(5, "Vodka","$1500");

const productos = [producto1,producto2,producto3,producto4,producto5];
console.log("INICIAL:", productos);


mostrarMenu();

function mostrarMenu()
{
	let opcion = 0;
	while(opcion!==10)
	{
	opcion = Number( prompt(`Seleccione una opcion:
						1. Hacer Pedido
						2. Agregar Producto
						3. Eliminar Producto
						4. Buscar Producto
						5. Modificar Producto
						6. Listar Productos
						7. Listar Productos + Precio
						10. Salir `));
	switch(opcion)
	{
		case 1:
			{
				bebida();
				break;
			}
		case 2:
			{
				agregarProducto();
				break;
			}
		case 3:
		{
			eliminarProducto();
			break;
		}
		case 4:
		{
			buscarProducto();
			break;
		}
		case 5:
		{
			modificarProducto();
			break;
		}
		case 6:
		{
			listarProductos();
			break;
		}
		case 7:
		{
			listarNombreMasPrecio();
			break;
		}
		default:{
			alert("opcion invalida");
			break;
		}
	}
	}
}

function bebida (){

	respuesta = prompt (`¿Que te gustaria tomar?
						-Fernet $500
						-Jaggermeister $850
						-Gin Tonic $450
						-Birra $250
						-Vodka $1500`)
	
	if (respuesta == "fernet"){
		let resta = plata - fernet;
		alert ("Muchas gracias, tu vuelto es " + resta);
		console.log ("Muchas gracias, tu vuelto es " + resta);
	}
	if (respuesta == "jaggermeister"){
		let resta = plata - jagger;
		alert ("Muchas gracias, tu vuelto es " + resta);
		console.log ("Muchas gracias, tu vuelto es " + resta);
	}
	if (respuesta == "gin"){
		let resta = plata - gin;
		alert ("Muchas gracias, tu vuelto es " + resta);
		console.log ("Muchas gracias, tu vuelto es " + resta);
	}
	if (respuesta == "birra"){
		let resta = plata - birra;
		alert ("Muchas gracias, tu vuelto es " + resta);
		console.log ("Muchas gracias, tu vuelto es " + resta);
	}
	if (respuesta == "vodka"){
		let resta = vodka - plata;
		alert ("No te alcanza te faltan " + resta);
		console.log ("Muchas gracias, tu vuelto es " + resta);
	}
}

function agregarProducto()
{
	let id=1;
	if(productos.lenght>0)
	{
		id=productos[productos.lenght-1].id+1;
	}

	
	let nombre=prompt("Ingrese nombre del producto");
	let precio=prompt("Ingrese precio del producto");
	let producto = new Producto(id, nombre, precio);

	productos.push(producto);
}

function listarProductos()
{
	console.log("LISTA DE PRODUCTOS");

	productos.forEach((producto)=>{
		console.log(producto.id+" "+producto.nombre+" "+producto.precio);
	});


}

function eliminarProducto()
{
	let id = Number(prompt("Ingrese el ID del producto a eliminar:"));

	let encontrado = productos.find((producto)=>producto.id===id);

	console.log("PRODUCTO A BORRAR", encontrado);

	if(!encontrado)
	{
		alert("Producto no Encontrado.");
	}
	else{
		let index = productos.indexOf(encontrado);
		console.log("Indice Encontrado");

		productos.splice(index,1);

		console.log("Producto Eliminado.");

		console.log(productos);

		alert("Producto Eliminado.");
	}

}

function buscarProducto()
{
	let nombre = prompt("Ingresa el nombre del producto:");

	let buscados = productos.filter((producto)=>producto.nombre.indexOf(nombre.toLocaleLowerCase)!==-1);

	console.log("BUSCAR USUARIOS", buscados);
}

function modificarProducto()
{
	let id = Number(prompt("Ingrese el ID del producto a modificar"));

	let existe = productos.some((producto)=>producto.id===id);

	if(existe)
	{
		let encontrado = productos.find((producto)=>producto.id===id); 
		let nuevoNombre = prompt("Ingrese el nuevo nombre:");
		let nuevoPrecio = prompt("Ingrese el nuevo precio:");

		encontrado.nombre = nuevoNombre;
		encontrado.precio = nuevoPrecio;

		console.log("MODIFICACION");
		console.log(productos);
	}
	else
	{
		alert("Producto no encontrado");
	}
}

function listarNombreMasPrecio()
{
	let nombresYPrecios = productos.map((producto)=>{
		return producto.nombre+ " " + producto.precio;
	})

	console.log("MAP:");
	console.log(nombresYPrecios);
}