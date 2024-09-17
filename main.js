
let cant=document.getElementById('cantidad');
let boton=document.getElementById('generar');
let contrasena =document.getElementById('contrasena');
let botonLimpiar=document.getElementById('limpiar');

const cadenaCaracteres ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generarContrasena(){

    // le decimos a la variable q va a contener un número
    let numeroDigitado=parseInt (cant.value); 

        // Validamos si el valor es NaN o 0
    if (isNaN(numeroDigitado) || numeroDigitado === 0) {
        document.getElementById('cantidad').focus();  // Poner el focus en el campo
        alert("Por favor, ingrese un número válido mayor que cero para la cantidad de caracteres.");
        return;
    }

    if (numeroDigitado<6) {  
        // ponemos el focus en el campo que hizo falta los datos 
        document.getElementById('cantidad').focus()  
        alert("La cantidad de caracteres debe ser mayor a 5");
        return;
    }  
   
    let password='';
  
    for(let i =0; i<numeroDigitado;i++){
        //toma un valor aleatorio dentro de la cadena de carcateres  
        let carcaterAleatorio =cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];       
        password+=carcaterAleatorio; 
                      
    }
    console.log('Password generada:' +' '+ password); //imprimimos por consola
    contrasena.value=password; 
    // Habilitamos en pantalla en boton Limpiar   
    botonLimpiar.style.display="block";
    console.log('numero digitado:' + ' '+numeroDigitado)
}
function limpiarTextbox(){
    // Seleccionamos todos los inputs de tipo 'text' y 'number'
    let camposTextoNumero = document.querySelectorAll('input[type="text"], input[type="number"]');

    // Recorremos todos los campos y limpiamos su valor
    camposTextoNumero.forEach(function(campo) {
    campo.value = '';  // Limpiamos cada campo
    }); 
    // ponemos el focus en el campo de cantidad para reiniciar el proceso
    document.getElementById('cantidad').focus() 
    // quitamos de la pantalla el boton Limpiar
    botonLimpiar.style.display="none";   
}









