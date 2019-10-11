// CODE here for your Lambda Classes
class Person {
  constructor(attribs) {
    this.name = attribs.name;
    this.age = attribs.age;
    this.location = attribs.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}. I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attribs) {
    super(attribs);
    this.specialty = attribs.specialty;
    this.favLanguage = attribs.favLanguage;
    this.catchPhrase = attribs.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(Student, subject) {
    console.log(`${Student.name} receives a perfect score on ${subject}`);
  }
  gradeStudent(Student) {
    Student.grade = Student.grade + Math.floor(Math.random() * 200 - 100);
    while (Student.grade > 100 || Student.grade < 0) {
      Student.grade = Student.grade + Math.floor(Math.random() * 200 - 100);
    }
  }
}

class Student extends Person {
  constructor(attribs) {
    super(attribs);
    this.previousBackground = attribs.previousBackground;
    this.className = attribs.className;
    this.favSubjects = attribs.favSubjects;
    this.grade = attribs.grade;
  }
  listsSubjects() {
    this.favSubjects.forEach(element => {
      console.log(element);
    });
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  graduate() {
    while (this.grade < 70 || this.grade > 100) {
      console.log(`Please try again! Your grade is only ${this.grade}.`);
      this.grade = this.grade + Math.floor(Math.random() * 200 - 100);
    }
    if (this.grade >= 70 || this.grade <= 100) {
      console.log(
        `Congrats ${this.name} you graduated with a score of ${this.grade}!`
      );
    }
  }
}

class ProjectManager extends Instructor {
  constructor(attribs) {
    super(attribs);
    this.gradClassName = attribs.gradClassName;
    this.favInstructor = attribs.favInstructor;
  }
  standUp(slackChannel) {
    console.log(
      `${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`
    );
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const barb = new Instructor({
  name: "Barb",
  location: "Phoenix",
  age: 28,
  favLanguage: "php",
  specialty: "Backend",
  catchPhrase: `If you don't code in php, you're the worst.`
});

const alan = new Student({
  name: "Alan",
  location: "Seattle",
  age: 26,
  previousBackground: "streamer",
  className: "WEB 35",
  favSubjects: ["CSS", "HTML", "REACT"],
  grade: 85
});

const sandy = new Student({
  name: "Sandy",
  location: "Chicago",
  age: 35,
  previousBackground: "Doctor",
  className: "WEBPT24",
  favSubjects: ["REDUX", "Python", "REACT"],
  grade: 92
});

const amy = new ProjectManager({
  name: "Amy",
  location: "San Diego",
  age: 22,
  favLanguage: "React",
  specialty: "Full-stack",
  catchPhrase: `If you ain't full-stack, you ain't...`,
  gradClassName: "CS4",
  favInstructor: "Linda Johnson"
});

const charles = new ProjectManager({
  name: "Charles",
  location: "Hull City",
  age: 31,
  favLanguage: "Svelte",
  specialty: "Full-stack",
  catchPhrase: `I'd rather eat nails than watch another man code in php.`,
  gradClassName: "CS3",
  favInstructor: "Joanne Benedetto"
});

// Instructor Checks
barb.demo("Security");
barb.grade(alan, "CyberWarfare");
console.log(fred.favLanguage);
console.log(barb);
fred.speak();
fred.gradeStudent(sandy);
barb.gradeStudent(alan);
//Student Checks
sandy.listsSubjects();
alan.listsSubjects();
alan.PRAssignment("Javascript");
sandy.PRAssignment("Data Science");
alan.sprintChallenge("React");
console.log(alan);
console.log(sandy);
sandy.speak();
console.log("Sandy's Grade", sandy.grade);
sandy.graduate();
console.log("Alan's Grade", alan.grade);
alan.graduate();
//PM Checks
console.log(amy);
console.log(charles);
amy.grade(sandy, "English");
charles.standUp("TechTeam");
amy.debugsCode(alan, "Rust");
