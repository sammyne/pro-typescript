// Listing 1-29. Discriminated union

interface Cube {
  kind: "cube" // Discriminant
  size: number
}

interface Cuboid {
  kind: "cuboid" // Discriminant
  width: number
  depth: number
  height: number
}

// Union
type Prism = Cube | Cuboid

function volume(prism: Prism): number {
  // Type Guard
  switch (prism.kind) {
    case "cube":
      return prism.size * prism.size * prism.size
    case "cuboid":
      return prism.width * prism.depth * prism.height
    default:
      assertNever(prism)
      break
  }

  return -1 // to address ts2366 warning
}

function assertNever(arg: never): never {
  throw new Error("Possible new tagged type: " + arg)
}
