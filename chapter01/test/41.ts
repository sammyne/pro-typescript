import { expect } from "chai"

describe("Listing 1-41. Array destructuring", () => {
  it("", () => {
    const triangles = [1, 3, 6, 10, 15, 21]
    // Destructuring
    const [first, second] = triangles

    // 1
    //console.log(first)
    expect(first).to.equal(1)

    // 3
    //console.log(second)
    expect(second).to.equal(3)
  })
})
