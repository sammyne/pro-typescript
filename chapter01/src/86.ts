// Listing 1-86. Generic functions

function reverse<T>(list: T[]): T[] {
  const reversedList: T[] = []

  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i])
  }

  return reversedList
}

export { reverse }