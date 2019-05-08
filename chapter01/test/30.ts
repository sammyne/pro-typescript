import assert from "assert"

describe("Listing 1-30. Increment and decrement", () => {
  it("", () => {
    let counter = 0

    do {
      ++counter
    } while (counter < 10)

    // 10
    //alert(counter)
    assert.deepStrictEqual(counter, 10)
  })
})
