// Listing 1-65. Currying with function overloads
function multiply(a: number): (b: number) => number
function multiply(a: number, b: number | null): number

function multiply(a: number, b: number | null = null) {
  if (b === null) {
    return (b: number) => a * b
  }

  return a * b
}

export { multiply }
