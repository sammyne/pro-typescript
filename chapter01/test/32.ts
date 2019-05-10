import { expect } from "chai"

describe("Listing 1-32. Binary plus operator", () => {
  it("should get number out of num+num", () => {
    // 6: number
    const num = 5 + 1

    expect(num).to.deep.equal(6)
  })

  it("should get string otherwise", () => {
    // '51': string
    const str = 5 + "1"

    expect(str).to.deep.equal("51")
  })
})
