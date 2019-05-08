// Listing 1-26. Forced type assertions

import assert from "assert"

describe("Listing 1-26. Forced type assertions", function() {
  it("", function() {
    const name: string = "Avenue Road"

    // Error: Type 'string' cannot be converted to type 'number'
    //const bedroomCount: number = <number>name

    // Works
    const workingBedroomCount: number = <number>(<any>name)

    //console.log(workingBedroomCount)
    assert.deepStrictEqual(workingBedroomCount, "Avenue Road")
  })
})
