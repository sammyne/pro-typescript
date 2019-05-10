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
import "./30"
import "./31"
import "./32"
import "./33"
import "./34"
import "./36"
import "./37"
import "./39"
import "./40"
import "./41"
import "./42"
import "./43"
import "./44"
import "./45"
import "./46"
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

describe('Listing 1-10. Enumerations', () => {
  it('should find name for VehicleType.Lorry', () => {
    enum VehicleType {
      PedalCycle,
      MotorCycle,
      Car,
      Van,
      Bus,
      Lorry
    }
    const type = VehicleType.Lorry;

    const typeName = VehicleType[type]; // 'Lorry'
    expect(typeName).to.equal("Lorry")
  });
});

describe('Listing 1-11. Enumeration split across multiple blocks', () => {
  it('should merge enummerations', () => {
    enum BoxSize {
      Small,
      Medium,
    }

    //...

    enum BoxSize {
      Large = 2,
      XLarge,
      XXLarge,
    }

    const size = BoxSize.Large
    //console.log(size)
    expect(size).to.equal(2)
  });
});

describe("Listing 1-12. Flags", function () {
  it("should checking the personality flags correctly", function () {
    enum DiscFlags {
      None = 0,
      Drive = 1,
      Influence = 2,
      Steadiness = 4,
      Conscientiousness = 8
    }

    // Using flags
    const personality = DiscFlags.Drive | DiscFlags.Conscientiousness

    // Testing flags

    const hasD = (personality & DiscFlags.Drive) == DiscFlags.Drive
    assert.isOk(hasD)

    // false
    const hasI = (personality & DiscFlags.Influence) == DiscFlags.Influence
    assert.isNotOk(hasI)

    // false
    const hasS = (personality & DiscFlags.Steadiness) == DiscFlags.Steadiness
    assert.isNotOk(hasS)

    // true
    const hasC =
      (personality & DiscFlags.Conscientiousness) == DiscFlags.Conscientiousness
    assert.isOk(hasC)
  })
})

describe('Listing 1-13. Constant enumeration', () => {
  it('should get Lorry as 5', () => {
    const enum VehicleType {
      PedalCycle,
      MotorCycle,
      Car,
      Van,
      Bus,
      Lorry,
    }

    const type = VehicleType.Lorry
    expect(type).to.equal(5)
  });
});

describe("Listing 1-19. Typed arrays", () => {
  it("should be 'Peter the Great'", async () => {
    interface Monument {
      name: string
      heightInMeters: number
    }
    // The array is typed using the Monument interface
    const monuments: Monument[] = []

    // Each item added to the array is checked for type compatibility
    monuments.push({
      name: "Statue of Liberty",
      heightInMeters: 46,
    })
    monuments.push({
      name: "Peter the Great",
      heightInMeters: 96,
    })
    monuments.push({
      name: "Angel of the North",
      heightInMeters: 20,
    })

    function compareMonumentHeights(a: Monument, b: Monument) {
      if (a.heightInMeters > b.heightInMeters) {
        return -1
      }
      if (a.heightInMeters < b.heightInMeters) {
        return 1
      }
      return 0
    }

    // The array.sort method expects a comparer that accepts two Monuments
    const monumentsOrderedByHeight = monuments.sort(compareMonumentHeights)

    // Get the first element from the array, which is the tallest
    const tallestMonument = monumentsOrderedByHeight[0]

    // Peter the Great
    assert.deepStrictEqual(tallestMonument.name, "Peter the Great")
  })
})

describe("Listing 1-21. Indexed types", function () {
  interface Cephalopod {
    hasInk: boolean
    arms: number
    tentacles: number
  }

  interface CephalopodDictionary {
    [index: string]: Cephalopod
  }

  it("should index item correctly", function () {
    let dictionary: CephalopodDictionary = {}

    dictionary["octopus vulgaris"] = { hasInk: true, arms: 8, tentacles: 0 }
    dictionary["loligo vulgaris"] = { hasInk: true, arms: 8, tentacles: 2 }

    // Error. Not assignable to type 'Cephalopod'
    //dictionary[0] = { hasInk: true }

    const octopus = dictionary["octopus vulgaris"]

    // 0 (The common octopus has no tentacles)
    expect(octopus.tentacles).to.equal(0)

    // Remove item
    delete dictionary["octopus vulgaris"]
    //assert.deepStrictEqual(dictionary["octopus vulgaris"], undefined)
    expect(dictionary["octopus vulgaris"]).to.equal(undefined)
  })
})

describe("Listing 1-26. Forced type assertions", function () {
  it("retain the value due to failed conversion", function () {
    const name: string = "Avenue Road"

    // Error: Type 'string' cannot be converted to type 'number'
    //const bedroomCount: number = <number>name

    // Works
    const workingBedroomCount: number = <number>(<any>name)

    //console.log(workingBedroomCount)
    expect(workingBedroomCount).to.equal("Avenue Road")
  })
})

describe("Listing 1-27. Type Guard", function () {
  it("should guard against string and number safely", async () => {
    const { typeGuardExample } = await import("../src/27")

    assert.deepStrictEqual(typeGuardExample("hello world"), 11)
    assert.deepStrictEqual(typeGuardExample(12.34), "12")
  })
})

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
