import assert from "assert"

describe("Listing 1-45. Object destructuring", () => {
  it("", () => {
    const highSchool = { school: "Central High", team: "Centaurs" }

    // Object destructuring
    const { school: s, team: t } = highSchool

    // 'Central High'
    //console.log(s)
    assert.deepStrictEqual(s, "Central High")

    // 'Centaurs'
    //console.log(t)
    assert.deepStrictEqual(t, "Centaurs")
  })
})
