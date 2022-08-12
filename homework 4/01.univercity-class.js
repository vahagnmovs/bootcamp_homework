// TASK 1

class University {
    constructor() {
        this._teachers = [];
        this._students = [];
    }

    addMember(member) {
        if (member instanceof Student) {
            this._students.push(member);
        } else if (member instanceof Teacher) {
            this._teachers.push(member);
        } else {
            throw new Error('University can only add students or teachers')
        }
    }

    removeMember(member) {
        if (member instanceof Student) {
            this._students = this._students.filter((student) => student._id !== member._id);
        } else if (member instanceof Teacher) {
            this._teachers = this._teachers.filter((teacher) => teacher._id !== member._id);
        } else {
            throw new Error('there is no such a member in univercity')
        }
    }

    startLesson() {
        if (this._teachers.some((teacher) => teacher._energy >= 5) && this._students.some((student) => student._energy >= 2)) {
            this._teachers.forEach((teacher) => teacher._energy -= 5)
            this._students.forEach((student) => student._energy -= 2)
        } else {
            throw new Error("Teachers or students dont have enough energy to start lesson, please wait some time")
        }
    }
}

class UniversityMember {
    constructor(name, age, role, energy = 24, id) {
        this._name = name;
        this._age = age;
        this._role = role;
        this._energy = energy;
        this._id = id;
    }

    info() {
        console.log(this);
    }
}

class Student extends UniversityMember {
}

class Teacher extends UniversityMember {
}

const univer = new University();
const student = new Student('Vahagn', 29, 'Student', 24, 1)
const teacher = new Teacher('David', 28, 'Teacher', 24, 2)
const student1 = new Student('Vgyus', 29, 'Student', 24, 3)
const teacher1 = new Teacher('Davo', 28, 'Teacher', 24, 4)

univer.addMember(student)
univer.addMember(teacher)
univer.addMember(student1)
univer.addMember(teacher1)

univer.startLesson()
univer.startLesson()
univer.startLesson()
univer.startLesson()

console.log(univer);