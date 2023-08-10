 let myForm = document.getElementById('myForm');

myForm.addEventListener("submit", function(e) {
// e.preventDefault();
let myInput = document.getElementById("all");
let myAlles = document.getElementById("alles")
let myRegex =  /^[toute les champs doivent etre rempli]$/;
if (myInput.value.trim() === "" ) {
let myError = document.getElementById("error")
myError.innerHTML = "Le champs  est vide";
myError.style.color = "red";
//   
   e.preventDefault(); 

} else if (myRegex.test(myInput.value)=== false) {
   let myError = document.getElementById("error")
   myInput.innerHTML = "toutes les champs doivent etre rempli avant la validation";
   myInput.style.color = "red"
}

});

// document.getElementById("inscription").addEventListener("submit", function(e) {
// e.preventDefault();
// var error;
// var First = document.getElementById("First");
// var Last   = document.getElementById("Last");
// var Email  = document.getElementById("Email");
// var Number = document.getElementById("Number");
// var Age= document.getElementById("Age");
// var Male = document.getElementById("Male");
// var Female = document.getElementById("Female");
// var yourCountry = document.getElementById("Country");

// if (! yourCountry.value) {
//    error = "Le champs de country est vide";
// }
// if (!Age.value) {
//    error = "Le champs de Age est vide";
// }
// if (!Number.value) {
//    error = "Le champs de Number est vide";
// }
// if (!Email.value) {
//    error= "Le champs de Email est vide";
// }
// if (!Last.value) {
//    error = "Le champs de Last est vide";
// }
// if (!First.value) {
//    error = "Le champs de First est vide";
// }
// if (!Male.value) {
//    error = "Le champs de Male est vide";
// }
// if (!Female.value) {
//    error = "Le champs de Female est vide";
// }
// if(error){
//    e.preventDefault();
//    document.getElementById("error").innerHTML = error
//    return false;
// }else{
//    alert('formulaire soumis avec success!');
// }
// });