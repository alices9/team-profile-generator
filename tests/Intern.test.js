const Employee = require("../lib/Employee.js");
const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing a name, id, email and github username", () => {
            const person = new Intern("Alice", 1, "thisisanemail@gmail.com", "SBU");
            expect(person.name).toEqual("Alice");
            expect(person.id).toEqual(1);
            expect(person.email).toEqual("thisisanemail@gmail.com");
            expect(person.school).toEqual("SBU");
        });
      });
    describe("getName", () => {
        it("should return the intern's name", () => {
            const person = new Intern("Alice", 1, "thisisanemail@gmail.com", "SBU");
            expect(person.name).toEqual("Alice");
        });
    })

    describe("getID", () => {
        it("should return the intern's ID", () => {
            const person = new Intern("Alice", 1, "thisisanemail@gmail.com", "SBU");
            expect(person.id).toEqual(1)
        })
    })

    describe("getEmail", () => {
        it("should return the intern's email", () => {
            const person = new Intern("Alice", 1, "thisisanemail@gmail.com", "SBU");
            expect(person.email).toEqual("thisisanemail@gmail.com")
        })
    })

    describe("getSchool", () => {
        it("should return the intern's number", () => {
            const person = new Intern("Alice", 1, "thisisanemail@gmail.com", "SBU");
            expect(person.school).toEqual("SBU")
        })
    })
})