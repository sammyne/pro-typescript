import { expect } from "chai"

describe("Listing 1-52. Object spreading", () => {
  it("", () => {
    const emergencyService = {
      police: "Chase",
      fire: "Marshall",
    }
    const utilityService = {
      recycling: "Rocky",
      construction: "Rubble",
    }

    // Object spreading
    const patrol = { ...emergencyService, ...utilityService }

    const expected = {
      police: "Chase",
      fire: "Marshall",
      recycling: "Rocky",
      construction: "Rubble",
    }

    //console.log(patrol)
    expect(patrol).to.deep.equal(expected)
  })
})
