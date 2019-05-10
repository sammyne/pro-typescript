import { expect } from "chai"

describe("Listing 1-30. Increment and decrement", () => {
  it("gets counter as 10", () => {
    let counter = 0

    do {
      ++counter
    } while (counter < 10)

    // 10
    //alert(counter)
    expect(counter).to.equal(10)
  })
})
