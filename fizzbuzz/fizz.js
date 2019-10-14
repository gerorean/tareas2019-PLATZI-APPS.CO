var numeros = 100;

document.write("**************************** Ver A <br />");
for(var i = 1; i <= numeros; i++)
{
  if(esDivisible(i,3))
  {
    document.write ("Fizz");
  }
  if(esDivisible(i,5))
  {
    document.write ("Buzz");
  }
  if(!esDivisible(i,3) && !esDivisible(i,5))
  {
    document.write(i);
  }
  document.write("<br />");
}

function esDivisible(num, divisor)
{
  if(num % divisor == 0)
  {
    return true;
  }
  else {
    {
      return false;
    }
  }
}


document.write("<br /><br />**************************** Ver B <br />");
for(var i = 1; i <= numeros; i++)
{
  var divisible = false;
  if(i % 3 == 0)
  {
    document.write ("Fizz");
    divisible = true;
  }
  if(i % 5 == 0)
  {
    document.write ("Buzz");
    divisible = true;
  }
  if(!divisible)
  {
    document.write(i);
  }
  document.write("<br />");
}


document.write("<br /><br />**************************** Ver C <br />");
for(var i = 1; i <= numeros; i++)
{
  if(i % 3 == 0)
  {
    document.write ("Fizz");
  }
  if(i % 5 == 0)
  {
    document.write ("Buzz");
  }
  if(i % 3 != 0 && i % 5 != 0)
  {
    document.write(i);
  }
  document.write("<br/>");
}
