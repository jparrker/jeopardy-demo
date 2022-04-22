initCatRow();
initBoard();

document.querySelector("button").addEventListener("click", buildCategories);

function initCatRow() {
  let catRow = document.getElementById("category-row");
  for (let i = 0; i < 6; i++) {
    let box = document.createElement("div");
    box.className = "clue-box category-box";
    catRow.appendChild(box);
  }
}

function initBoard() {
  let board = document.getElementById("clue-board");

  for (let i = 0; i < 5; i++) {
    let row = document.createElement("div");
    let boxValue = 200 * (i + 1);
    row.className = "clue-row";

    for (let j = 0; j < 6; j++) {
      let box = document.createElement("div");
      box.className = "clue-box";
      box.textContent = "$" + boxValue;
      //box.appendChild(document.createTextNode(boxValue))
      box.addEventListener("click", getClue, false);
      row.appendChild(box);
    }
    board.appendChild(row);
  }
}

function getClue() {
  console.log("hi");
}

function randInt() {
  return Math.floor(Math.random() * 18418 + 1);
}

let catArray = [];

//api jservice.io
function randInt() {
  return Math.floor(Math.random() * 18418 + 1);
}

function buildCategories() {
  const fetchReq1 = fetch(
    `https://jservice.io/api/category?&id=${randInt()}`
  ).then((res) => res.json());

  const fetchReq2 = fetch(
    `https://jservice.io/api/category?&id=${randInt()}`
  ).then((res) => res.json());

  const fetchReq3 = fetch(
    `https://jservice.io/api/category?&id=${randInt()}`
  ).then((res) => res.json());

  const fetchReq4 = fetch(
    `https://jservice.io/api/category?&id=${randInt()}`
  ).then((res) => res.json());

  const fetchReq5 = fetch(
    `https://jservice.io/api/category?&id=${randInt()}`
  ).then((res) => res.json());

  const fetchReq6 = fetch(
    `https://jservice.io/api/category?&id=${randInt()}`
  ).then((res) => res.json());

  const allData = Promise.all([
    fetchReq1,
    fetchReq2,
    fetchReq3,
    fetchReq4,
    fetchReq5,
    fetchReq6,
  ]);

  allData.then((res) => {
    console.log(res);
    catArray = res;
    setCategories(catArray);
  });
}

function setCategories(catArray) {
  let element = document.getElementById("category-row");
  let children = element.children;
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = catArray[i].title;
  }
}
