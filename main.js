async function randomFacts() {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  const cats = data.fact;

  document.getElementById("facts").innerHTML = "the fact is: " + cats;
  localStorage.setItem("randomFact", cats);
}

const saved = localStorage.getItem("randomFact") || "null";
document.getElementById("facts").innerHTML = "the fact is: " + saved;
