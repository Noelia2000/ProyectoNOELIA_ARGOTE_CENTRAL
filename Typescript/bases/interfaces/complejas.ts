
(()=>{


    interface Client{
        name: string;
        age?: number;
        address:Adress;
        getFullAddress(id:string):string;

    
    }
    interface Adress{
        id:number;
        zip:string;
        city: string;
    }

    const client : Client={

        name:'Noelia',
        age:24,
        address:{
            id:125,
            zip:'KY2 SUD',
            city:'Ottawa'
        },
        getFullAddress (id:string){
            return this.address.city;
        }
    }

    const client2:Client={
        name: 'Melisa',
        age:30,
        address:{
            city:'Toronto',
            id:120,
            zip:'K2S U2A'
        },
        getFullAddress (id:string){
            return this.address.city;
        }
    }


})()