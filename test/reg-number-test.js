describe('the Registration Number function', function(){

  it('should return the registration number of Cape Town(CA) which startsWith with "CA"', function(){
    var registrationss = RegistrationNums({"CA 230940":0, "CA 849039":0, "CA 940304":0})

    registrationss.inputReg('CA')
    assert.deepEqual(registrationss.returnAll(), {'CA 230940':0, 'CA 849039':0, 'CA 940304':0})
  });

  it('should return the registration number of George(CAW) which startsWith with "CAW"', function(){
    var registrationss = RegistrationNums({"CAW 120978":0, "CAW 890876":0, "CAW 277384":0})

    registrationss.inputReg('CAW')
    assert.deepEqual(registrationss.returnAll(), {"CAW 120978":0, "CAW 890876":0, "CAW 277384":0})
  })

  it('should return the registration number of Paarl(CJ) which startsWith with "CJ"', function(){
    var registrationss = RegistrationNums({"CJ 234090":0, "CJ 123000":0, "CJ 102938":0})

    registrationss.inputReg('CJ')
    assert.deepEqual(registrationss.returnAll(), {"CJ 234090":0, "CJ 123000":0, "CJ 102938":0})
  })
  it('should return the registration number of Strand(CEY) which startsWith with "CEY"', function(){
    var registrationss = RegistrationNums({"CEY 876890":0, "CEY 90834":0})

    registrationss.inputReg('CEY')
    assert.deepEqual(registrationss.returnAll(), {"CEY 876890":0, "CEY 90834":0})
  })
})

describe("the filtering function", function(){

  it('should return CA registration from many', function(){
    // var registrationss = RegistrationNums({"CJ 234090":0, "CEY 90834":0, "CA 230940":0, "CA 940304":0 })
    //
    // registrationss.inputReg("CA")

  })
})
