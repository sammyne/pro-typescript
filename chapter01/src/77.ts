// Listing 1-77. Lost context

namespace Listing77 {
  class ClickCounter {
    private count = 0

    registerClick() {
      this.count++
      alert(this.count)
    }
  }

  const clickCounter = new ClickCounter()

  const elem = document.getElementById("target")
  if (elem) {
    // the this keyword lost its conext
    elem.onclick = clickCounter.registerClick
  }
}
