
(()=>{
//? type se utiliza para definir un tipo
 type Hero={
//? type esta creada para obligar reglas al objeto o variable
    name: string;
    age?:number;
    powers:number[];
    getName?:()=>string;

 }
        let flash:Hero ={
            name: 'Barry Allen',
            age:24,
            powers: [1,2]
        }

        let superman:Hero ={
            name: 'Clark Kent',
            age:60,
            powers: [1],
            getName() {
                return this.name;
            },
        }
    
    
        
    
    })()
