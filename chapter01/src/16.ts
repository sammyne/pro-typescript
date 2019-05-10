// Listing 1-16. String literal type

namespace Listing16 {

  type Kingdom =
    | "Bacteria"
    | "Protozoa"
    | "Chromista"
    | "Plantae"
    | "Fungi"
    | "Animalia"

  let kingdom: Kingdom

  // OK
  kingdom = "Bacteria"

  // Error: Type 'Protista' is not assignable to type 'Kingdom'
  //kingdom = "Protista"

}