// Listing 1-20. Tuple types

let poem: [number, boolean, string]

// OK
poem = [1, true, "love"]

// Error: 'string' is not assignable to 'number'
//poem = ["my", true, "love"]
