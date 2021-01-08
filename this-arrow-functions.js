// this - this keyword represents the object that is executing the current function.
// if that function is a method (i.e function inside an object) this represents that obj
const video = {
    title:'Pakka Local',
    tags:['a','b','c'],
    play(){
        console.log(this) //this represents the video object.
    },
    play1: ()=>{
        // console.log("this is arrow functions")
    }
}

video.play()
video.play1()
video.loop = function(){
    console.log(this) // this represents the video object.
}
video.loop()

// if it is a function it represents global object 
        // (i.e window object in browser and global in node)

// these functions are called as function statements.
function fun(){
    console.log(this) // this represents he global object.
                    //  bcz these functions are in global context.
}
fun()

//These functions are function expressions.
const fun1 = function(){
    console.log('Object represents',this)  // this represents he global object. 
                                            //  bcz these functions are in global context.
}
fun1()

// If the function is a constructor function this represents the Object of that function.
// If we call the function using new operator it references a new empty obj.
function Person(name){
    this.name = name
    console.log(this)
}
let p = new Person('Kali') 

// Consider a case where this is used inside a callback function.
video.printTagsVer1 = function(){
    let that = this
    let x = 10
    this.tags.forEach(function(tag,index){
        
        console.log(`${that.title} and tag is ${tag}`) 

        // Output is 
        // undefined and tag is a
        // undefined and tag is b
        // undefined and tag is c

        //bcz this points to global object bcz it considers 
        // callback function as a seperate function in global scope.
    })
}
video.printTagsVer1()
 

// To overcome this problem by using Arrow Functions
//Option 1. Arrow functions don't bind this keyword.
video.printTagsVer2 = function(){
    this.tags.forEach((tag,index)=>{
        console.log(`${this.title} and tag is ${tag}`)
    })
} 
video.printTagsVer2()

// Option 2. By passing this in second argument in forEach() method. which takes any Object.
video.printTagsVer3 = video.printTagsVer1 = function(){
    this.tags.forEach(function(tag,index){
        console.log(`${this.title} and tag is ${tag}`) 
    }, this)
}
video.printTagsVer3()

// They don't get their own value of this.
const arrFun = ()=>{
    console.log(this)
}
arrFun()

// For event listeners we have to use both normal and arrow functions combinedly.
//Example is
// function makePurpleVer1(){
//     console.log(this) // refers to button element
//     setTimeout(()=>{
//         console.log(this)   // refers to button element     
//     },1000)
// }

// function makePurpleVer2(){
//     console.log(this) // refers to button element
//     setTimeout(function(){
//         console.log(this)   // refers to window object    
//     },1000)
// }
// btn1.addEventListener("click", makePurpleVer1) // =>btn1.makePurpleVer1()
// btn2.addEventListener("click", makePurpleVer2) // => btn2.makePurpleVer2()

const jobs = [{name:'kali'},{name:'gang'}]
const newJobs =jobs.map(function(job,index){
    // console.log(job)
    // return job === 'a' //filter
    // job.age = index+20 //map
    let age = index+20
    return {
        ...job,
        aged: index+25
    }
})
console.log(newJobs)
// jobs.filter(()=>{
//     console.log(this)
// },jobs)

// const person = {
//     talk(){
//         let that = this
//         setTimeout(function(){
//             console.log(that)
//         },1000)
//     }
// }
// person.talk()

// forEach,map,filter,reduce,sort