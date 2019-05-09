import { DiscFlags } from "./12"

import assert from "assert"

describe("Listing 1-12. Flags", function() {
  it("should checking the personality flags correctly", function() {
    // Using flags
    const personality = DiscFlags.Drive | DiscFlags.Conscientiousness

    // Testing flags

    const hasD = (personality & DiscFlags.Drive) == DiscFlags.Drive
    assert.ok(hasD)

    // false
    const hasI = (personality & DiscFlags.Influence) == DiscFlags.Influence
    assert.ok(!hasI)

    // false
    const hasS = (personality & DiscFlags.Steadiness) == DiscFlags.Steadiness
    assert.ok(!hasS)

    // true
    const hasC =
      (personality & DiscFlags.Conscientiousness) == DiscFlags.Conscientiousness
    assert.ok(hasC)
  })
})
