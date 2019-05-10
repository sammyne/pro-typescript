import { expect } from "chai"

describe("Listing 1-50. Tuples and Destructuring", () => {
  it("", () => {
    // Returning a tuple
    function getThreeLandmarks(): [string, string, string] {
      return ["Golden Gate Bridge", "Palace of Westminster", "Colosseum "]
    }

    // Destructuring the tuple into named variables
    const [sanFrancisco, london, rome] = getThreeLandmarks()

    expect([sanFrancisco, london, rome]).to.deep.equal(["Golden Gate Bridge", "Palace of Westminster", "Colosseum "]
    )
  })
})
