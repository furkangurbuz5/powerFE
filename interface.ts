


export interface User {
        name: string;
        age?: number;
        id: number;
        email: string;
}

let { name: userName, email: userLogin }: User = {
        name: "John",
        age: 26,
        id: 12341,
        email: "John@gmail.com",
}

userLogin = "";

interface Employees extends User {
        salary: number;
}

let employee: Employees = { name: "John", id: 1, email: "f@g.nl", salary: 35000 };


export interface Login {
        login(): User;
}

let [user1, ...restUsers]: User[] = [
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
]

// console.log(user1);
// console.log(restUsers);

let result = restUsers.filter(user => user.id >= 2);

console.log(result);
