// sources
//import "../src/63"
//import "../src/66"
//import "../src/71"
//import "../src/73"
//import "../src/74"
//import "../src/76"
//import "../src/77"
//import "../src/78"
//import "../src/79"
//import "../src/80"

// testing
import "./12"
import "./59"

import { assert, expect } from "chai"

describe('Listing 1-04. Name reuse with let', () => {
  it('should scope name correctly', () => {
    let firstName = 'Chris';
    {
      let firstName = 'Tudor';

      //console.log('Name 1: ' + firstName);
      expect(firstName).to.equal("Tudor")
    }

    //console.log('Name 2: ' + firstName);
    expect(firstName).to.equal("Chris")
  });
});

describe('Listing 1-05. Name reuse with var', () => {
  it('should hoist the name', () => {
    var firstName = 'Chris';
    {
      var firstName = 'Tudor';

      //console.log('Name 1: ' + firstName);
      expect(firstName).to.equal("Tudor")
    }

    //console.log('Name 2: ' + firstName);
    expect(firstName).to.equal("Tudor")
  });
});

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

describe("Listing 1-82. Using the instanceof operator", () => {
  it("check the inheritance correctly", async () => {
    const { Display, Television, HiFi } = await import("../src/82")

    const display = new Display()
    const television = new Television()
    const hiFi = new HiFi()

    assert.isOk(display instanceof Display)
    assert.isOk(television instanceof Display)
    assert.isNotOk(hiFi instanceof Display)
  })
})

describe("Listing 1-83. The in property", () => {
  it("check property ownership unreliably by in", async () => {
    const { Display, Television, HiFi } = await import("../src/82")

    const display = new Display()
    const television = new Television()
    const hiFi = new HiFi()

    assert.isOk("name" in display)
    assert.isOk("name" in television)
    assert.isNotOk("name" in hiFi)
  })
})

describe("Listing 1-84. Uninitialized property", () => {
  it("unables to check the uninitialized property", () => {
    class Display {
      name!: string
    }
    const display = new Display()

    // false
    assert.isNotOk("name" in display)
  })
})

describe("Listing 1-85. Obtaining runtime types", () => {
  it("", async () => {
    const { Television, HiFi } = await import("../src/82")

    const tv = new Television()
    const radio = new HiFi()

    // Television
    const tvType = tv.constructor.name
    expect(tvType).to.equal("Television")

    // HiFi
    const radioType = radio.constructor.name
    expect(radioType).to.equal("HiFi")
  })
})

describe("Listing 1-86. Generic functions", () => {
  it("reverse string correctly", async () => {
    const { reverse } = await import("../src/86")

    const letters = ["a", "b", "c", "d"]
    const reversedLetters = reverse<string>(letters)
    expect(reversedLetters).to.deep.equal(["d", "c", "b", "a"])
  })

  it("reverse numbers correctly", async () => {
    const { reverse } = await import("../src/86")

    const numbers = [1, 2, 3, 4]
    const reversedNumbers = reverse<number>(numbers)
    expect(reversedNumbers).to.deep.equal([4, 3, 2, 1])
  })
})
