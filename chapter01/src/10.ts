// Listing 1-10. Enumerations

enum VehicleType {
  PedalCycle,
  MotorCycle,
  Car,
  Van,
  Bus,
  Lorry,
}

const type = VehicleType.Lorry
const typeName = VehicleType[type] // 'Lorry'

console.log(type)
console.log(typeName)
