import { FizzBuzz } from "../src/FizzBuzz"

import { expect } from "chai"

describe("A FizzBuzz generator", () => {
  const FIZZ = "Fizz"
  const BUZZ = "Buzz"
  const FIZZ_BUZZ = "FizzBuzz"

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

  it('should return "Fizz" when 6 is played', () => {
    const result = fizzBuzz.generate(6)
    expect(result).to.be(FIZZ)
  })

  it('should return "Buzz" when 5 is played', () => {
    const result = fizzBuzz.generate(5)
    expect(result).to.be(BUZZ)
  })

  it('should return "Buzz" when 10 is played', () => {
    const result = fizzBuzz.generate(10)
    expect(result).to.be(BUZZ)
  })

  it('should return "FizzBuzz" when 15 is played', () => {
    const result = fizzBuzz.generate(15)
    expect(result).to.be(FIZZ_BUZZ)
  })

  it('should return "FizzBuzz" when 30 is played', () => {
    const result = fizzBuzz.generate(30)
    expect(result).to.be(FIZZ_BUZZ)
  })
})
