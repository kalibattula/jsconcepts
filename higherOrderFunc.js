// Javascript higher order functions.
const numbers = [1,-1,2,3]
console.log(numbers)

const mapVal = numbers.map(num => num + 1) // Adds 1 to every element and returns a new array.
console.log(mapVal) // [ 2, 0, 3, 4 ]

const filVal = numbers.filter(num => num > 0)
console.log(filVal)

const reduceVal = numbers.reduce((acc,num) => {
  return acc+num
}, 10) // initially acc=10,num=1
                                                        // acc = 11 , num = -1
                                                        // acc = 10, num = 2

                                                        // it returns 5 as the o/p.
console.log(reduceVal)

//Performing operations on array of objects (brad traversy youtube) 
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
   
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


//filter() method filters the array and returns subset of the array.
// Filtering for retail companies
// company => {name, category}
const retailComp = companies.filter(({category}) => category=== 'Retail')
console.log(retailComp)

// Getting 80's companies
const eightysComp = companies.filter(({start}) => start>1980 && start<1990)
console.log(eightysComp)

//Getting Companies which lasted for 15 years
const fifteenYearsComp = companies.filter(({start, end}) => (end-start) >= 15)
console.log(fifteenYearsComp)

// map() creating new array from the given array

// creating Array of companies from he given array.
const compNames = companies.map(({name}) => name)
console.log(compNames)

// chaining of functions
const someNum = ages
                    .map(age => Math.sqrt(age))
                    .map(age => Math.ceil(age) * 2)
console.log(someNum)

// Sorting using sort() method
// sort ages array
const sortAgesVer1 = ages.sort();
console.log(sortAgesVer1) // It only sorts first digit

const sortAgesVer2 = ages.sort((a,b) => a>b?1:-1);  
console.log(sortAgesVer2) // It sorts correctly.

// reduce() method.
// it performs operations and returns single value.
// Ages sum
const agesSum = ages.reduce((acc,currentAge) => acc + currentAge)
console.log(agesSum)

// Total years for all companies
const compAgeSum = companies.reduce((acc,{start, end}) => acc+(end - start),0)
console.log(compAgeSum)

// we can combine all the methods (i.e chaining) 