


(()=>{

    //para recibir dos tipos de datos (string| boolean)
        const fullName= (firstName:string, lastName?:string, upper:boolean=false): String=>{
    if(upper){
        return `${firstName} ${lastName||'------'}`. toUpperCase();
    } else{
    // el simbolo de interrogacion  le dice a TypeScript puede q venga un solo valor o dos 
            return `${firstName} ${lastName || 'no lastname'}`;
    
    }
}

    
        const name= fullName('Tony','Stark', true);
        console.log({ name });
    
    
    
    })()