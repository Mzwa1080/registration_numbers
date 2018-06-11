function RegistrationNums(storedRegs){
  var allRegs =storedRegs ||{};
  var regNums = '';
  //var regNum = '';

  // if (storedRegs) {
  //   for (var i = 0; i < storedRegs.length; i++){
  //     var check = storedRegs[i];
  //     allRegs[check] = 0;
  //   }
  // }

  function inputReg(regNumber){
        if(allRegs[regNumber] === undefined){
           // for(var i =0; i<regNumber.length; i++){
             if(regNumber.startsWith('CA') || regNumber.startsWith('CAW') || regNumber.startsWith('CEY') || regNumber.startsWith('CJ'))
              regNums = regNumber;
              allRegs[regNumber] = 0;
               //console.log(regNums);
              return true;
          }
          return false;
        // }

  }

  function forRegMap(){
    return allRegs;
  }

  function forRegNumber(){
    return regNums;
  }

  // function returnAll(){
  //   return allRegs;
  // }

  function forFiltering(selectedTown){
    var registrations = Object.keys(allRegs);
    if (selectedTown !== "All") {

      var newVar =  registrations.filter(current => current.startsWith(selectedTown));

        return newVar ;
    }
      return registrations;

  }

  return{
    inputReg,
    forRegNumber,
    forRegMap,
    // returnAll,
    forFiltering
  }
}
