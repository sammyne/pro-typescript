import { expect } from "chai"

describe("Listing 1-44. Variable swapping", () => {
  it("", () => {
    let a = 3
    let b = 5

      // Swapping
      ;[a, b] = [b, a]

    expect(a).to.equal(5)
    expect(b).to.equal(3)
  })
})
