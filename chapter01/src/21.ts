// Listing 1-21. Indexed types

interface Cephalopod {
  hasInk: boolean
  arms: number
  tentacles: number
}

interface CephalopodDictionary {
  [index: string]: Cephalopod
}

export { CephalopodDictionary }
