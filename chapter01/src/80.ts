// Listing 1-80. Preserving context with bind

namespace Listing80 {
  class ClickCounter {
    private count = 0
    registerClick = () => {
      this.count++
      alert(this.count)
    }
  }

  const clickCounter = new ClickCounter()

  const onClick = clickCounter.registerClick.bind(clickCounter)

  // below is fine
  onClick()
}
