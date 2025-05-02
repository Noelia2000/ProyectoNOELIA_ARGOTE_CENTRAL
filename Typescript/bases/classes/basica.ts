(()=>{
 class Avenger{

    //private significa de que solo voy a tener acceso a esta propiedad dentro  de la clase
    // private name:string;
    // private team: string;
    // public realName: string;
    static avgAge:number=35;

    static getAvgAge(){

        return this.name;

    }
    //? estatico significa que voy a poder acceder a el si crear una instacia de mi clase 
    constructor
    (
        private name:string,
        private team:string, 
        public realName?:string,
        // avgAge:number=55,
    )
        { 
            // Avenger.avgAge=avgAge;
        // this.name=name;
        // this.team=team;
        // this.realName=realName;
    }


    //?METODO BIO
public bio(){
    return `${this.name} (${ this.team})`
}

 }

 const antman : Avenger=new Avenger('Antman','Capitan','Scott Lang');
 console.log(antman)
// console.log(Avenger.avgAge)
console.log(Avenger.getAvgAge())

})()