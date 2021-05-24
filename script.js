
// ***FUNCIONA BIEN********************************************
 document.getElementById("reloj").onclick = displayDate;

 function displayDate() {
   // document.getElementById("hora").innerHTML = Date();
     momentoActual = new Date();
     hora = momentoActual.getHours();
     minuto = momentoActual.getMinutes();
     segundo = momentoActual.getSeconds();
     // console.log(hora +':'+minuto+':'+ segundo);

   document.getElementById("hora").innerHTML = hora +':'+minuto+':'+ segundo;
}

document.getElementById("misterio").onclick = mensaje;
function mensaje () {
  mensaje = "Lo sentimos, aun no tenemos misterios para mostrarte";
  document.getElementById("mensaje").innerHTML = mensaje;


}

camaleon.onclick = cambiar;  
    function cambiar () {
        camaleon.style.color = 'rgb(22, 152, 162)';
    };


