import assert from "assert"

describe("Listing 1-39. The If-statement", () => {
  it("", () => {
    const isValid = true
    let message: string

    // Long-hand equivalent
    if (isValid) {
      message = "Okay"
    } else {
      message = "Failed"
    }

    assert.deepStrictEqual(message, "Okay")
  })
})
