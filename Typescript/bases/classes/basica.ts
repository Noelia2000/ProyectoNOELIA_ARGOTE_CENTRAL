(()=>{
 class Avenger{

    //private significa de que solo voy a tener acceso a esta propiedad dentro  de la clase
    // private name:string;
    // private team: string;
    // public realName: string;
    static avgAge:number=35;

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
 }

 const antman : Avenger=new Avenger('Antman','Capitan','Scott Lang');
 console.log(antman)
// console.log(Avenger.avgAge)
console.log(Avenger.avgAge)

})()