

(()=>{

    //para recibir dos tipos de datos (string| boolean)
        const fullName= (firstName:string, lastName?:string): String=>{
    
    // el simbolo de interrogacion  le dice a TypeScript puede q venga un solo valor o dos 
            return `${firstName} ${lastName || 'no lastname'}`;
    
        }
    
        const name= fullName('Tony');
        console.log({name });
    
    
    
    })()