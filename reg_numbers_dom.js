var myRegs = RegistrationNums(storedRegs)
var textFieldElem = document.querySelector(".textInput");
var addBtnElem = document.querySelector(".Addbtn");
var displayElem = document.querySelector(".display1");
var clearElem = document.querySelector('.clear')
var dropDownElem = document.querySelector('.dropdown2')
//instance
//var myRegs = RegistrationNums();

var storing = localStorage.getItem('Registration');
var storedRegs = storing ? JSON.parse(storing) : {};

function listCReation(value) {
  let create = document.createElement("li");
  create.textContent = value;
  displayElem.appendChild(create);
}

function displayingRegNums(){
    var numberPlate = textFieldElem.value.trim().toUpperCase();
    textFieldElem.value = '';

    if(myRegs.inputReg(numberPlate)){
      listCReation(numberPlate)

    }

  localStorage.setItem("Registration", JSON.stringify(myRegs.returnAll()))

}


addBtnElem.addEventListener('click', function(){
  console.log();
  displayingRegNums();
  //listCReation()
})

clearElem.addEventListener('click', function(){
  if(textFieldElem !== ""){
    textFieldElem.value = "";
  }
  displayElem.innerHTML = '';
  localStorage.clear();
  location.reload()
})


// dropDownElem.addEventListener('change', function(){
//   displayElem.value = '';
//   var forDropDown = myRegs.forFilter(dropDownElem.value)
//
//   if (forDropDown.length > 0) {
//     for (var i = 0; i < forDropDown.length; i++) {
//       forDropDown(dropDownElem[i])
//     }
//
//   }
// })
