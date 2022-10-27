class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.number = number;
    }
    
    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
    }

    getRole() {
        return "Engineer"
    }
}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    
    getGitHub() {
        return this.github;
    }

    getRole() {
        return "Engineer"
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Employee, Manager, Engineer, Intern;