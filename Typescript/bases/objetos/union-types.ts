
(()=>{

    type Hero={
        //? type esta creada para obligar reglas al objeto o variable
            name: string;
            age?:number;
            powers:number[];
            getName?:()=>string;
        
         }
             


         let myCustomVariable: string | number| Hero='Noelia';
         console.log(typeof myCustomVariable)

         myCustomVariable=20
         console.log(typeof myCustomVariable)

         myCustomVariable={
            name:'Bruce',
            age:43,
            powers:[1]
         }
         console.log(typeof myCustomVariable)
         console.log(myCustomVariable)

})()

