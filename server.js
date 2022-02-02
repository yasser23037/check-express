// import express

const express=require('express')
// 2- init the app

const app=express ()

// 3- create the Port

const Port=4444
// 4- create the server

app.listen(Port,err =>
    err? console.log (err): console.log (`the server is running port ${Port} `))

   // 5- midllwhere
   const verifdate = (req, res, next) => { 
         let days = [     "Sunday",     "Monday",     "Tuesday",     "Wednesday",     "Thursday",     "Friday",     "Saturday",   ];
         let hour = new Date () .getHours () 
         if (
             days [new Date().getDay()] !=="Sunday" &&  days [new Date().getDay()] !=="Saturday" 
             && hour<17 && hour >9
              
         )
          
         {
             next () 
         }
         else {
             res.send ("come back later")

         }


 } 
 

 app.use(verifdate)
 // routing midellwhere
 app.use(express.static("Public"))