let numeroA = 10;
let numeroB = 5;
let ResultadoDeSuma = numeroA + numeroB;
    console.log (ResultadoDeSuma);

let numeroC = 10;
let numeroD = 5;
let ResuladoDeResta = numeroC - numeroD;
    console.log(ResuladoDeResta);

let numeroE = 5;
let numeroF = 5;
let ResultadoDeMultiplicacion = numeroE * numeroF;
    console.log(ResultadoDeMultiplicacion);

let numeroG = 12;
let numeroH = 2;
let Resultadodedivicion = numeroG / numeroH;
    console.log (Resultadodedivicion);
 // saludos //


 let saludo ="saludo";
 let holaMundo = "¡Hola Mundo!"; 
     console.log (saludo);
     console.log (holaMundo);
 

// me gusta el helado //

let meGustaElHelado = true
    console.log (meGustaElHelado)

let noMeGustaLaSal = false
    console.log (noMeGustaLaSal)

//numero menor //

let unNumeroChico = 2;
    console.log (unNumeroChico);

let unNumeroGrande = 5;
    console.log (unNumeroGrande);

let esMenor = 2 < 5;
    console.log (esMenor);

    // numero grande //

let esMayor = 2 > 5; 
    console.log (esMayor);
    // ture //
    
let condicion = false | 3 == 4;
    console.log (condicion);

// dia de la semana //

let diaDeSemana = "Viernes"; 
let comentario = "¡Hoy es día de descanso!";
    if (comentario == "¡Hoy es día de descanso!" && diaDeSemana == "Domingo" ){
            console.log("¡Hoy es día de descanso!");
            
    }else if( diaDeSemana == "Domingo" && comentario == "¡Hoy es dia de descanso!"){
            console.log ("Hoy es dia de descanso");
    }else{
            console.log ("hoy no es domingo");
    } 
    
    



// sumas //

let numero1 = 0;
let numero2 = 0;
let operation = "+"; 
let resultado = 0;

    switch (operation){
        case "+":
            resultado = numero1 + numero2
        console.log ("La suma entre", numero1, "+", numero2, "es igual", resultado);
    break;
        case "-":
            resultado = numero1 + numero2
        console.log ("La resta entre", numero1, "-", numero2, "es igual", resultado);
    break;
        case "/":
            if (numero2 == 0){
            console.log ("no se puede dividir entre cero");
    break;
            }else {
                (resultado = numero1 / numero2);

        console.log ("La divicion entre", numero1 / numero2, " es igual", resultado);
            }
    break;
        case "*":
                resultado = numero1 * numero2 
        console.log ("la divicion entre", numero1 / numero2, " es igual a", resultado);

    break;
        case "*":
                resultado = numero1 * numero2
            console.log ("la multiplicacion entre", numero1, "*", numero2, "es igual a", resultado); 
          
}

/*
let marcaRodadoMasGrande = "marca";
    console.log ( 18 > 24 ? rodadoAurora : rodadoMountainBike );
let rodadoMountainBike = 18;
let rodadoAurora = 24;

switch (marcaRodadoMasGrande) {
    case rodadoMountainBike:
    console.log (rodadoMountainBike);
        break;
    
    
    case marcaRodadoMasGrande:
    console.log ( marcaRodadoMasGrande);
        break;

} 
*/ 
 
 
function triple(numero) {
    return 3 * numero;
}
    console.log (triple (3));

function cuadruple(numero) {
    return 4* numero;
 }
    console.log (cuadruple (4));

function quintople (numero) {
    return 5* numero;
}
    console.log (quintople (5));

    function multiplicar(numero1, numero2) {
    return numero1 * numero2; 
}
    console.log (multiplicar (3, 4));

    // sumar y multiplicar // 
    
    function sumar(numero1, numero2) {
        return numero1 + numero2;
    }
    console.log (sumar (4, 4))

    function tripleDeLaSuma(numero3, numero4) {
        let resultadoDeSuma = sumar(numero3, numero4);
        return resultadoDeSuma * 3;
    }
    console.log (tripleDeLaSuma(5, 5)); 

let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
let seriesFavoritasDeHector = ["En Terapia", "Recordando el Show de Alejandro Molina"];

    console.log (seriesFavoritasDeAna);
    console.log (seriesFavoritasDeHector);

let saludos =  ["hola","mundo!"];
let respuesta =  ["hola","hola!"];
    console.log ( saludos);
    console.log (respuesta);

    let series = ['Mad Men','Breaking Bad','The Sopranos'];
    let ultimaSerie = series.pop();
    console.log(series); 
    console.log(ultimaSerie);

    let nombres = ['Frida','Diego','Sofía'];
    let primerNombre = nombres.shift();

    console.log(nombres); 
    console.log(primerNombre);
    
    
    
    
    let dias = ['Lunes','Martes','Jueves'];
    let separadosPorComa = dias.join(); 
    console.log(separadosPorComa); 
    let separadosPorGuion = dias.join(' - '); 
    console.log(separadosPorGuion);

    // usar un jion para armar una frase //

    let arrayFrase = [
        "No",
        "he",
        "fracasado,",
        "simplemente",
        "me",
        "he",
        "topado",
        "con",
        "diez",
        "mil",
        "soluciones",
        "equivocadas"
      ];
      let fraseEnLista = arrayFrase.join ();
        console.log (fraseEnLista);
      let fraseNueva = arrayFrase.join ["No he fracasado, simplemente me he topado con diez mil soluciones equivocadas"];
        console.log (fraseNueva);






    

