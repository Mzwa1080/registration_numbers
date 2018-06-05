describe('the Registration Number function', function(){
  it('should return the registration number of Cape Town(CA) which startsWith with "CA"', function(){
    var registrationss = RegistrationNums()

    registrationss.forNumbers('CA', 'CapeTown')
    assert.equal('CapeTown', 'CapeTown', registrationss.returnTyped('CA', 'CapeTown'))
  })

  it('should return the registration number of George(CAW) which startsWith with "CAW"', function(){
    var registrationss = RegistrationNums()

    registrationss.forNumbers('CAW', 'George')
    assert.equal('George', 'George', registrationss.returnTyped('CAW', 'George'))
  })

  it('should return the registration number of Paarl(CJ) which startsWith with "CJ"', function(){
    var registrationss = RegistrationNums()

    registrationss.forNumbers('CJ', 'Paarl')
    assert.equal('Paarl', 'Paarl', registrationss.returnTyped('CJ', 'Paarl'))
  })
  it('should return the registration number of Strand(CEY) which startsWith with "CEY"', function(){
    var registrationss = RegistrationNums()

    registrationss.returnAll('CEY', 'Strand')
    assert.equal('Strand', 'Strand', registrationss.returnTyped('CEY', 'Strand'))
  })
})
