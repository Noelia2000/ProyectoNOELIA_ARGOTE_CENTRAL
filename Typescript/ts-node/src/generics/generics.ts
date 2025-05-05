

export const printObject=( argument : any)=>{
    console.log(argument)
}
//funcion generica <T>
export function genericFunction<T>(argument:T){
    return argument;
}
export const genericFunctionArrow=<T>(argument: T)=> argument;
