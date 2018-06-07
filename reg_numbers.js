function RegistrationNums(storedRegs){
  var allRegs = storedRegs || {};
  var regNums = '';
  //var regNum = '';

  function inputReg(regNumber){
    if(regNumber !==''){
        regNums = regNumber;
        if(allRegs[regNumber] == undefined){
           for(var i =0; i<regNumber.length; i++){
             if(regNumber.startsWith('CA') || regNumber.startsWith('CAW') || regNumber.startsWith('CEY') || regNumber.startsWith('CJ'))
              allRegs[regNumber] == 0
          }
        }
        return true;
    }
    else {
      return false;
    }
  }



  // function forFilter(key){
  //     var carReg =  Object.keys(regNums);
  //
  //     if(key === "All"){
  //         return carReg;
  //     }
  //
  //     if(key == "filter"){
  //       var empty = carReg.clear();
  //         return empty;
  //     }
  //
  //
  //     var townFiltering = carReg.filter(function(Number,anyNumber){
  //       return Number.startsWith(key)
  //     })
  //
  //     // var townFiltering = carReg.filter(function(Num, anyNumber){
  //     //   return Num.startsWith(key)
  //     // )};
  //
  //     location.hash = key;
  //     return townFiltering;
  //
  // }
  function returnAll(){
    return allRegs;
  }

  // function forNumbersInReg(){
  //   return personReg;
  // }

  function returnTyped(){
    return Object.keys(regNums).length;
  }

  return{
    inputReg,
    returnAll,
    // forNumbersInReg,
    returnTyped,
    //forAdding
    // forFilter
  }
}
