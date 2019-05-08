import assert from "assert"

describe("Listing 1-31. Increment and decrement of enumerations", () => {
  it("", () => {
    enum Size {
      S,
      M,
      L,
      XL,
    }

    let size = Size.S
    ++size
    //console.log(Size[size]) // M
    assert.deepStrictEqual(Size[size], "M")

    size = Size.XL
    --size
    //console.log(Size[size]) // L
    assert.deepStrictEqual(Size[size], "L")

    size = Size.XL
    ++size
    //console.log(Size[size]) // undefined
    assert.deepStrictEqual(Size[size], undefined)
  })
})
