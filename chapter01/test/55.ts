import { expect } from "chai"

describe("Listing 1-55. Optional paramters", () => {
  it("", () => {
    function getAverage(a: number, b: number, c?: number): string {
      let total = a
      let count = 1

      total += b
      count++
      if (typeof c !== "undefined") {
        total += c
        count++
      }
      const average = total / count
      return "The average is " + average
    }

    // 'The average is 5'
    const result = getAverage(4, 6)
    expect(result).to.equal("The average is 5")
  })
})
