import assert from "assert"

describe("Listing 1-41. Array destructuring", () => {
  it("", () => {
    const triangles = [1, 3, 6, 10, 15, 21]
    // Destructuring
    const [first, second] = triangles

    // 1
    //console.log(first)
    assert.deepStrictEqual(first, 1)

    // 3
    //console.log(second)
    assert.deepStrictEqual(second, 3)
  })
})
