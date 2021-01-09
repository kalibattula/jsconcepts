const fetch = require('node-fetch')


const promise1 = new Promise((res,rej) => {
    if(true){
        // res({name:'gang'})
        res(JSON.stringify({name:'gang'}))
    }else{
        rej()
    }
})
promise1.then((res)=>{
    console.log('Promise Resolved', res)
    return fetch1(res)
}).then((data)=>{
    console.log('Promise2 also Resolved',data.name)
}).catch(()=>{
    console.log('Promise Rejected')
})

// fetch('https://jsonplaceholder.typicode.com/todos/')
//   .then(response => {
//     //   console.log(response)
//       return response.json()
//    }).then(data => console.log(data))

// const fetch1 = function(data){
//     return new Promise((res,rej) => {
//         // operations
//         res(data)
//     })
// }

const getLatit = function(adress){
    return new Promise((res,rej)=>{
        res({lat:1,long:2})
    })
}

const getClimate = function({lat,long}){
    return new Promise((res,rej) => {
        res({temp:80})
    })
}

getLatit()
    .then((res) => getClimate(res))
    .then((res)=>{
        console.log(res)
    })

async function doWork(){
    const data = await getLatit('albany')
    const data2 = await getClimate(data)
    console.log(`Data from async ${data2.temp}`)
    console.log(data2)
}
doWork()
