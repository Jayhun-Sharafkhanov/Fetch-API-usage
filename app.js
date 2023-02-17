//Ilk once Text data button-a event listener asagidaki kimi elave edirik.
document.querySelector("#button1").addEventListener("click", getTextFile);

//Indi ise eyni prossesi Json data button ucun edeceyik.
document.querySelector("#button2").addEventListener("click", getJSON);

// Ve eynıyle eyni prossesi API  button ucun edeceyik.
document.querySelector("#button3").addEventListener("click", getAPI);



//getTextFile funksiyasi yaradaraq Fetch API istifade etmeye baslayaq
function getTextFile() {
  fetch("textfile.txt")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      document.getElementById("output").innerHTML += data;
    });
}



//getJSON funksiyasi yaradaraq Fetch API istifade edeceyik.
function getJSON() {
  fetch("simple.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (simple) {
      let output = "<ul>";
      simple.forEach(function (simple) {
        output += `<li> Basliq ${simple.title} - Icerdeki ${simple.body} </li>`;
      });
      output += "</ul>";
      document.getElementById("output").innerHTML += output;
    });
}



//getAPI funksiyasi yaradaraq Fetch API vasitesiyle GITHUB-dan goturduymuz API den bıze userlerı verecek.
function getAPI() {
  fetch("https://api.github.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      let output = "<ul>";
      users.forEach(function (users) {
        output += `<li> Istifadeci adi:  ${users.login}  </li>`;
      });
      output += "</ul>";
      document.getElementById("output").innerHTML += output;
    });
}
