import assert from "assert"

describe("Listing 1-42. Array destructuring with a rest parameter", () => {
  it("", () => {
    const triangles = [1, 3, 6, 10, 15, 21]

    // Destructuring
    const [first, second, ...remaining] = triangles

    // 1
    //console.log(first)
    assert.deepStrictEqual(first, 1)

    // 3
    //console.log(second)
    assert.deepStrictEqual(second, 3)

    assert.deepStrictEqual(remaining, [6, 10, 15, 21])
  })
})
