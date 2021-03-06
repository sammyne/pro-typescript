import { expect } from "chai"

describe("Listing 1-51. Array spreading", () => {
  it("", () => {
    const squares = [1, 4, 9, 16, 25]
    const powers = [2, 4, 8, 16, 32]
    // Array spreading
    const squaresAndPowers = [...squares, ...powers]

    // [1, 4, 9, 16, 25, 2, 4, 8, 16, 32]
    //console.log(squaresAndPowers)
    expect(squaresAndPowers).to.deep.equal([1, 4, 9, 16, 25, 2, 4, 8, 16, 32])
  })
})
