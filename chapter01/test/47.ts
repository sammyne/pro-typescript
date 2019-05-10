import { expect } from "chai"

describe("Listing 1-47. Object destructuring with rest parameter", () => {
  it("", () => {
    const pets = { cat: "Pickle", dog: "Berkeley", hamster: "Hammy" }

    // Object destructuring
    const { dog, ...others } = pets

    // 'Berkeley'
    //console.log(dog)
    expect(dog).to.equal("Berkeley")

    // Object { cat: 'Pickle', hamster: 'Hammy'}
    //console.log(others)
    expect(others).to.deep.equal({ cat: "Pickle", hamster: "Hammy" })
  })
})
