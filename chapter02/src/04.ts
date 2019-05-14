// Listing 2-4. Import alias

namespace Listing04 {
  namespace Shipping {
    // Available as Shipping.Ship
    export interface Ship {
      name: string
      port: string
      displacement: number
    }

    // Available as Shipping.Ferry
    export class Ferry implements Ship {
      constructor(
        public name: string,
        public port: string,
        public displacement: number
      ) {}
    }
  }

  namespace Docking {
    import Ship = Shipping.Ship

    export class Dock {
      private dockedShips: Ship[] = []
      arrival(ship: Ship) {
        this.dockedShips.push(ship)
      }
    }
  }

  const dock = new Docking.Dock()
}
