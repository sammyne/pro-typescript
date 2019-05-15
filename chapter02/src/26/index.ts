// Listing 2-26. Class decorators
// TODO: fix

namespace Listing26 {
  function log(target: any) {
    const original = target

    // Wrap the constructor with a logging constructor
    const constr: any = (...args: any[]) => {
      console.log(`Creating new ${original.name}`)
      const c: any = () => {
        return original.apply(null, args)
      }
      c.prototype = original.prototype

      return new c()
    }

    constr.prototype = original.prototype

    return constr
  }

  @log
  class Calculator {
    square(n: number) {
      return n * n
    }
  }

  // Creating new Calculator
  const calc1 = new Calculator()

  // Creating new Calculator
  const calc2 = new Calculator()
}
