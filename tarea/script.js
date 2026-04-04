const nombre = prompt("ingrese su nombre: ");
const edad = parseInt(prompt("ingrese su edad: "));
const contrasenia = prompt("ingrese su contraseña: ");
if (nombre === "") {
    alert("el nombre no deve estar vacio")
}else if(edad < 18){
    alert("acceso denegado")
}else if (contrasenia.length < 6){
    alert("contraseña")
}else{
    let postedad = edad + 10
    console.log(`Bienvenido al sistema!!`)
    console.log(`sus datos son:`)
    console.log(`nombre: ${nombre}`)
    console.log(`edad: ${edad}`)
    console.log(`contraseña ${contrasenia}`)
    alert(`hola ${nombre} tu edad en 10 años sera de: ${postedad} `)
}