import { expect } from "chai"

describe("Listing 1-49. Default values", () => {
  it("", () => {
    const triangles = [1, 3, 6]

    // Destructuring past available values
    const [, , third = -1, fourth = -1] = triangles

    expect(third).to.equal(6)

    // undefined
    //console.log(fourth)
    expect(fourth).to.equal(-1)
  })
})
