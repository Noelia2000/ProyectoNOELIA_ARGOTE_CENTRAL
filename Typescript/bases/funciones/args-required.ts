
(()=>{

//para recibir dos tipos de datos (string| boolean)
    const fullName= (firstName:string, lastName:(string|boolean)): String=>{


        return `${firstName} ${lastName}`;

    }

    const name= fullName('Tony','Stark');
    console.log({name });



})()