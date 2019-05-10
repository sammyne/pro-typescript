import { expect } from "chai"

describe("Listing 1-45. Object destructuring", () => {
  it("", () => {
    const highSchool = { school: "Central High", team: "Centaurs" }

    // Object destructuring
    const { school: s, team: t } = highSchool

    // 'Central High'
    //console.log(s)
    expect(s).to.equal("Central High")

    // 'Centaurs'
    //console.log(t)
    expect(t).to.equal("Centaurs")
  })
})
