// sources
//import "../src/63"
import "../src/66"

// testing
import "./12"
import "./59"

import { expect } from "chai"

describe("Listing 1-64. Currying with arrow functions", () => {
  let multiply: (a: number) => (b: number) => number

  before(async () => {
    const currying = await import("../src/64")
    multiply = currying.multiply
  })

  it("Pass both arguments in sequence", async () => {
    const numA = multiply(5)(6)
    expect(numA).to.equal(30)
  })

  it("Pass just the first argument and re-use", () => {
    const orderOfMagnitude = multiply(10)

    // 10
    const deca = orderOfMagnitude(1)
    expect(deca).to.equal(10)

    // 100
    const hecta = orderOfMagnitude(deca)
    expect(hecta).to.equal(100)

    // 1,000
    const kilo = orderOfMagnitude(hecta)
    expect(kilo).to.equal(1000)
  })
})

describe("Listing 1-65. Currying with function overloads", () => {
  let multiply: any

  before(async () => {
    const currying = await import("../src/65")
    multiply = currying.multiply
  })

  it('Pass both arguments "normally"', () => {
    const numA = multiply(5)(6)
    expect(numA).to.equal(30)
  })

  it("Pass just the first argument and re-use", () => {
    const orderOfMagnitude = multiply(10)

    // 10
    const deca = orderOfMagnitude(1)
    expect(deca).to.equal(10)

    // 100
    const hecta = orderOfMagnitude(deca)
    expect(hecta).to.equal(100)

    // 1,000
    const kilo = orderOfMagnitude(hecta)
    expect(kilo).to.equal(1000)
  })
})
