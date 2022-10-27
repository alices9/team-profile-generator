const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a name, id, and email", () => {
            const person = new Employee("Alice", 1, "thisisanemail@gmail.com");
            expect(person.name).toEqual("Alice");
            expect(person.id).toEqual(1);
            expect(person.email).toEqual("thisisanemail@gmail.com");
        });
      });
    describe("getName", () => {
        it("should return the employee's name", () => {
            const person = new Employee("Alice", 1, "thisisanemail@gmail.com");
            expect(person.name).toEqual("Alice");
        });
    })

    describe("getID", () => {
        it("should return the employee's ID", () => {
            const person = new Employee("Alice", 1, "thisisanemail@gmail.com");
            expect(person.id).toEqual(1)
        })
    })

    describe("getEmail", () => {
        it("should return the employee's email", () => {
            const person = new Employee("Alice", 1, "thisisanemail@gmail.com");
            expect(person.email).toEqual("thisisanemail@gmail.com")
        })
    })
})