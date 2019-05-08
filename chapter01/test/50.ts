import assert from "assert"

describe("Listing 1-50. Tuples and Destructuring", () => {
  it("", () => {
    // Returning a tuple
    function getThreeLandmarks(): [string, string, string] {
      return ["Golden Gate Bridge", "Palace of Westminster", "Colosseum "]
    }

    // Destructuring the tuple into named variables
    const [sanFrancisco, london, rome] = getThreeLandmarks()

    assert.deepStrictEqual(
      [sanFrancisco, london, rome],
      ["Golden Gate Bridge", "Palace of Westminster", "Colosseum "]
    )
  })
})
