var myRegs = RegistrationNums(storedRegs)
var textFieldElem = document.querySelector(".textInput");
var addBtnElem = document.querySelector(".Addbtn");
var displayElem = document.querySelector(".display1");
var clearElem = document.querySelector('.clear')
//instance
//var myRegs = RegistrationNums();

var storing = localStorage.getItem('users');
var storedRegs = storing ? JSON.parse(storing) : {};

function regCreation(takeInAValue){
  var create = document.createElement('span')
  create.createTextNode = takeInAValue;
  displayElem.appendChild(create);


}
//
// function listCReation() {
//   var node = document.createElement("LI");
//   var textnode = document.createTextNode(textFieldElem.value);
//   node.appendChild(textnode);
//   document.getElementById("displayMaaan").appendChild(node);
// }


function displayingRegNums(){
  if(textFieldElem.value !==''){
    var numberPlate = textFieldElem.value.trim();
    displayElem.innerHTML = myRegs.inputReg(numberPlate)
    var regNumberr = myRegs.returnTyped(numberPlate)
    //console.log(myRegs.forNumbersInReg())
    //regCreation(numberPlate)

    localStorage.setItem("users", JSON.stringify(myRegs.returnTyped()))
  }

}

function clearing(){
  if(textFieldElem.value = ''){
    textFieldElem.value ='';
  }
}


addBtnElem.addEventListener('click', function(){
  displayingRegNums();
  regCreation()
})

clearElem.addEventListener('click', function(){
  if(textFieldElem !== ""){
    textFieldElem.value = "";
  }
  displayElem.innerHTML = '';
})
