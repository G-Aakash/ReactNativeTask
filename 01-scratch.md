//Promise.then() takes two arguments, a callback for success and another for failure.
//Both are optional, so you can add a callback for success or failure only.

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("success")
    },3000);
  })
 
 
  const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject("failure")
    },3000);
  })
 
  p1.then(console.log).catch(console.log)


---------------------------------------------------------------------------------

//promise methods 
 const p1=val => new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve("success")
   },3000);
 })

 const p2 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
     reject("failure")
   },3000);
 })

//all na---> resolve vaiyum paakum reject ta yum paakum ,apadi nadakum pothu "reject" moththama reject agum
//oruvela rendumea resolve iruntha output la array of value sa varum
 Promise.all([p1,p2]).then(console.log).catch(console.log)

 //allSettled na--->rendu promise oda status & array of object tharum 
 resolve na--->status:fulfilled,value:success
reject na---> status:Rejected,result:failure
  
 Promise.allSettled([p1,p2]).then(console.log).catch(console.log)

 race na--->entha promise oda response first varutho atha mattum tha pakkum,adutha promise pakkathu
 Promise.race([p1,p2]).then(console.log).catch(console.log)


------------------------------------------------------------------------------------------------------
 const p1=val => new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve(val+10)
   },3000);
 })
 p1(1).then(x => x + 20).then(console.log)

output:31



//call back function---->vachu ivalo line ezhuthurathuku instead(pathila) tha promise use pannuvanga
 const f1=(val,callback)=>{
   return callback(val+10)
 }
 const callback =(val)=>{
 return val+20
 }
 console.log(f1(1,callback))

 output:31