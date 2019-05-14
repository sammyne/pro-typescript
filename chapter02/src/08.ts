// Listing 2-8. Importing modules

// Import entire module
import * as Shipping from "./07"

namespace Listing08 {
  import Ship = Shipping.Listing07.Ship

  export class Dock {
    private dockedShips: Ship[] = []

    arrival(ship: Ship) {
      this.dockedShips.push(ship)
    }
  }
}
