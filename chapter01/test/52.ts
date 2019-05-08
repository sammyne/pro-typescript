import assert from "assert"

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

    const expect = {
      police: "Chase",
      fire: "Marshall",
      recycling: "Rocky",
      construction: "Rubble",
    }
    //console.log(patrol)
    assert.deepStrictEqual(patrol, expect)
  })
})
