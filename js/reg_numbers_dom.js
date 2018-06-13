var textFieldElem = document.querySelector(".textInput");
var addBtnElem = document.querySelector(".Addbtn");
var displayElem = document.querySelector(".display1");
var clearElem = document.querySelector('.clear');
var dropDownElem = document.querySelector('.dropdown2');
var alert = document.querySelector(".alert");
//instance
//var myRegs = RegistrationNums();

var storing = localStorage.getItem('Registration');
var storedRegs = storing ? JSON.parse(storing) : {};

var myRegs = RegistrationNums(storedRegs)

function listCReation(value) {
  let li = document.createElement("li");
  li.textContent = value;
  displayElem.appendChild(li);
}

function addRegistration() {
  var numberPlate = textFieldElem.value.trim().toUpperCase();
  textFieldElem.value = '';

  if (myRegs.inputReg(numberPlate)) {
    alert.innerHTML = '';
    listCReation(numberPlate);
    localStorage.setItem("Registration", JSON.stringify(myRegs.forRegMap()));
    return;
  }
  alert.innerHTML = "Please enter a valid registration number!";
}

addBtnElem.addEventListener('click', addRegistration)

clearElem.addEventListener('click', function() {
  displayElem.innerHTML = '';
  localStorage.clear();
  location.reload()
  location.hash = "";
  dropDownElem.value = "All"
})

window.addEventListener("load", function() {
  var list = myRegs.forFiltering();
  for (let i = 0; i < list.length; i++) {
    listCReation(list[i]);
  }
});

dropDownElem.addEventListener('change', function() {
  let getData = myRegs.forFiltering(dropDownElem.value);

  displayElem.innerHTML = '';

  for (var i = 0; i < getData.length; i++) {
    listCReation(getData[i]);
  }

})
