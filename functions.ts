

function add(num1: number, num2: number) : number
{
        return num1+num2;
}


console.log(add(10,20));

const sub = (num1: number, num2: number) : number => num1-num2;

console.log(sub(20,10));

function getItems<Type>(items: Type[]): Type[]
{
        return items;
}

console.log(getItems([1,2,3,4,5]));

let concatResult = getItems(["1","2"]);

console.log(concatResult);

