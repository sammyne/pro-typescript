// Listing 1-78. Preserving context with a property and an arrow function

namespace Listing78 {
  class ClickCounter {
    private count = 0
    registerClick = () => {
      this.count++
      alert(this.count)
    }
  }

  const clickCounter = new ClickCounter()

  const onClick = clickCounter.registerClick

  // TODO: below is fine but WHY???
  onClick()
}
