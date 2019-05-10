// Listing 1-63. Preserving scope with arrow syntax

/*
const scopeLosingExample = {
  text: "Property from lexical scope",
  run() {
    setTimeout(function() {
      alert(this.text)
    }, 1000)
  },
}
// alerts undefined
scopeLosingExample.run()
*/

const scopePreservingExample = {
  text: "Property from lexical scope",
  run: function() {
    setTimeout(() => alert(this.text), 1000)
  },
}
// alerts "Property from lexical scope"
scopePreservingExample.run()
