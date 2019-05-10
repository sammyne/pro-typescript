import {
  Handler,
  RandomHandler,
  ReversedHandler,
  HandlerFactory,
} from "../src/59"

import { expect } from "chai"

describe("Listing 1-59. Specialized overload signatures", () => {
  let factory: HandlerFactory

  beforeEach(() => {
    factory = new HandlerFactory()
  })

  it("should be a random handler", () => {
    const hd = factory.getHandler("Random")

    expect(hd).to.be.an.instanceOf(Handler)
    expect(hd).to.be.an.instanceOf(RandomHandler)
    expect(hd).to.not.be.an.instanceOf(ReversedHandler)
  })

  it("should be a reversed handler", () => {
    const hd = factory.getHandler("Reversed")

    expect(hd).to.be.an.instanceOf(Handler)
    expect(hd).to.not.be.an.instanceOf(RandomHandler)
    expect(hd).to.be.an.instanceOf(ReversedHandler)
  })

  it("should be a generic handler", () => {
    const hd = factory.getHandler("HelloWorld")

    expect(hd).to.be.an.instanceOf(Handler)
    expect(hd).to.not.be.an.instanceOf(RandomHandler)
    expect(hd).to.not.be.an.instanceOf(ReversedHandler)
  })
})
