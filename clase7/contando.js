// Ciclo for
const paresHasta = numero => {
    let pares = []
    for (let contando = 1;contando <= numero;contando+=1){
        if(contando % 2 == 0){
            pares.push(contando)
        }
    }
    return pares.join()
}
// Ciclo while Mientras
/*
let contando = 1;
let pares = []
while(contando <= 8){
    if(contando % 2 == 0){
        pares.push (contando)
    }
    contando+=1
}
    console.log(pares.join());
 */
// Ciclo Do while 

let contando = 1;
let pares = []
do{
    console.log("contando",);
    if(contando % 2 == 0){
        pares.push(contando)
    }
    contando +=1
}while(contando >= 8)

console.log(pares.join());

