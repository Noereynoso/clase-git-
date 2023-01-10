let bicicletas = require ("./datosBicis");
let dhBici = {
     buscarBici: function (idBici) {
        let Buscador = bicicletas.filter(numeroBici =>{
            return numeroBici.id  == idBici; 
            })
        if (Buscador.length > 0){
             return Buscador[0];
        }else{
            return null;
        };
       
     },
     venderBici: function(idBici) {
        let biciVender = this.buscarBici(idBici)
            if (biciVender != null) {
                biciVender.vendida = reue; 
                return biciVender;
            }else{
                return console.log ("BIcicleta no encontrada");
            };
        
     },
     biciParaLaVenta: function () {
        let bicicletasSinVender = bicicletas.filter(bicis =>{
            return bicis.vendida == false; 
        })
        return bicicletasSinVender;
        
     }
}





console.log(dhBici.buscarBici(0));

