import { CephalopodDictionary } from "../src/21"

import assert from "assert"

describe("Listing 1-21. Indexed types", function() {
  it("", function() {
    let dictionary: CephalopodDictionary = {}

    dictionary["octopus vulgaris"] = { hasInk: true, arms: 8, tentacles: 0 }
    dictionary["loligo vulgaris"] = { hasInk: true, arms: 8, tentacles: 2 }

    // Error. Not assignable to type 'Cephalopod'
    //dictionary[0] = { hasInk: true }

    const octopus = dictionary["octopus vulgaris"]

    // 0 (The common octopus has no tentacles)
    assert.deepStrictEqual(octopus.tentacles, 0)

    // Remove item
    delete dictionary["octopus vulgaris"]
    assert.deepStrictEqual(dictionary["octopus vulgaris"], undefined)
  })
})
