describe('the Registration Number function', function(){

  it('should return the registration number of Cape Town(CA) which startsWith with "CA"', function(){
    var registrationss = RegistrationNums(["CA 123", "CA 1234"])

    registrationss.inputReg('CA 123');
    registrationss.inputReg('CA 1234')
    console.log();
    assert.deepEqual(["CA 123", "CA 1234"], registrationss.forRegMap())
  });

  it('should return the registration numbers of George(CAW) that is "CAW 120978" & "CAW 890876" & "CAW 277384"', function(){
    var registrationss = RegistrationNums(["CAW 120978", "CAW 890876", "CAW 277384"])

    registrationss.inputReg("CAW 120978")
    registrationss.inputReg("CAW 890876")
    registrationss.inputReg('CAW 277384')
    assert.deepEqual(["CAW 120978", "CAW 890876", "CAW 277384"], registrationss.forRegMap())
  })

  it('should return the registration numbers of Paarl(CJ) that is "CJ 234090" & "CJ 123000"', function(){
    var registrationss = RegistrationNums(["CJ 234090", "CJ 123000"])

    registrationss.inputReg('CJ 234090')
    registrationss.inputReg('CJ 123000')
    assert.deepEqual(["CJ 234090", "CJ 123000"], registrationss.forRegMap())
  })
  it('should return the registration numbers of Strand(CEY) that is "CEY 876890" & "CEY 90834"', function(){
    var registrationss = RegistrationNums(["CEY 876890", "CEY 90834"])

    registrationss.inputReg('CEY 876890')
    registrationss.inputReg('CEY 90834')
    assert.deepEqual(["CEY 876890", "CEY 90834"], registrationss.forRegMap())
  })
})

describe("the filtering function", function(){

  it('should return CA registration from many', function(){
    var registrationss = RegistrationNums(["CJ 234090", "CEY 90834", "CA 230940", "CA 940304" ])

    registrationss.inputReg("CJ 234090");
    registrationss.inputReg("CEY 90834")
    registrationss.inputReg("CA 230940")
    registrationss.inputReg("CA 940304")
    assert.equal(["CA 230940","CA 940304"], registrationss.forFiltering())

  })
})
