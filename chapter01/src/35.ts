// Listing 1-35. Shorthand Boolean test

namespace Listing35 {

  let myProperty

  if (myProperty) {
    // Reaching this location means that...
    // myProperty is not null
    // myProperty is not undefined
    // myProperty is not boolean false
    // myProperty is not an empty string
    // myProperty is not the number 0
    // myProperty is not NaN
  }

}