"use strict";
class Employee {
    constructor() {
        this.name = "";
        this.phone = 1;
    }
    func() {
        console.log("func");
    }
    static main() {
        const employee = new Employee();
        employee.func();
        const employee2 = Employee;
    }
}
