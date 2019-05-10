// Listing 1-74. Property getters and setters

interface StockItem {
  description: string
  asin: string
}

class WarehouseLocation {
  // add the bang sign (!) to address error TS2564
  private _stockItem!: StockItem

  constructor(public aisle: number, public slot: string) {}

  get stockItem() {
    return this._stockItem
  }

  set stockItem(item: StockItem) {
    this._stockItem = item
  }
}

const figure = { asin: "B001TEQ2PI", description: "Figure" }

const warehouseSlot = new WarehouseLocation(15, "A6")

warehouseSlot.stockItem = figure
