
class Employee{

        private name : string;

        public phone : number;

        constructor(){
                this.name = "";
                this.phone = 1;
        }

        private func() : void
        {
                console.log("func");
        }

        public static main()
        {
                const employee = new Employee();
                employee.func();
                const employee2 = Employee;
        }
}
