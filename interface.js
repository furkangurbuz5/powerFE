"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = {
    name: "John",
    age: 26,
    id: 12341,
    email: "John@gmail.com",
};
userLogin = "";
let employee = { name: "John", id: 1, email: "f@g.nl", salary: 35000 };
let [user1, ...restUsers] = [
    {
        name: "John",
        age: 26,
        id: 1,
        email: "John@gmail.com",
    },
    {
        name: "Mike",
        age: 25,
        id: 2,
        email: "Mike@gmail.com",
    },
    {
        name: "Fred",
        age: 23,
        id: 3,
        email: "Fred@gmail.com",
    },
];
// console.log(user1);
// console.log(restUsers);
let result = restUsers.filter(user => user.id >= 2);
console.log(result);
