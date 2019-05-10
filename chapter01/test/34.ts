import { assert } from "chai"

describe("Listing 1-34. NOT operator", () => {
  it("asserts truthiness and falsiness correctly", () => {
    const truthyString = "Truthy string"
    let falseyString: string = ""

    // False, it checks the string but inverts the truth
    const invertedTest = !truthyString
    assert.isNotOk(invertedTest)

    // True, the string is not undefined or empty
    const truthyTest = !!truthyString
    assert.isOk(truthyTest)

    // False, the string is empty
    const falseyTest = !!falseyString
    assert.isNotOk(falseyTest)
  })
})
