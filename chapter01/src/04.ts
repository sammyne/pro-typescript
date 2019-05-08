// Listing 1-4. Name reuse with let

let firstName = "Chris"

{
  let firstName = "Tudor"

  console.log("Name 1: " + firstName)
}

console.log("Name 2: " + firstName)

// Output:
// Name 1: Tudor
// Name 2: Chris
