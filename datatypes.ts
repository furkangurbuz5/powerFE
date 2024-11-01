let fname = 'Furkan';
let lname: string;
lname = "Gurbuz";
let newname = lname.toUpperCase();
console.log(newname);

let age: number;
age = 25;
age = 25.5;

let dob = "25";
let result = parseInt(dob);
console.log(result);

let isValid: boolean;
isValid = true;
console.log(isValid);

let empList: string[];
let depList: Array<string>;
empList = ["1","2","3"];
let numList: Array<number>;
numList = [1,2,3,4,5,6,7,8,9,10];
let results = numList.filter(num => num >= 5);
console.log(results);

const enum Color{
        Red,
        Green,
        Blue
}
let c: Color = Color.Blue;
console.log(c);

let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number): [number, number]
{
        return [num2, num1];
}       

swapNumbs = swapNumbers(100, 200);
console.log(swapNumbs);

let department: any;
department = "IT";
department = 10;


