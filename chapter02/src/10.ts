// Listing 2-10. Imported members with an alias

// Import using an alias
//import { Ship as Boat } from './Listing-2-007';
import { Listing07 as Shipping } from "./07"

namespace Listing10 {
  type Boat = Shipping.Ship

  export class Dock {
    private dockedShips: Boat[] = []

    arrival(ship: Boat) {
      this.dockedShips.push(ship)
    }
  }
}
