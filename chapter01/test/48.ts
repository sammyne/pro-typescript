import { expect } from "chai"

describe("Listing 1-48. Undefined result", () => {
  it("", () => {
    const triangles = [1, 3, 6]

    // Destructuring past available values
    //const [first, second, third, fourth] = triangles
    const [, , , fourth] = triangles

    // undefined
    //console.log(fourth)
    expect(fourth).to.deep.equal(undefined)
  })
})
