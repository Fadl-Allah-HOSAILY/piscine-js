const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
}; 

const clone1 = Object.assign({}, person);
const clone2 = Object.assign({}, person);
const samePerson = person

samePerson.age = samePerson.age+1
samePerson.country = 'FR'
