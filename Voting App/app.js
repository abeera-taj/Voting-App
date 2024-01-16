let addCandidate = document.querySelector("#addBtn");
let textInput = document.getElementById("addcandidate");
// let candidatesList = ["Malaika", "Bia", "Khizar", "Ibrahim", "Abdullah"];
let candidatesList = [
  { name: "MQM", image: "mqm.jpg" },
  { name: "TLP", image: "tlp.png" },
  { name: "PPP", image: "peoplesParty.png" },
  { name: "Jamat e Islami", image: "jamatislami.png" },
];

let table = document.getElementById("candidateTable");

// Adding table row for s.no, name, votes
function mainRow() {
  let firstRow = document.createElement("tr");
  let sno = document.createElement("td");
  let party = document.createElement("td");
  let vote = document.createElement("td");
  let space = document.createElement("td");

  sno.textContent = "S.No.";
  party.textContent = "Candidates";
  vote.textContent = "Votes";
  space.textContent = " ";

  firstRow.appendChild(sno);
  firstRow.appendChild(party).style.paddingLeft = "3em";
  firstRow.appendChild(space);
  firstRow.appendChild(vote).style.paddingLeft = "0.5em";
  firstRow.classList.add("firstRow");
  table.appendChild(firstRow);
}

document.addEventListener("DOMContentLoaded", function () {
  mainRow();
  showCandidate();
});
//  mainRow();

addCandidate.addEventListener("click", () => {
  if (textInput.value === "") {
    alert("Write a candidate name!");
  } else {
    // candidatesList.push(textInput.value);
    candidatesList.push({ name: textInput.value, image: "user.jpg" });

    textInput.value = "";
    showCandidate();
  }
});

function showCandidate() {
  table.innerHTML = " ";
  mainRow();
  candidatesList.forEach((can, value) => {
    let tableRow = document.createElement("tr");

    let name = document.createElement("td");
    name.textContent = can.name;

    let index = document.createElement("td");
    index.textContent = value + 1;

    let counter = document.createElement("td");
    counter.textContent = 0;

    let img = document.createElement("img");
    img.src = can.image;
    img.alt = "image";

    tableRow.appendChild(index);
    // tableRow.appendChild(name).style.paddingLeft = "5em";
    tableRow.appendChild(name);

    tableRow.appendChild(img);

    // tableRow.appendChild(counter).style.paddingLeft = "4em";
    tableRow.appendChild(counter);

    table.classList.add("list");
    table.appendChild(tableRow);

    tableRow.addEventListener("click", () => {
      counter.textContent = parseInt(counter.textContent) + 1;
    });
  });
}
