var textFieldElem = document.querySelector(".textInput");
var addBtnElem = document.querySelector(".Addbtn");
var displayElem = document.querySelector(".display1");
var clearElem = document.querySelector('.clear')
var dropDownElem = document.querySelector('.dropdown2')
//instance
//var myRegs = RegistrationNums();

var storing = localStorage.getItem('Registration');
var storedRegs = storing ? JSON.parse(storing) : {};

var myRegs = RegistrationNums(storedRegs)

function listCReation(value) {
  let create = document.createElement("li");
  create.textContent = value;
  displayElem.appendChild(create);
}

function displayingRegNums(){
    var numberPlate = textFieldElem.value.trim();
    textFieldElem.value = '';

    if(myRegs.inputReg(numberPlate)){
      listCReation(myRegs.forRegNumber())
      localStorage.setItem("Registration", JSON.stringify(myRegs.forRegMap()))
    }
      else {
      displayElem.innerHTML = "Please enter a valid registration number!"
    }
}


addBtnElem.addEventListener('click', function(){
  displayingRegNums();
})

clearElem.addEventListener('click', function(){
  displayElem.innerHTML = '';
  localStorage.clear();
  location.reload()
  location.hash = "";
  dropDownElem.value = "All"
})

window.addEventListener("load", function() {
  var list = myRegs.forFiltering("");
  if (location.hash !== "") {
    for (let i = 0; i < list.length; i++) {
      listCReation(list[i]);
    }
  }
});

dropDownElem.addEventListener('change', function(){
    let getData = myRegs.forFiltering(dropDownElem.value);
  
    displayElem.innerHTML = '';

      for(var i=0; i< getData.length; i++){
        listCReation(getData[i]);
      }

})
