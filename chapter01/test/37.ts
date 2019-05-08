import assert from "assert"

describe("Listing 1-37. OR operator", () => {
  it("", () => {
    // Empty strings are falsey
    let errorMessages = ""

    // result is 'Saved OK'
    let result = errorMessages || "Saved OK"
    assert.deepStrictEqual(result, "Saved OK")

    // Filled strings are truthy
    errorMessages = "Error Detected"

    // result is 'Error Detected'
    result = errorMessages || "Saved OK"
    assert.deepStrictEqual(result, errorMessages)

    let undefinedLogger
    // if the logger isn't initialized, substitute it for the result of the right-hand expression
    const logger = undefinedLogger || {
      log: function(msg: string) {
        alert(msg)
      },
      tee: (msg: string): string => {
        return msg
      },
    }

    // alerts 'Message'
    //logger.log("Message")
    assert.deepStrictEqual(logger.tee("Message"), "Message")
  })
})
