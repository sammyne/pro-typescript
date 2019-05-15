// Listing 2-10. Imported members with an alias

// Import using an alias
//import { Ship as Boat } from './Listing-2-007';
import { Ship as Boat } from "../07"

namespace Listing10 {
  export class Dock {
    private dockedShips: Boat[] = []

    arrival(ship: Boat) {
      this.dockedShips.push(ship)
    }
  }
}
