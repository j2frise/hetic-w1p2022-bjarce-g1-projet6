
/* les fonctions  exo bonus */

var un = "I";
var cinq = "V";
var dix = "X";
var cinquante = "L";
var cent = "C";
var cinq_cent = "D";
var mille = "M";

var number = document.getElementById("number");
var erreur = document.getElementById("erreur");
var reponse = document.getElementById("reponse");

function unite(nb){
    var nombre="";
    if (nb >= 1 && nb < 4){
        nombre = un;
        for(var i = 1; i < nb; i++){
            nombre = nombre + un;
        }
    }
    else if(nb == 4){
        nombre = un+cinq;
    }
    else if (nb > 4 && nb < 9){
        nombre = cinq;
        for(var i = 5; i < nb; i++){
            nombre = nombre + un;
        }
    }
    else if(nb == 9){
        nombre = un+dix;
    }
    return nombre;
}

function deux_unite(nb){
    var nombre="";
    if(nb < 10){
        nombre = unite(nb);
    }
    else { 
        var modulo = nb % 10;
        var div = parseInt(nb / 10);
        if(div >=1 && div < 4){
            nombre = dix;
            for(var i = 1; i < div; i++){
            nombre = nombre + dix;
            }
            nombre += unite(modulo);
        }
        else if(div == 4){
            nombre = dix+cinquante;
            nombre += unite(modulo);
        }
        else if(div > 4 && div < 9){
            nombre = cinquante;
            for(var i = 5; i < div; i++){
                nombre = nombre + dix;
            }
            nombre += unite(modulo);
        }
        else if(div == 9){
            nombre = dix+cent;
            nombre += unite(modulo);
        }
    }
    return nombre;
}

function trois_unite(nb){
    var nombre="";
    if(nb < 10){
        nombre = unite(nb);
    }
    else if(nb >=10 && nb < 100){
        nombre = deux_unite(nb);
    }
    else{ 
        var modulo = nb % 100;
        var div = parseInt(nb / 100);
        if(div >=1 && div < 4){
            nombre = cent;
            for(var i = 1; i < div; i++){
            nombre = nombre + cent;
            }
            nombre += deux_unite(modulo);
        }
        else if(div == 4){
            nombre = cent+cinq_cent;
            nombre += deux_unite(modulo);
        }
        else if(div > 4 && div < 9){
            nombre = cinq_cent;
            for(var i = 5; i < div; i++){
                nombre = nombre + cent;
            }
            nombre += deux_unite(modulo);
        }
        else if(div == 9){
            nombre = cent+mille;
            nombre += deux_unite(modulo);
        }
    }
    return nombre;
}


function quatre_unite(nb){
    var nombre="";
    var modulo = nb % 1000;
    var div = parseInt(nb / 1000);
    if(div >=1 && div < 4){
        nombre = mille;
        for(var i = 1; i < div; i++){
           nombre = nombre + mille;
        }
        nombre += trois_unite(modulo);
    }
    return nombre;
}

function chiffre_romain(nb){
    var longueur = nb.toString().length;
    var romain;
    if (longueur == 1){
        romain = unite(nb);
    }
    else if(longueur == 2){
        romain = deux_unite(nb);
    }
    else if(longueur == 3){
        romain = trois_unite(nb);
    }
    else if(longueur == 4){
        romain = quatre_unite(nb);
    }
    return romain;
}


function execute(){
    var chiff = number.value;
    if(isNaN(chiff)){
        erreur.innerHTML="L'élément saisi n'est pas un chiffre";
    }
    else{
        if(!(chiff >= 1 && chiff <= 3999 )){
            erreur.innerHTML="Erreur, le nombre doit être compris entre 1 et 3999 ";
        }
        else{
            erreur.innerHTML="";
            var resultat = chiffre_romain(chiff);
            reponse.innerHTML="Le chiffre romain de "+chiff+" est : <strong style='color:red;font-size:20px'>"+resultat+"</strong>";
        }
    }
}

number.addEventListener("change",execute);

