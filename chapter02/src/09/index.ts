// Listing 2-9. Importing named module members

// Import a single export from a module
import { Ship } from "../07"

export namespace Listing09 {
  export class Dock {
    private dockedShips: Ship[] = []

    arrival(ship: Ship) {
      this.dockedShips.push(ship)
    }
  }
}
