// Listing 1-81. Preserving context and capturing the event

namespace Listing81 {
  class ClickCounter {
    private count = 0
    registerClick(id: string) {
      this.count++
      alert(this.count)
    }
  }

  const clickCounter = new ClickCounter()

  const elem = document.getElementById("target")
  if (elem) {
    elem.onclick = (e) => {
      const target = <Element>e.target || e.srcElement
      clickCounter.registerClick(target.id)
    }
  }
}
