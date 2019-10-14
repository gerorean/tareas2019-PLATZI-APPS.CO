/*alert ("shasita es magia");*/
var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var y1, xf;
var colorcito = "#FAA";

for (l=0; l < lineas; l = l + 1)
{
  yi = 10 * l;
  xf = 300 - (10 * l);
  dibujarLinea(colorcito, 0, yi, xf, 0);
  console.log("Linea " + l);
  /*l = l + 1;*/
}

/*while (l < lineas)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea(colorcito, 0, yi, xf, 300);
  console.log("Linea " + l);
  l = l + 1;
}*/

dibujarLinea(colorcito, 1, 1, 1, 299);
dibujarLinea(colorcito, 1, 1, 299, 1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
/*console.log(lienzo);*/
}
