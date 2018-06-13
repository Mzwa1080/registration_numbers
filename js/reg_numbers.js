function RegistrationNums(stored) {
  var allRegs = stored || {};
  var valid = ["CA", "CEY", "CAW", "CJ","CN"];
  var reg = '';
  // ca 1235
  function inputReg(regNumber) {
  if(allRegs[regNumber] !== ""){
    if(allRegs[regNumber] == undefined){
      let tag = regNumber.substring(0,3).trim();

      if (valid.includes(tag)) {
        //update reg and add to the maP
        allRegs[regNumber] = 0;
        return true;
      }
    }
    return false;

  }
}


  function forRegMap() {
    return allRegs;
  }

  function forIndividual(){
    return reg;
  }



  function forFiltering(selectedTown) {
    var registrations = Object.keys(allRegs);
    if (selectedTown !== "All") {
      return registrations.filter(current => current.startsWith(selectedTown));
    }
    return registrations;
  }

  return {
    inputReg,
    forIndividual,
    //forRegNumber,
    forRegMap,
    // returnAll,
    forFiltering
  }
}
