import assert from "assert"

describe("Listing 1-49. Default values", () => {
  it("", () => {
    const triangles = [1, 3, 6]

    // Destructuring past available values
    const [, , third = -1, fourth = -1] = triangles

    assert.deepStrictEqual(third, 6)
    // undefined
    //console.log(fourth)
    assert.deepStrictEqual(fourth, -1)
  })
})
