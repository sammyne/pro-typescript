
import { expect } from "chai"

describe("Listing 1-40. Conditional operator", () => {
  it("", () => {
    const isValid = true

    const message = isValid ? "Okay" : "Failed"

    expect(message).to.equal("Okay")
  })
})
