const students = [
  {
    id: 1,
    name: "Sciffles",
    group: "GRYFFINDOR",
  },

  {
    id: 2,
    name: "Harry",
    group: "RAVENCLAW",
  },

  {
    id: 3,
    name: "Paul",
    group: "SLYTHERIN",
  },

  {
    id: 4,
    name: "kirthana",
    group: "GRYFFINDOR",
  },

  {
    id: 5,
    name: "Max",
    group: "RAVENCLAW",
  },

  {
    id: 6,
    name: "Julie",
    group: "SLYTHERIN",
  },

  {
    id: 7,
    name: "Syam",
    group: "HUFFLEPUFF"
  }
]


// this is for sorting the houses
const studentHouses = ["GRYFFINDOR", "SLYTHERIN", "RAVENCLAW", "HUFFLEPUFF"];


// bringing the cards into the page//
const cardsOnDom = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `<div id="expel" class="card" style = "width:18rem;" >
      <div class="card-body">
      <img class="card-img-top" src="assets/${student.group}.png">
        <h3 class="card-text" id="name">${student.name}</h3>
        <h4 class="card-house" id="group">${student.group}</h4>
        <button class="btn btn-danger " onclick="expelStudent(${student.id})">Expel</button></div></div> `;
  }

  renderToDom("#student-cards", domString);
}


// array to voldermont army


const moldyVoldyStudents = []

// getting the expelled cards to Dom

const cardsOnDomVoldy = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `<div class="card"  style="width:18rem;">
    <img class="card-img-top" src="assets/voldemort.png" style="background-image" >
    <h3 class="card-text" id = "name">${student.name}</h3></div></div>`;
  }

  renderToDom("#expelled-cards", domString);
}


// expelling the cards to moldy voldy army

function expelStudent(id) {
  const expelledStudentIndex = students.findIndex(s => s.id === id);
  var expelledStudent = students[expelledStudentIndex];
  expelledStudent.group = '';
  moldyVoldyStudents.push(expelledStudent);
  students.splice(expelledStudentIndex, 1);
  cardsOnDom(students);
  cardsOnDomVoldy(moldyVoldyStudents);
}


// creating html//
const renderToDom = (divId, htmlToRender) => {
  const studentEl = document.querySelector(divId);
  studentEl.innerHTML = htmlToRender;
  studentEl.innerText;
}


//filtering the cards by group//
const filter = (students, sortHouses) => {
  const filteredStudents = [];
  for (const sorts of students) {
    if (sorts.group === sortHouses) {
      filteredStudents.push(sorts);
    }
  }
  return filteredStudents;
}


// button to sort //

document.querySelector("#all").addEventListener("click", () => {
  cardsOnDom(students);
});

document.querySelector("#gryffindor").addEventListener("click", () => {
  const houseOf = filter(students, "GRYFFINDOR");
  cardsOnDom(houseOf);
});


document.querySelector("#hufflepuff").addEventListener("click", () => {
  const houseOf = filter(students, "HUFFLEPUFF");
  cardsOnDom(houseOf);
});

document.querySelector("#ravenclaw").addEventListener("click", () => {
  const houseOf = filter(students, "RAVENCLAW");
  cardsOnDom(houseOf);
});

document.querySelector("#slytherin").addEventListener("click", () => {
  const houseOf = filter(students, "SLYTHERIN");
  cardsOnDom(houseOf);
});

cardsOnDom(students);


// creating or adding new houses

const addStudentBtn = document.querySelector("#addStudents");
const createStudents = (e) => {
  e.preventDefault();
  var studentName = document.querySelector("#student-name").value;
  if (studentName) {
    const newStudent = {
      id: students.length + 1,
      name: studentName
    }
    var randomNum = getRandomInt(0, 4);
    var randomHouse = studentHouses[randomNum];
    newStudent.group = randomHouse;
    students.push(newStudent);
    cardsOnDom(students);
  }
  document.getElementById('sort-form').reset();
}

addStudentBtn.addEventListener("click", createStudents);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}