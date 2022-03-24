let reverse = false
let f1=val=>new Promise((resolve,reject)=>{

  console.log(reverse)
  if(reverse===false){
    console.log(reverse)
     resolve("resolve")
      reject("reject")
  }
  // let reverse=true
 else if(reverse===true)
 {
  resolve("rejected")
    reject("reject")
 }
  
 
})