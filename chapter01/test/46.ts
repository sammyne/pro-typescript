
import { expect } from "chai"

describe("Listing 1-46. Auto-unpacking", () => {
  it("", () => {
    const highSchool = { school: "Central High", team: "Centaurs" }

    // Auto-unpacking
    const { school, team } = highSchool

    // 'Central High'
    //console.log(s)
    expect(school).to.equal("Central High")

    // 'Centaurs'
    //console.log(t)
    expect(team).to.equal("Centaurs")
  })
})