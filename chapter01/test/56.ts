import assert from "assert"

describe("Listing 1-56. Default parameters", () => {
  it("", () => {
    function concatenate(
      items: string[],
      separator = ",",
      beginAt = 0,
      endAt = items.length
    ) {
      let result = ""
      for (let i = beginAt; i < endAt; i++) {
        result += items[i]
        if (i < endAt - 1) {
          result += separator
        }
      }
      return result
    }

    const items = ["A", "B", "C"]
    // 'A,B,C'
    const result = concatenate(items)
    assert.deepStrictEqual(result, "A,B,C")

    // 'B-C'
    const partialResult = concatenate(items, "-", 1)
    assert.deepStrictEqual(partialResult, "B-C")
  })
})
