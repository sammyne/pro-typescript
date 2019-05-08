// Listing 1-11. Enumeration split across multiple blocks

enum BoxSize {
  Small,
  Medium,
}

//...

enum BoxSize {
  Large = 2,
  XLarge,
  XXLarge,
}

const size = BoxSize.Large
console.log(size)
