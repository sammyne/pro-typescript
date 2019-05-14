// Listing 2-4. Import alias

///<reference path="./03.ts" />

namespace Listing04 {
  namespace Docking {
    //import Ship = Shipping.Ship
    import Ship = Listing03.Shipping.Ship

    export class Dock {
      private dockedShips: Ship[] = []
      arrival(ship: Ship) {
        this.dockedShips.push(ship)
      }
    }
  }

  const dock = new Docking.Dock()
}
