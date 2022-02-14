const carros = 
[
  {
      "id":1,
      "ano":  "2009",
      "marca": "Fiat",
      "modelo": "Punto hlx 1.8"
  },
  {
      "id":2,
      "ano":  "2022",
      "marca": "Ford",
      "modelo": "Fiesta ex 1.0"
  },
  {
      "id":3,
      "ano":  "2019",
      "marca": "Volks",
      "modelo": "Polo TSI 2.0"
  },
  {
      "id":4,
      "ano":  "2022",
      "marca": "Honda",
      "modelo": "HRV 1.8 flex"
  }
]

console.log('carros', carros)

const filterAno = Object.fromEntries(
  Object.entries(carros).filter(([key, value]) => value.ano >= 2021))
console.log('filterAno: ',filterAno)

const filterFromEntries = Object.fromEntries(carros)
const filterEntries = Object.fromEntries(Object.entries(carros))
// const filter = carros.filter(([key, value]) => value.ano === 2009)

console.log('fromFromEntries', filterFromEntries)
console.log('fromEntries', filterEntries)
// console.log('filter', filter)

const carroMap = carros.map((car) => {
  return car.ano === 2009
})

console.log(carroMap,'carroMap');

//FOR IN
for(let prop in carros){
  console.log(prop)
  console.log(carros[prop])
}

