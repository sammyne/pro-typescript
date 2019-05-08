import assert from "assert"

describe("Listing 1-47. Object destructuring with rest parameter", () => {
  it("", () => {
    const pets = { cat: "Pickle", dog: "Berkeley", hamster: "Hammy" }

    // Object destructuring
    const { dog, ...others } = pets

    // 'Berkeley'
    //console.log(dog)
    assert.deepStrictEqual(dog, "Berkeley")

    // Object { cat: 'Pickle', hamster: 'Hammy'}
    //console.log(others)
    assert.deepStrictEqual(others, { cat: "Pickle", hamster: "Hammy" })
  })
})
