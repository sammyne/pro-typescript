import assert from "assert"

describe("Listing 1-58. Overloads", () => {
  function getAverage(a: string, b: string, c: string): string
  function getAverage(a: number, b: number, c: number): string
  // implementation signature
  function getAverage(a: any, b: any, c: any): string {
    const total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10)
    const average = total / 3
    return "The average is " + average
  }

  it("", () => {
    // The average is 5
    const result = getAverage(4, 3, 8)
    assert.deepStrictEqual(result, "The average is 5")
  })
})
