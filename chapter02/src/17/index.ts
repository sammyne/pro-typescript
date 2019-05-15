// Listing 2-17. Dynamic module loading System modules

// Declaration for the require function (System JS)
declare const System: { import(module: string): Promise<any> }

// Import - doesn't actually emit code
import { Ferry } from "../07"

const condition = true
if (condition) {
  // Only imports if the condition is true
  System.import("../07").then((ferry: typeof Ferry) => {
    const myFerry = new ferry("", "", 0)
  })
}
