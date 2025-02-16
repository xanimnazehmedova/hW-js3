// async function randomFacts() {
//   const response = await fetch("https://catfact.ninja/fact");
//   const data = await response.json();
//   const cats = data.fact;

//   document.getElementById("facts").innerHTML = "the fact is: " + cats;
//   localStorage.setItem("randomFact", cats);
// }
// const saved = localStorage.getItem("randomFact") || null;
// if (saved !== null) {
//   document.getElementById("facts").innerHTML = "the fact is: " + saved;
// }

function addItem() {
  const ul = document.getElementById("ul");
  const li = document.createElement("li");
  li.innerHTML = "new item";
  ul.appendChild(li);
}
////////////////////////////////////////////////////////////////////////

function modulFunc() {
  document.getElementById("moduldiv").style =
    "display: block; align-items: center; width: 100px; background-color:rgb(176, 176, 176); border-color: 1px solid";
}
function closeBtn() {
  document.getElementById("moduldiv").style = "display:none";
}

////////////////////////////////////////////////////////////////////////

let count = 0;
function plus() {
  count++;
  document.getElementById("number").innerHTML = count;
}
function minus() {
  count--;
  document.getElementById("number").innerHTML = count;
}

////////////////////////////////////////////////////////////////////////

function startFunc() {
  const starting = document.getElementById("starting")
  setTimeout
}
