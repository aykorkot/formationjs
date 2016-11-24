
// ana ndeconecta men team tsal ifais signe ookk




// function fct1() {
    // var text1 = document.getElementById("i1").value;
	// var decouper = text1.split("");
	// var carac = "";
	
	// for(i=0;i<decouper.length;i++){
		// if( (decouper[i]=="o") || (decouper[i]=="u") || (decouper[i]=="i") || (decouper[i]=="e") || (decouper[i]=="y") || (decouper[i]=="a") ){
	
		// carac = carac + decouper[i];
		// document.getElementById("i2").value = carac;
		
		// }
	// }
  
// }




function ajoutliste() {
    var text1 = document.getElementById("i1").value;
	
	var li = document.createElement("li");
	var txt = "<li>" + text1 + "</li>";
	
    document.getElementById("listes").appendChild(li);
	
}
  













