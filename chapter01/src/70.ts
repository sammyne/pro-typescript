// Listing 1-70. Hybrid types

// Hybrid type
interface SimpleDocument {
  (selector: string): HTMLElement
  notify(message: string): void
}

// Implementation
const prepareDocument = function(): SimpleDocument {
  const doc = <SimpleDocument>function(selector: string) {
    return document.getElementById(selector)
  }

  doc.notify = (message: string) => alert(message)

  return doc
}
const $ = prepareDocument()

// Call $ as a function
const elem = $("myId")

// Use $ as an object
$.notify(elem.id)
