import { expect } from "chai"

describe("Listing 1-42. Array destructuring with a rest parameter", () => {
  it("", () => {
    const triangles = [1, 3, 6, 10, 15, 21]

    // Destructuring
    const [first, second, ...remaining] = triangles

    // 1
    //console.log(first)
    expect(first).to.equal(1)

    // 3
    //console.log(second)
    expect(second).to.equal(3)

    expect(remaining).to.deep.equal([6, 10, 15, 21])
  })
})
