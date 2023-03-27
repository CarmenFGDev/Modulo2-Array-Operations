// Ejercicio 1 Array Operations
console.log("EJERCICIO 1");
const arr =[1,2,3,4,5];
// Head
const head = (myArray) => {
    [first,...rest] = myArray;
    return first;
};

console.log('Array Original', arr);
console.log('Head', head([1,2,3,4,5]));

// Tail
const tail = (myArray) => {
    [first,...rest] = myArray;
    return rest
}
console.log('Array Original', arr);
console.log('Tail', tail([1,2,3,4,5]));

//Init
const init = (myArray) => {
    return [...myArray].splice(0,myArray.length-1);
}
console.log('Array Original', arr);
console.log('Init', init([1,2,3,4,5]));


//Last
const last = (myArray) => {
   return [...myArray].pop();
}
console.log('Array Original', arr);
console.log('Last', last([1,2,3,4,5]));


console.log('------------------------------------------------------------------');

//Ejercicio 2 Concat

console.log("EJERCICIO 2");

const concat= (a,b) => {
    return [...a, ...b]
}
console.log('concatenar [1,2],[3,4]' ,concat([1,2],[3,4]));



const concatArgs=(...args) => {
   return args.reduce((acc,current)=>{
        return[...acc,current]
    },[]).flat();
}
console.log('concatenar argumentos no conocidos [1,2],[3,4],[5,6]',concatArgs([1,2],[3,4],[5,6]));









