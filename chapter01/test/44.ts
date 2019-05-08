import assert from "assert"

describe("Listing 1-44. Variable swapping", () => {
  it("", () => {
    let a = 3
    let b = 5

      // Swapping
    ;[a, b] = [b, a]

    assert.deepStrictEqual(a, 5)
    assert.deepStrictEqual(b, 3)
  })
})
