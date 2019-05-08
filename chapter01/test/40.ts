import assert from "assert"

describe("Listing 1-40. Conditional operator", () => {
  it("", () => {
    const isValid = true

    const message = isValid ? "Okay" : "Failed"

    assert.deepStrictEqual(message, "Okay")
  })
})
