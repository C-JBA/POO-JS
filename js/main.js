class Person {
    name = "";
    email = "";
    age = 0;
    resume = "";

    static total=0;
    constructor(name, email, age, resume) {
        this.name = name;
        this.email = email.toLowerCase();
        this.age = (age < 18) ? 18 : age;//if ternario
        this.resume = resume;
        Person.total++;
    }//constructor Person
    static printTotal(){
        console.log(Person.total);
    }
    printInfo() {//método
        console.log(this.name, this.email, this.age, this.resume)
    }//printInfo
}//class Person

class Employee extends Person {
    department = "";
    salary = 0.0;
    constructor(name, email, age, resume, department, salary) {
        super(name, email, age, resume); // super de "clase superior"
        this.department = department;
        this.salary = salary;
    }//constructor
    calculateSalary() {
        return ((this.salary * 30) * 1.16).toFixed(2);
    }//calculateSalary
    printInfo() {
        super.printInfo();
        console.log(this.department, this.salary, this.calculateSalary());
    }//printInfo
}//class Employee

let john = new Person("John Doe", "jdoe@gmail.com", 17, "Desconocido");
let jane = new Person("jane Doe", "jane.doe@gmail.com", 26, "Jane");
let maritere = new Employee("Maritere", "maritere@gmail.com", 21, "Java FullStack Developer", "IT", 1255.20);
let dora = new Employee("Dora Garcia", "dora.garcia@gmail.com", 21, "FulStack Developer", "Development", 1115.25);
let vale= new Employee("Valeria","valeria.arquieta@gmail.com",21,"FullStack Java Developer","Development",1205.12);

/* 
let john1=new Person();
john.name="John Doe";
john.age=40;
john.email="jdoe@gmail.com";
 */
/* john.resume = "Otra cosa";
john.printInfo();
jane.printInfo();
 */
maritere.printInfo();
dora.printInfo();
vale.printInfo();
Person.printTotal();
/* console.log(Person.total); */