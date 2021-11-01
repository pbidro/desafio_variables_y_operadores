
function ejercicio1 () {

    alert("Ingrese 2 números diferentes mayores a 0");
    var a = parseInt(prompt("Priemer número","")); 
    var b = parseInt(prompt("Segundo número","")); 
    
    
    var suma= a+b;
    var resta= a-b;
    var multiplicacion= a*b;
    var division= a/b;
    var modulo= a%b;
    var resultado = ''

    if  (a>0 && b>0 && a!=b) {
        resultado +='la suma de los numeros es:' + suma + '<br>';
        resultado +='la resta de los numeros es:' + resta  +'<br>';
        resultado +='la multiplicacion de los numeros es:' + multiplicacion  + '<br>';
        resultado +='la division de los numeros es:' + division  + '<br>';
        resultado +='el modulo de los numeros es:' + modulo+ '<br>';

    } else {
        resultado = "Ingrese 2 números diferentes mayores a 0";
    }


    document.getElementById("ejercicio1").innerHTML = resultado;

}



function ejercicio2() {

    var a = parseInt(prompt("Ingrese la temperatura en grados celcius","")); 
    
    var kelvin = a + 273.15;
    var farenheit = (a*9/5)+32;

    var resultado = a+' grados celcius son: <br>'+kelvin+' grados kelvin <br>'+farenheit+' grados farenheit';
    document.getElementById("ejercicio2").innerHTML = resultado;

}

function ejercicio3() {

    var total_dias = parseInt(prompt("Ingrese la cantidad de días","")); 
    
    var años = Math.trunc(total_dias/365);

    var semanas_restantes = parseInt(Math.trunc((total_dias - (años*365))/7));
 
    var dias_restantes = parseInt(Math.trunc((total_dias - (años*365))%7));

    var resultado = 'El total de días es: '+total_dias+'<br>'+'El total de años es: '+años+'<br>'+'El total de semanas es: '+semanas_restantes+'<br>'+'El total de dias es: '+dias_restantes;

    document.getElementById("ejercicio3").innerHTML = resultado;

}

function ejercicio4() {

    alert("Ingrese 5 números");
    var a = parseInt(prompt("Primer número",""));
    var b = parseInt(prompt("Segundo número",""));
    var c = parseInt(prompt("Tercer número",""));
    var d = parseInt(prompt("Cuarto número",""));
    var e = parseInt(prompt("Quinto número",""));

    suma = a+b+c+d+e;
    promedo = suma/5;
    resultado = 'La suma de los números es: '+suma+'<br>'+'El promedio de los números es: '+promedo;
    document.getElementById("ejercicio4").innerHTML = resultado;
}