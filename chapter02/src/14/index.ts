// Listing 2-14. Export object

class Ferry {
  constructor(
    public name: string,
    public port: string,
    public displacement: number
  ) {}
}

export = Ferry
