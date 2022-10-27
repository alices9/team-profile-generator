const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing a name, id, email and github username", () => {
            const person = new Engineer("Alice", 1, "thisisanemail@gmail.com", "alices9");
            expect(person.name).toEqual("Alice");
            expect(person.id).toEqual(1);
            expect(person.email).toEqual("thisisanemail@gmail.com");
            expect(person.github).toEqual("alices9");
        });
      });
    describe("getName", () => {
        it("should return the engineer's name", () => {
            const person = new Engineer("Alice", 1, "thisisanemail@gmail.com", "alices9");
            expect(person.name).toEqual("Alice");
        });
    })

    describe("getID", () => {
        it("should return the engineer's ID", () => {
            const person = new Engineer("Alice", 1, "thisisanemail@gmail.com", "alices9");
            expect(person.id).toEqual(1)
        })
    })

    describe("getEmail", () => {
        it("should return the engineer's email", () => {
            const person = new Engineer("Alice", 1, "thisisanemail@gmail.com", "alices9");
            expect(person.email).toEqual("thisisanemail@gmail.com")
        })
    })

    describe("getGitHub", () => {
        it("should return the engineer's number", () => {
            const person = new Engineer("Alice", 1, "thisisanemail@gmail.com", "alices9");
            expect(person.github).toEqual("alices9")
        })
    })
})