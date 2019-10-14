var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";/*ruta de la imagen de fondo o mapa*/

/*para cargar la imagen dentro del canvas tenemos que crear un objeto imagen completo y nuevo y esa imagen insertarla dentro del canvas*/
var imagen = new Image();/*Definición completa de un objeto o clase o instancia de la clase del objeto Image, asi estamos creando una etiqueta <IMG>*/
imagen.src = mapa;/*para poder cargar nuestra fuente de la imagen tenemos que pasarle la url por el atributo o propiedad src que es una variable dentro de la clase Image*/
/*evento Load, cual objeto tiene el evento carga?*/
/*imagen.addEventListener("load", dibujar);*/

/*function dibujar(evento)/*console.log para ver que tiene el objeto?*/
/*function dibujar(evento)
{
  papel.drawImage(imagen, 100, -50);
  console.log(evento);
}*/


var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujarFondo);
var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", dibujarVacas);
var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", dibujarCerdos);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", dibujarPollos);


function dibujarFondo()
{
  papel.drawImage(fondo, 0, 50);
  papel.drawImage(vaca, 10, 10);
  papel.drawImage(cerdo, 10, 300);
  papel.drawImage(pollo, 300, 150);
}

function dibujarVacas()
{
  papel.drawImage(vaca, 10, 10);
  papel.drawImage(cerdo, 10, 300);
  papel.drawImage(pollo, 300, 150);
}

function dibujarCerdos()
{
  papel.drawImage(vaca, 10, 10);
  papel.drawImage(pollo, 300, 150);
  papel.drawImage(cerdo, 10, 300);
}

function dibujarPollos()
{
  papel.drawImage(vaca, 10, 10);
  papel.drawImage(pollo, 300, 150);
  papel.drawImage(cerdo, 10, 300);
}


/*
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var fondo = new Image ();
fondo.src = mapa;
fondo.addEventListener("load", cargarFondo);

/*var vaca = new Image ();
vaca.objeto.src = "vaca.png";
vaca.objeto.addEventListener("load", cargarVacas);

var cerdo = new Image ();
fondo.src = "cerdo.png";
fondo.addEventListener("load", cargarCerdos);*/

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

/*var z

for(var i=0; i<10; i++)
{
  z = aleatorio(20, -20);
  document.write(z + ", ");
}*/
