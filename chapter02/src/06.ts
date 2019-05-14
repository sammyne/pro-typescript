// Listing 2-6. Namespace/class merging

namespace Listing06 {
  // Class/Namespace Merging
  class Car {}

  namespace Car {
    export class Engine {}
    export class GloveBox {}
  }

  const car = new Car()
  const engine = new Car.Engine()
  const gloveBox = new Car.GloveBox()
}
