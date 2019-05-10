
import { expect } from "chai"

describe("Listing 1-31. Increment and decrement of enumerations", () => {
  it("should index enum correctly", () => {
    enum Size {
      S,
      M,
      L,
      XL,
    }

    let size = Size.S
    ++size
    //console.log(Size[size]) // M
    expect(Size[size]).to.equal("M")

    size = Size.XL
    --size
    //console.log(Size[size]) // L
    expect(Size[size]).to.equal("L")

    size = Size.XL
    ++size
    //console.log(Size[size]) // undefined
    //assert.deepStrictEqual(Size[size], undefined)
    expect(Size[size]).to.equal(undefined)
  })
})
