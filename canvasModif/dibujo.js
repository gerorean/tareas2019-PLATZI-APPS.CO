var texto = document.getElementById('texto_lineas');
var boton = document.getElementById('botoncito');
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById('dibujito');
console.log("d "+d);

var lienzo = d.getContext("2d");
var ancho = (d.width) - 4;
console.log("lienzo "+lienzo);


/*while (l < lineas + 1)
{
  yi = 9 * l;
  xf = 9 * l;
  dibujarLinea(colorcito, 1, yi + 29, xf + 1, 300 - 1);
  console.log("Linea "+ l);
  l = l + 2;
}*/

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();/*comenzar la trayectoria/linea*/
  lienzo.strokeStyle = color;/*parametro o variable del trazo*/
  lienzo.moveTo(xinicial, yinicial);/*metodo o funcion desde donde va a arrancar la linea*/
  lienzo.lineTo(xfinal, yfinal);/*metodo o funcion desde donde va a arrancar la linea*/
  lienzo.stroke();/*Cerrar la linea/trazo*/
  lienzo.closePath();/*Cerrar la trayectoria*/
}

function dibujoPorClick()
{
  var x = texto.value;
  /*console.log(texto);
  alert("No me toques ahí "+ texto.value + " x vale "+ x);*/
  var xxx = parseInt(texto.value);
  var xi, xf;
  var lineas = xxx;
  /*var l = 0;*/
  var colorcito = "#77F";
  var espacio = ancho / lineas;

  for (l = 0; l < lineas + 1; l++)
  {
    yi = espacio * l;
    xf = espacio * l;
    dibujarLinea(colorcito, 2, yi + 2 , xf + 2, ancho + 2);
    console.log("Linea "+ l);
    /*l = l + 1;*/
  }
}
