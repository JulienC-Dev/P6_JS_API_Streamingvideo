var imdbBestNote = "http://localhost:8000/api/v1/titles/?imdb_score_min=9.6";

test(imdbBestNote);

function test(url){
result = fetch(url)

.then(result => result.json())
.then(result = function(result){
    pictBestMovie(result);
    titles(result);
    PochetteFilm(result);
    NomFilm(result);
    acteurs(result);
    categorie(result);
    sortieFilm(result);
    score(result);
    realisateur(result);
    resume(result);
})}

function pictBestMovie(result){
x = result.results[1]['image_url'];
var picture = document.getElementById("pictureBestMovie");
picture.setAttribute("src", x);
}


function titles(result){
title = result.results[1]['title'];
document.getElementById("BestMovie").innerHTML = title;
}

function PochetteFilm(result){
x = result.results[1]['image_url'];
var picture = document.getElementById("PochetteFilm");
picture.setAttribute("src", x);
}

function NomFilm(result){
x = result.results[1]['title'];
var nomfilm = document.getElementById("NomFilm");
nomfilm.innerHTML += x;
}

function categorie(result){
x = result.results[1]['genres'];
var nomfilm = document.getElementById("Categorie");
nomfilm.innerHTML += x;
}

function sortieFilm(result){
x = result.results[1]['year'];
var nomfilm = document.getElementById("sortieFilm");
nomfilm.innerHTML += x;
}

function score(result){
x = result.results[1]['imdb_score'];
var nomfilm = document.getElementById("score");
nomfilm.innerHTML += x;
}

function realisateur(result){
x = result.results[1]['directors'];
var nomfilm = document.getElementById("realisateur");
nomfilm.innerHTML += x;
}

function acteurs(result){
x = result.results[1]['actors'];
var nomfilm = document.getElementById("acteurs");
nomfilm.innerHTML += x;
}

//function tempsFilm(result){
//x = result.results[1]['tempsFilm'];
//var nomfilm = document.getElementById("#");
//nomfilm.innerHTML += x;
//}

function resume(result){
urlImdb = result.results[1]['imdb_url'];
var nomfilm = document.getElementById("resume");
res = new Request(urlImdb)
console.log(res.text());
}
//result => result.response;

//result.getElementById("GenresAndPlot__OffsetPlot-cum89p-7 iuGjVe")
//.then(result => result.text())
//.then(function(result) {
//console.log(result.body)
//}


//function nextpage(result){
//    res = result['next'];
//    for (var i = 0; i < results.length; i++){
//    }
//}


function showbtn(){
    let popUpBox = document.getElementById("popUpBox");
    popUpBox.style.display = "block";
    document.getElementById('btn').style.display = "none";
}

function closes(){
    document.getElementById('popUpBox').style.display = "none";
}




