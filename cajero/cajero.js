var imagenes = [];
imagenes["100"] = "bi100.jpg";
imagenes["50"] = "bi50.jpg";
imagenes["20"] = "bi20.jpg";
imagenes["10"] = "bi10.jpg";
imagenes["5"] = "bi5.jpg";
imagenes["2"] = "bi2.jpg";
imagenes["1"] = "bi1.jpg";

class Billete
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
		this.imagen = new Image();
		this.imagen.src = imagenes[this.valor];
	}
}

var caja = [];
caja.push( new Billete(100, 3) );
caja.push( new Billete(50, 3) );
caja.push( new Billete(20, 3) );
caja.push( new Billete(10, 3) );
caja.push( new Billete(5, 2) );
caja.push( new Billete(2, 2) );
caja.push( new Billete(1, 2) );

contar();

var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero()
{
	var dibujado = [];
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);
	if (total >= dinero)
	{
		for(bi of caja)
		{
			if (dinero > 0)
			{
				div = Math.floor(dinero/bi.valor);
				if (div>bi.cantidad)
				{
					papeles = bi.cantidad;
				}
				else
				{
					papeles = div;
				}
					bi.cantidad = bi.cantidad-papeles;
				for (var i = 0; i < papeles; i++)
				{
					dibujado.push ( new Billete(bi.valor, 1) );
				}
				dinero -= (bi.valor * papeles);
			}
		}
		if (dinero == 0)
		{
			resultado.innerHTML += "Se ha retirado: <br />";
			for(var e of dibujado)
			{
				resultado.innerHTML += "<img src=" + e.imagen.src + " />";
			}
			resultado.innerHTML += "<hr />";
		contar();
		}
		else
		{
			resultado.innerHTML += "No tengo los billetes para esa suma, intenta otro valor <hr />";
		}

	}
	else
	{
		resultado.innerHTML += "Soy un cajero pobre y no tengo dinero :( <hr />";
	}
}

function contar()
{
	total = 0
	for (var tot of caja)
	{
		total = total + tot.valor * tot.cantidad;
	}
	console.log(total);
}
