import { Monument } from "../src/19"

import assert from "assert"

describe("Listing 1-19. Typed arrays", function() {
  it("should be 'Peter the Great'", function() {
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