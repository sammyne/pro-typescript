import { FizzBuzz } from "../src/FizzBuzz"

import { expect } from "chai"

describe("A FizzBuzz generator", () => {
  it("should return the number 1 when 1 is played", () => {
    const fizzBuzz = new FizzBuzz()
    const result = fizzBuzz.generate(1)

    expect(result).to.equal(1)
  })

  it("should return the number 2 when 2 is played", () => {
    const fizzBuzz = new FizzBuzz()
    const result = fizzBuzz.generate(2)

    expect(result).to.equal(2)
  })
})
