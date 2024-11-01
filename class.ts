import { Login, User } from './interface';

interface Address {
        street: string;
        city: string;
        state: string;
        pin: string;
}

class Employee implements Login {

        #id!: number;
        name!: string;
        address!: Address;

        constructor(id: number, name: string, address: Address) {
                this.address = address;
                this.#id = id;
                this.name = name;
        }
        login(): User {
                return {
                        name: "John",
                        age: 26,
                        id: 12341,
                        email: "John@gmail.com",
                };
        }

        getNameWithAddress(): string {
                return `Employee ${this.name} stays at ${this.address}`;
        }

        static getEmployeeCount(): number {
                return 50;
        }

        get empId() {
                return this.#id;
        }

        set empId(id: number) {
                this.#id = id;
        }
}

const john = new Employee(1, "John", {
        street: "ABC",
        city: "Bangalore",
        state: "Karnataka",
        pin: "560076",
});


console.log(Employee.getEmployeeCount());

console.log(john.getNameWithAddress());

class Manager extends Employee {
        constructor(id: number, name: string, address: Address) {
                super(id, name, address);
        }
        getNameWithAddress(): string {
                return `Manager ${this.name} stays at ${this.address}`;
        }
}

const mike = new Manager(2, "Mike", {
        street: "",
        city: "",
        state: "",
        pin: "",
});
console.log(mike.getNameWithAddress());

john.empId = 100;

console.log(john.empId);
console.log(mike.empId);


