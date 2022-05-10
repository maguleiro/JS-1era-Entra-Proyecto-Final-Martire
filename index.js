alert("Registrese para acceder:");
let usernameReg = prompt("username");
let emailReg = prompt("email");
let pwdReg =prompt("password");
let resultadoReg = registro (usernameReg, emailReg, pwdReg);

function registro(usernameReg,emailReg,pwdReg)
{
	alert ("Inicie Sesion:");

	let username = prompt ("username o email");
	let pwd = prompt("password");
	let resultado = login (username,pwd)

	if (resultado)
	{
		alert ("LOGIN EXITOSO.")
	}
	else{
		alert("ALGUNO DE SUS DATOS ES INCORRECTO.")
	}

	function login(username,emailReg,pwd)
{
	if (username === usernameReg && pwd === pwdReg)
	{
		return true;
	}
	else
	{
		return false; 
	}
}
}


