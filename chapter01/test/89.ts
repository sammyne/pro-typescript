// Listing 1-89. Type constraints

namespace Listing89 {
  interface HasName {
    name: string
  }

  class Personalization {
    static greet<T extends HasName>(obj: T) {
      return "Hello " + obj.name
    }
  }
}
