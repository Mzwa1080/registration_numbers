function RegistrationNums(storedRegs){
  var allRegs = storedRegs || {};
  var regNums = '';
  var regNum = '';

  function inputReg(regNumber){
    if(regNumber !==''){
        regNums = regNumber;
        if(allRegs[regNumber] == undefined){
           for(var i =0; i<regNumber.length; i++){
             if(regNumber.startsWith('CA' + regNums) || regNumber.startsWith('CAW' + regNums) || regNumber.startsWith('CEY' + regNums) || regNumber.startsWith('CJ' + regNums))
              allRegs[regNumber] == 0
          }
        }
        return regNums;
    }
    else {
      return false;
    }
  }

  // function printRegNums(regKey, regNum){
  //     if(regKey === "CA"){
  //       return regNums = "CA" +
  //     }
  // }

function forNumbers(key, personReg){
    inputReg(personReg);
  if(key == 'CapeTown'){
    return regNum = 'CA' + personReg;

  }
  if(key == 'George'){
    return regNum = 'CAW' + personReg;

  }
  if(key == 'Paarl'){
    return regNum = 'CJ' + personReg;

  }
  if(key == 'Strand'){
    return regNum = 'CEY' + personReg;

  }
}

  function returnAll(){
    return allRegs;
  }

  function forNumbersInReg(){
    return personReg;
  }

  function returnTyped(){
    return regNums;
  }

  return{
    inputReg,
    returnAll,
    forNumbers,
    forNumbersInReg,
    returnTyped
  }
}
