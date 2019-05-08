import assert from "assert"

describe("Listing 1-53. Spread operator in function call", () => {
  it("", () => {
    function add(a: number, b: number, c: number) {
      return a + b + c
    }

    const hexagons = [1, 6, 15]

    // Spread operator in function call
    // @ts-ignore
    const result = add(...hexagons)

    // 22
    //console.log(result)
    assert.deepStrictEqual(result, 22)
  })
})
