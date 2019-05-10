import { FizzBuzz } from "../src/FizzBuzz"

import { expect } from "chai"

describe("A FizzBuzz generator", () => {
  let fizzBuzz: FizzBuzz

  beforeEach(() => {
    fizzBuzz = new FizzBuzz()
  })

  it("should return the number 1 when 1 is played", () => {
    const result = fizzBuzz.generate(1)

    expect(result).to.equal(1)
  })

  it("should return the number 2 when 2 is played", () => {
    const result = fizzBuzz.generate(2)

    expect(result).to.equal(2)
  })

  it('should return "Fizz" when 3 is played', () => {
    const result = fizzBuzz.generate(3)

    expect(result).to.equal("Fizz")
  })
})
