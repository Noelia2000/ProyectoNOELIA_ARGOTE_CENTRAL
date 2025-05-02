(()=>{

    class Avenger{
        constructor(
            public name:string,
            public realName:string,
        ){

            console.log('Constructor Avenger llamado!')

        }
        protected getFullname(){
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger{

        constructor(
            name: string,
            realName:string,
            public isMutant:boolean
        ){
            super(name,realName)
            console.log('Constructor Xmen llamado');
        }


        // Gets y sets son un metodo
        // el get regresa 
// el Gets no recive nigun argumento 

        get fullName(){
            return`${this.name}- ${this.realName}`;
        }
// el sets si recibe argumentos 
        // un sets no regresa nada 
        set fullName(name:string){
            if (name.length<3){
                throw new Error('El nombre debe de ser mayor de 3 letras')
            }
        this.name=name;

        }


        getFullnameDesdeXmen(){
            console.log(super.getFullname())
        }
    }

    const wolverine= new Xmen('Wolverine','Logan', true)

    console.log(wolverine.fullName);

    wolverine.fullName='Noelia'
    console.log(wolverine.fullName);
    // wolverine.getFullnameDesdeXmen();





})()

