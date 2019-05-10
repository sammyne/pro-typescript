// Listing 1-68. Built-in NodeListOf<T> interface

interface NodeList {
  readonly length: number
  item(index: number): Node
  [index: number]: Node
}
