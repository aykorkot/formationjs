function message(){
	alert("I Feel Better");
};

function confirmation(){
 
	if(confirm("Voulez vous afficher le message de confirmation ?")){
		message();
	}
};
	
function addition(){ 
	var sm =  prompt("Veuillez saisir le nombre a rajouter a 10");
	
	// Pour calculer il faut convertir
	sm =  parseInt(sm);
	sm = sm + 10;
	
	alert("La somme est : " + sm );
};

function calculer(a,b){
	var sm = 0;
	sm = a+b;
	alert(sm);
};


function calculetab(tab){
	calculer(tab[0],tab[1]);
};


function filtrerpair(){
	var montab = new Array();
	for(i=0;i<=99;i++){

		if(i%2==0){
			montab[i]= i;	
		}
	}
	console.log(montab);
};

 
function tableaumulti(){
	
	// tab 1
	var	noms = new Array("Nom3","Nom2","Nom3");
	
	// tab 2
	var prenoms = new Array("Prénom1","Prénom2","Nom3");
	
	// tab 3
	var eleves = new Array();
	
	eleves["noms"] = noms;
	eleves["prenoms"] = prenoms;
	
	
	// tab 4
	var candidats = new Array(noms, prenoms);
	
	// tab 5
	var liste = new Array(eleves, candidats);

	searchname(liste, "Nom3");

};

var indices = [];
  

function searchname(tableau,mot){

	//var idx = tableau.indexOf(mot);

	// on a trouvé le mot dans le tableau "tableau"
	
		
	// Si c'est un tableau
	if (tableau.constructor == Array){
		
		for(i=0;i<tableau.length;i++){
			searchname(tableau[i], mot);
		}
	}

};
 
 
 
 
 // Exemple du factorielle pour la récursivité
//var fac = factorielle(3);
/* 

function factorielle (nombre)
{
    var x = 0;
    if (nombre == 1)
    {
        x = 1;
        return(x);
    }
    else
    {
		var calFac = factorielle(nombre - 1);
		
        x = nombre * calFac; 
        return(x);
    }
}
*/

		
/*      	var showliste = document.getElementsByClassName('listemenu');
      
		for(var i = 0; i < showliste.length; i++) {


            var lstelement = showliste[i];

            lstelement.onclick = function() { 

            	var hideliste = document.getElementsByClassName('sousmenu');
      
		      	for(var i = 0; i < hideliste.length; i++) {
		    		hideliste[i].classList.remove("show");
		 		}
				this.nextElementSibling.classList.toggle("show");
				
            }

        }

*/




function fct1() {
    var text1 = document.getElementById("id1").value;
	var decouper = text1.split("");
	var carac = "";
	
	for(i=0;i<decouper.length;i++){
		if( (decouper[i]=="o") || (decouper[i]=="u") || (decouper[i]=="i") || (decouper[i]=="e") || (decouper[i]=="y") || (decouper[i]=="a") ){
	
		carac = carac + decouper[i];
		document.getElementById("i2").value = carac;
		
		}
	}
  
}



function ajoutliste() {

    var inp = document.getElementById("i1").value;

	var li = document.createElement("li");

	var textnode = document.createTextNode(inp);


	li.appendChild(textnode);
    document.getElementById("listes").appendChild(li);
	
}




$(document).ready(function(){


	$("#iden1").focus(function(){

	    if ($(this).val() == "Rechercher")
	    {
	    	$(this).val("");

	    }

	    if ($(this).hasClass("placeholder")) {

	    	$(this).removeClass("placeholder");

	    };

	});


	$("#iden1").blur(function(){

	  $(this).val("Rechercher");

	 	if (!$(this).hasClass("placeholder")) {

	    	$(this).addClass("placeholder");

	    };
	});

});





