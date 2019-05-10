
import { expect } from "chai"

describe("Listing 1-36. AND operator", () => {
  it("should get console logging", () => {
    // longhand
    if (console) {
      console.log("Console Available")
    }

    // shorthand
    console && console.log("Console Available")

  })

  it("should get player2 as 'Dan'", () => {
    const player1 = "Martin"

    // player2 is only defined if player1 is defined
    const player2 = player1 && "Dan"

    // 'Dan'
    expect(player2).to.equal("Dan")
  });
})
