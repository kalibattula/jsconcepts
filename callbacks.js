// console.log('1');

const { get } = require("http");

// callbacks are two tupes synchronous and asynchonous callbacks
const names = [
    { name: 'kali'},{name:'gang'},{name:'hari'},{name:'gopi'}
]
names.forEach(({name})=>console.log(name)) // This callback is synchronous callback

const fun1 = function(){
    setTimeout(() => {
        console.log("Kali")
        // callback({name:'kali'})
        return {name:'kali'}
    }, 1000);
}

const data1 = fun1()
console.log(`The data returned from fun1() is ${data1}`)


// callbacks can delay the execution of a function untill a particular time.
const fun2 = function(callback){
    setTimeout(() => {
        console.log("Kali")
        callback({name:'kali'})
    }, 1000);
}
fun2(function(res){
    console.log(`The data received from callback is ${res.name}`)
})

