(()=>{

type Avenger={
    name: string,
    weapon:string;
}
const ironman: Avenger={
    name:'Ironman',
    weapon:'Armorsuit'
}
const captainAmerica: Avenger={
    name:'Capitan America',
    weapon:'Escudo'
}

const thor: Avenger={
    name:'Thor',
    weapon:'Mjolnir'
}

//arreglo
const avengers:Avenger[]=[ironman,thor,captainAmerica];
//?nos permite tener la variable o el arreglo 
for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon)
}

})()