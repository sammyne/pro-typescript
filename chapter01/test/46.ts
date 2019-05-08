import assert from "assert"

describe("Listing 1-46. Auto-unpacking", () => {
  it("", () => {
    const highSchool = { school: "Central High", team: "Centaurs" }

    // Auto-unpacking
    const { school, team } = highSchool

    // 'Central High'
    //console.log(s)
    assert.deepStrictEqual(school, "Central High")

    // 'Centaurs'
    //console.log(t)
    assert.deepStrictEqual(team, "Centaurs")
  })
})
