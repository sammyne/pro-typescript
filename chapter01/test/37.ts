import { expect } from "chai"

describe("Listing 1-37. OR operator", () => {
  it("should assure the short-circuit of OR", () => {
    // Empty strings are falsey
    let errorMessages = ""

    // result is 'Saved OK'
    let result = errorMessages || "Saved OK"
    expect(result).to.equal("Saved OK")

    // Filled strings are truthy
    errorMessages = "Error Detected"

    // result is 'Error Detected'
    result = errorMessages || "Saved OK"
    expect(result).to.equal(errorMessages)

    let undefinedLogger
    // if the logger isn't initialized, substitute it for the result of the right-hand expression
    const logger = undefinedLogger || {
      log: function (msg: string) {
        alert(msg)
      },
      tee: (msg: string): string => {
        return msg
      },
    }

    // alerts 'Message'
    //logger.log("Message")
    expect(logger.tee("Message")).to.equal("Message")
  })
})
