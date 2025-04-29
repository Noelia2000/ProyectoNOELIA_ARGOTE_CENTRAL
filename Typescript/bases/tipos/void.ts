(()=>{
//funcion tradicional
    function callBatman():void{
        return;
    }
    //funcion de flecha
    //null no es lo mismo que void
    const callSuperman=():void=>{
        return;



    }

     const a=callBatman()
     //void significa que esta vacio
     // la letra(a) si mantenemos el cursor sobre la(a) sale void
     console.log(a)// si es ejecutado sale undefined
})()

// el void es muy utilizado para que las funcionnes no regresen nada 