import { FizzBuzz } from "../src/FizzBuzz"

import { expect } from "chai"

describe("A FizzBuzz generator", () => {
  it("should return the number 1 when 1 is played", () => {
    const fizzBuzz = new FizzBuzz()
    const result = fizzBuzz.generate(1)

    expect(result).to.equal(1)
  })
})
