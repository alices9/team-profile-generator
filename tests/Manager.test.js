const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing a name, id, email and number", () => {
            const person = new Manager("Alice", 1, "thisisanemail@gmail.com", 1234567890);
            expect(person.name).toEqual("Alice");
            expect(person.id).toEqual(1);
            expect(person.email).toEqual("thisisanemail@gmail.com");
            expect(person.number).toEqual(1234567890);
        });
      });
    describe("getName", () => {
        it("should return the manager's name", () => {
            const person = new Manager("Alice", 1, "thisisanemail@gmail.com", 1234567890);
            expect(person.name).toEqual("Alice");
        });
    })

    describe("getID", () => {
        it("should return the manager's ID", () => {
            const person = new Manager("Alice", 1, "thisisanemail@gmail.com", 1234567890);
            expect(person.id).toEqual(1)
        })
    })

    describe("getEmail", () => {
        it("should return the manager's email", () => {
            const person = new Manager("Alice", 1, "thisisanemail@gmail.com", 1234567890);
            expect(person.email).toEqual("thisisanemail@gmail.com")
        })
    })

    describe("getNumber", () => {
        it("should return the manager's number", () => {
            const person = new Manager("Alice", 1, "thisisanemail@gmail.com", 1234567890);
            expect(person.number).toEqual(1234567890)
        })
    })
})