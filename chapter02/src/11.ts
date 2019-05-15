// Listing 2-11. Re-exporting

// Re-export with an alias
//export { Ship as Boat } from "./07"
import { Listing07 as Shipping } from "./07"
export type Boat = Shipping.Ship

// Re-export an entire module
export * from "./08"
