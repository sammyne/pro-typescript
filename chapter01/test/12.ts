import { DiscFlags } from "../src/12"

import { assert } from "chai"

describe("Listing 1-12. Flags", function() {
  it("should checking the personality flags correctly", function() {
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
