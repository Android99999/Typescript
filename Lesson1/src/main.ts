
let username: string = 'Markss'

let isValid: string | any;

const sum = (a: number, b: number) => {
 console.log(a+b);
 return (a+b)
}

type Guitarist = { //initializing data types
    name: string,
    active: boolean,
    album: (string | number)[]
}

interface guitarist {   // same in the top but it used interface and no equal so dont confused.
    name?: string,
    active: boolean,
    album: (string | number)[]
}



let evh: Guitarist = { // Putting types based on initialized data types.
    name: 'Baque',
    active: true, 
    album: [1990, 2000, 'album1']
}

let jp: {name: string, active: boolean, album: (string | number)[] }= { //Manually putting types on arrays
    name: "JP",
    active: true,
    album: ['name', 'name', 'name']
}

let muni: {name: string, active?: boolean, album: (string | number)[] }= { //Inputting ? symbol if you want that variable is optional means even without that tsc will accept that but it will be undefined if it is not used or not have a value.
    name: 'hey',
    active: true,
    album: ['name', 'name', 'name']
}



const greetGuitarist = (guitar: guitarist) => {
    if(guitar.name){
       return `Hello ${guitar.name}!`;
    }
    return "Hello Guest!";
}

console.log(greetGuitarist(evh))


console.log(evh)





console.log(username)