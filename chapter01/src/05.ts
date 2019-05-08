// Listing 1-5. Name reuse with var

// wrap in a IIFS to avoid naming conflict

;(() => {
  var firstName = "Chris"

  {
    var firstName = "Tudor"

    console.log("Name 1: " + firstName)
  }

  console.log("Name 2: " + firstName)

  // Output:
  // Name 1: Tudor
  // Name 2: Tudor
})()
