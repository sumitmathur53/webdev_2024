const { error } = require('console')
const fs = require('fs')


console.log("starting")

// fs.writeFileSync("sumit.txt", "sumit is a good boy") dont use this 

fs.writeFile("sumit.txt", "sumit is best", ()=>{
    console.log("done")

    // we can also read this file

    fs.readFile("sumit.txt", (error,data)=>{
        console.log(error,data.toString())
    })
})

console.log("ending")

// if you want to append the file

fs.appendFile("sumit.txt", "sumit is awsome hai", (e,d)=>{
    console.log(d)
})