import assert from "assert"

describe("Listing 1-34. NOT operator", () => {
  it("", () => {
    const truthyString = "Truthy string"
    let falseyString: string = ""

    // False, it checks the string but inverts the truth
    const invertedTest = !truthyString
    assert.ok(!invertedTest)

    // True, the string is not undefined or empty
    const truthyTest = !!truthyString
    assert.ok(truthyTest)

    // False, the string is empty
    const falseyTest = !!falseyString
    assert.ok(!falseyTest)
  })
})
