import fs from "fs/promises" // import like this 


let a = await fs.readFile("sumit.txt")  // we can use this 

let b = await fs.writeFile("sumit.txt","\n\n\n\n soifhosihfjoi")



console.log(a.toString())
