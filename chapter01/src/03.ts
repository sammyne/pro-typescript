let globalScope = 1
{
  let blockScope = 2

  // OK. This is from a wider scope
  globalScope = 100

  // Error! This is outside of the scope the variable is declared in
  //nestedBlockScope = 300

  {
    let nestedBlockScope = 3

    // OK. This is from a wider scope
    globalScope = 1000

    // OK. This is from a wider scope
    blockScope = 2000
  }

  console.log(blockScope)
}

console.log(globalScope)
