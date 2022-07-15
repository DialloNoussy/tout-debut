const espaceMessage = document.getElementById("message");
const bouton = document.getElementById("bouton");
const ageInput = document.getElementById("age");
let ageMajorite = 18;
function valider(){
  espaceMessage.innerHTML = "Vous êtes autorisé à entrer🎖️🎖️🎖️";
}
function refuser(){
  alert("Cette espace est interdit aux personnes mineurs 🚨🚔👮‍♀️😁");
}
function onConfirm(){
  age = parseInt(ageInput.value);
  if(isNaN(age)){
    alert("Ceci n'est pas un nombre");
    return;
  }
  if(age < ageMajorite){
    refuser();
  }else{
    valider()
  }
  ageInput.value = "";
}
bouton.addEventListener('click', onConfirm);