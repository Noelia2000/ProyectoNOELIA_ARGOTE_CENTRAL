
(()=>{


    interface Client{
        name: string;
        age?: number;
        adress:Adress

    
    }
    interface Adress{
        id:number;
        zip:string;
        city: string;
    }

    const client : Client={

        name:'Noelia',
        age:24,
        adress:{
            id:125,
            zip:'KY2 SUD',
            city:'Ottawa'
        }
    }

    const client2:Client={
        name: 'Melisa',
        age:30,
        adress:{
            city:'Toronto',
            id:120,
            zip:'K2S U2A'
        }
    }


})()