export class FizzBuzz {
  constructor(private storage: Storage) {}

  generate(input: number): string | number {
    if (3 === input) {
      return this.storage.getItem("FizzText")
    }

    let output = ""

    if (input % 3 === 0) {
      output += "Fizz"
    }

    if (input % 5 === 0) {
      output += "Buzz"
    }

    return output === "" ? input : output
  }
}
