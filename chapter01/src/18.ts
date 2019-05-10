// Listing 1-18. Intersection Types

namespace Listing18 {

  interface Skier {
    slide(): void
  }

  interface Shooter {
    shoot(): void
  }

  type Biathelete = Skier & Shooter

  //let biathelete: Biathelete = null
  //biathelete.shoot()

}