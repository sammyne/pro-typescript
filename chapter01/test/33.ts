import { expect } from "chai"

describe("Listing 1-33. Unary plus and minus operators", () => {
  it("should convert string into number", () => {
    const str: string = "5"

    // 5: number
    const num = +str

    // -5: number
    const negative = -str

    expect(num).to.deep.equal(5)
    expect(negative).to.deep.equal(-5)
  })
})
