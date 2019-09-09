function calculateAge(){
    var userInput;
    var input = document.getElementById("text").value;
    
    if(input < 18 ){
        userInput = document.getElementById("userInput").innerHTML =  " Du är för ung, du måste vara minst 18 år"  + 
         ". Du är endast " + input + " år";
        
    } else if(input >= 18 && input < 66){
        userInput = document.getElementById("userInput").innerHTML =  "Du har åldern inne,"  + " " + "Du är " + input + " år";

    }else if(input >= 67){
        userInput = document.getElementById("userInput").innerHTML =  " Du är för gammal," + " " + "Du är " + input + " år";
    } else if(isNaN(input)){ 
        userInput = document.getElementById("userInput").innerHTML =  " Skriv in ett nummer";
    } 

}
