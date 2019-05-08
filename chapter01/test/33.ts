import assert from "assert"

describe("Listing 1-33. Unary plus and minus operators", () => {
  it("", () => {
    const str: string = "5"

    // 5: number
    const num = +str

    // -5: number
    const negative = -str

    assert.deepStrictEqual(num, 5)
    assert.deepStrictEqual(negative, -5)
  })
})
