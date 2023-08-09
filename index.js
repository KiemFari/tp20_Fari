let myForm = document.getElementById('myForm');

myForm.addEventListener("submit", function(e) {
// e.preventDefault();
let myInput = document.getElementById("all");
// const firstName = document.querySelector("firstName")
// const lastName = document.querySelector("lastName")
// const yourEmail = document.querySelector("yourEmail")
// const phoneNumber= document.querySelector("phoneNumber")
// const age= document.querySelector("Age")
// const yourCountry= document.querySelector("yourCountry")



if (myInput.value.trim() === "" ) {
let myError = document.getElementById("error")
myError.innerHTML = "Le champs  est vide";
myError.style.color = "red";
alert("le champs est vide")
   e.preventDefault(); 

}
});