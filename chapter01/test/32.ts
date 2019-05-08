import assert from "assert"

describe("Listing 1-32. Binary plus operator", () => {
  it("", () => {
    // 6: number
    const num = 5 + 1
    // '51': string
    const str = 5 + "1"

    assert.deepStrictEqual(num, 6)
    assert.deepStrictEqual(str, "51")
  })
})
