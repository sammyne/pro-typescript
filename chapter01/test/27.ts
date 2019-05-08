import { typeGuardExample } from "../src/27"

import assert from "assert"

describe("Listing 1-27. Type Guard", function() {
  it("", function() {
    assert.deepStrictEqual(typeGuardExample("hello world"), 11)
    assert.deepStrictEqual(typeGuardExample(12.34), "12")
  })
})
