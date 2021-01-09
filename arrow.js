let persons = [
    {
        name:'kali',
        age:23
    },
    {
        name:'gang',
        age:22
    },
    {
        name:'hari',
        age:20
    }
]

const age22 = persons.find((person) => person.age === 22)
console.log(age22.name)

// Arrow functions don't bind this and arguments as normal functions.