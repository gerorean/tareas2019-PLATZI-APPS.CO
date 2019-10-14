var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

/*console.log(teclas);*/

document.addEventListener("keydown", dibujarTeclado);
var cuadrado = document.getElementById("area_de_dibujo");
var papel = cuadrado.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  /*if(evento.keyCode == teclas.UP)
    {
      console.log("Vamo' pa arriba");
    }*/
  var colorcito = "black";
  var movimiento = 5;

  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      console.log("arriba");
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      console.log("abajo");
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y , papel);
      x = x - movimiento;
      console.log("izquierda");
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y , papel);
      x = x + movimiento;
      console.log("derecha");
    break;
    default:
      console.log("otra tecla");
    break;
  }


  /*alert("oh por dios todo bien");*/
  /*console.log("tecla oprimida");*/
  /*console.log(evento);*/
  /*console.log(evento.keyCode);*/
}
/*alert("Todo bien")*/
