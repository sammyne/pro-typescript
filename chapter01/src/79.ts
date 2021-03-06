// Listing 1-79. Preserving context with a closure

namespace Listing79 {
  class ClickCounter {
    private count = 0
    registerClick = () => {
      this.count++
      alert(this.count)
    }
  }

  const clickCounter = new ClickCounter()

  const onClick = () => clickCounter.registerClick()

  // below is fine
  onClick()
}
