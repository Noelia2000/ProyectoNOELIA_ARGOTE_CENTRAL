(()=>{

// operador rest que son'...'
    const fullName=(firstName:string, ...restArgs:string[]):string=>{
        return `${firstName} ${restArgs.join('')}`
    }

    const superman= fullName('Clark','Joseph','kent');

    console.log({superman})
})()


