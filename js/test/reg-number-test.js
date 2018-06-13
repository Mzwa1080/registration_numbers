describe('the Registration Number function', function(){

  it('should return the registration number of Cape Town(CA) which startsWith with "CA"', function(){
    var registrationss = RegistrationNums()

    registrationss.inputReg('CA 123');
    registrationss.inputReg('CA 1234')
  //console.log(registrationss.inputReg({"CA 123":0, "CA 1234":0}));
    assert.deepEqual({"CA 123":0, "CA 1234":0}, registrationss.forRegMap( "CA "))
  });

  it('should return the registration numbers of George(CAW) that is "CAW 120978" & "CAW 890876" & "CAW 277384"', function(){
    var registrationss = RegistrationNums({"CAW 120978":0, "CAW 890876":0, "CAW 277384":0})

    registrationss.inputReg("CAW 120978")
    registrationss.inputReg("CAW 890876")
    registrationss.inputReg('CAW 277384')
    assert.deepEqual({"CAW 120978":0, "CAW 890876":0, "CAW 277384":0}, registrationss.forRegMap())
  })

  it('should return the registration numbers of Paarl(CJ) that is "CJ 234090" & "CJ 123000"', function(){
    var registrationss = RegistrationNums()

    registrationss.inputReg('CJ 234090')
    registrationss.inputReg('CJ 234090')
    registrationss.inputReg('CJ 123000')
    assert.deepEqual({"CJ 234090":0, "CJ 123000":0}, registrationss.forRegMap())
  })

  it('should return the registration numbers of Strand(CEY) that is "CEY 876890" & "CEY 90834"', function(){
    var registrationss = RegistrationNums({"CEY 876890":0, "CEY 90834":0})

    registrationss.inputReg('CEY 876890')
    registrationss.inputReg('CEY 90834')
    assert.deepEqual({"CEY 876890":0, "CEY 90834":0}, registrationss.forRegMap())
  })



    it('should return Cape Town(CA) registration only from other towns\' registration numbers', function(){
      var registrationss = RegistrationNums()

      registrationss.inputReg("CJ 234090");
      registrationss.inputReg("CEY 90834")
      registrationss.inputReg("CAW 12345")
      registrationss.inputReg("CA 230940")
      registrationss.inputReg("CA 940304")
      // console.log(registrationss.forFiltering(["CA 230940","CA 940304"]))
      // console.log(registrationss.forRegMap(["CA 230940","CA 940304"]));
      assert.deepEqual(["CA 230940","CA 940304"], registrationss.forFiltering("CA "))
    })

    it('should return George(CAW) registration only from many other towns\' registration numbers', function(){
      var registrationss = RegistrationNums()

      registrationss.inputReg("CAW 12345")
      registrationss.inputReg("CAW 089711")
      registrationss.inputReg("CA 123876")
      assert.deepEqual(["CAW 12345","CAW 089711"], registrationss.forFiltering("CAW"))
    })

    it('should return Strand(CEY) registration only from many other towns\' registration numbers', function(){
      var registrationss = RegistrationNums(["CEY 12345","CAW 089711","CL 123876"])

      registrationss.inputReg("CEY 12345")
      registrationss.inputReg("CAW 089711")
      registrationss.inputReg("CL 123876")
      assert.deepEqual(["CEY 12345"], registrationss.forFiltering("CEY"))
    })

    it('should return Paarl(CJ) registration only from many other towns\' registration numbers', function(){
      var registrationss = RegistrationNums()

      registrationss.inputReg("CJ 12345")
      registrationss.inputReg("CJ 232323")
      registrationss.inputReg("CJ 334433")
      registrationss.inputReg("CAW 089711")
      registrationss.inputReg("CL 123876")
      registrationss.inputReg("CEY 12345")
      assert.deepEqual(["CJ 12345","CJ 232323","CJ 334433"], registrationss.forFiltering("CJ"))
    })

    it('should return TRUE if an existing registration number is typed in', function(){
      var registrationss = RegistrationNums({"CA 12345":0, "CJ 232323":0,"CAW 334433":0,"CEY 089711":0,"CN 089711":0})

      registrationss.inputReg("CA 12345")
      registrationss.inputReg("CJ 232323")
      registrationss.inputReg("CAW 334433")
      registrationss.inputReg("CEY 089711")
      registrationss.inputReg("CN 089711")
      assert.deepEqual(registrationss.forRegMap(), {"CA 12345":0, "CJ 232323":0,"CAW 334433":0,"CEY 089711":0,"CN 089711":0}, true)
    })


    it('should return FALSE if an existing registration number is typed in', function(){
      var registrationss = RegistrationNums()

      registrationss.inputReg("CA 12345")
      registrationss.inputReg("CJ 232323")
      registrationss.inputReg("CAW 334433")
      registrationss.inputReg("CEY 089711")
      registrationss.inputReg("CN 089711")

      assert.equal(registrationss.forFiltering("CK 125689"),  false)
    })

    it('should return all registration numbers', function(){
      var registrationss = RegistrationNums()


      registrationss.inputReg("CA 12345")
      registrationss.inputReg("CJ 232323")
      registrationss.inputReg("CAW 334433")
      registrationss.inputReg("CEY 089711")
      registrationss.inputReg("CN 089711")

      assert.deepEqual({"CA 12345":0,"CJ 232323":0,"CAW 334433":0,"CEY 089711":0,"CN 089711":0}, registrationss.forRegMap())
    })
})
