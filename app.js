
!(function(d){
var Cate3 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
RequestData(Cate3);

//var Cate2 = "http://localhost:8000/api/v1/titles/?genre=Biography&sort_by=-imdb_score"
//RequestData(Cate2);



var FilmsData = []

function RequestData(url){
result = fetch(url)

.then(result => result.json())
.then(function(result){

    for (var i = 0; i < result.results.length; i++){
        FilmsData.push(result.results[i])
}

if (result['next'] != null){
    nextpage = result['next'];
    nextpage = fetch(nextpage)
.then(nextpage =>nextpage.json())
.then(function(nextpage){
for (var i = 0; i < nextpage.results.length; i++){
    if (FilmsData.length<7){
        FilmsData.push(nextpage.results[i])
}else break
}


var itemClassName = document.getElementById("boxCatego3Movies").getElementsByTagName('img');

totalItems = itemClassName.length;

BoxFilmtest_initial = 0,
moving = true;


setEventListeners();

function setEventListeners() {
    var next = d.getElementsByClassName('BtnD')[0];
    var prev = d.getElementsByClassName('BtnG')[0];
    next.addEventListener('click', moveNext);
//prev.addEventListener('click', movePrev);
}

function moveNext(){
console.log('gauche');
}


DataFilm(FilmsData)
function DataFilm(result){
    for (var i = 0; i < result.length; i++){
    imageMovie(result[i], [i]);
}
}

function imageMovie(result, i){
    x = result['image_url'];
    id = result['id'];

    var imgMovi = document.getElementById("boxCatego3Movies").getElementsByTagName('img');
    imgMovi[i].setAttribute("src",x);
    imgMovi[i].setAttribute("id",id);
    imgMovi[i].addEventListener('click',popUpPicture);


function popUpPicture(){
    var blockCate = document.getElementsByClassName("categorie3");
    var firstelem = document.getElementById("Categorie3");
    var popUpBox = document.getElementsByClassName("popUpBox");
    blockCate[0].insertBefore(popUpBox[0], firstelem);
    popUpBox[0].style.display = "flex";
    clearBox();
    nomFilm(result);
    PochetteFilm(imgMovi[i]);
    categorie(result);
    sortieFilm(result);
    score(result);
    realisateur(result);
    acteurs(result);
    tempsFilm(result);
    paysOrigine(result);
    BoxOffice(result);
    resume(result);
    closeBtn = document.getElementById("clsbtn");
    closeBtn.addEventListener('click',closes);
    }

function nomFilm(result){
    titre = result['title'];
    var nomfilm = document.getElementById("NomFilm");
    nomfilm.innerHTML += titre;
}

function clearBox(){
    var nomfilm = document.getElementById("NomFilm");
    nomfilm.innerHTML = "Nom du Film : ";
    var categorie = document.getElementById("Categorie");
    categorie.innerHTML = "Catégorie : ";
    var sortieFilm = document.getElementById("sortieFilm");
    sortieFilm.innerHTML = "Sortie Film : ";
    var score = document.getElementById("score");
    score.innerHTML = "Score : ";
    var acteurs = document.getElementById("acteurs");
    acteurs.innerHTML = "Acteurs : ";
    var resfilm = document.getElementById("tempsFilm");
    resfilm.innerHTML = "Durée du Film en minutes :";
    var paysfilm = document.getElementById("paysOrigine");
    paysfilm.innerHTML = "Pays d'origine : ";
    var boxOffice = document.getElementById("BoxOffice");
    boxOffice.innerHTML = "Résultat box office : ";
    var resumeFilm = document.getElementById("resume");
    resumeFilm.innerHTML = "Résumé Film : ";

}

function PochetteFilm(result){
    pochetteFilm = result['src'];
    var picture = document.getElementById("PochetteFilm");
    picture.setAttribute("src",pochetteFilm);
}

function categorie(result){
    genres= result['genres'];
    var categorie = document.getElementById("Categorie");
    categorie.innerHTML += genres;
}

function sortieFilm(result){
    year = result['year'];
    var sortieFilm = document.getElementById("sortieFilm");
    sortieFilm.innerHTML += year;
}

function score(result){
    imdbSocre = result['imdb_score'];
    var score = document.getElementById("score");
    score.innerHTML += imdbSocre;
}

function realisateur(result){
    directors = result['directors'];
    var realisateur = document.getElementById("realisateur");
    realisateur.innerHTML += directors;
}

function acteurs(result){
    actors = result['actors'];
    var acteurs = document.getElementById("acteurs");
    acteurs.innerHTML += actors;
}

function tempsFilm(result){
    urlImdb = result['url'];
    res = fetch(urlImdb)
    .then(res => res.json())
    .then(res = function(res){
    duree = res['duration'];
    var resfilm = document.getElementById("tempsFilm");
    resfilm.innerHTML += duree;

})
}

function paysOrigine(result){
    urlImdb = result['url'];
    res = fetch(urlImdb)
    .then(res => res.json())
    .then(res = function(res){
        countries = res['countries'];
        var paysfilm = document.getElementById("paysOrigine");
        paysfilm.innerHTML += countries;
})
}

function BoxOffice(result){
    urlImdb = result['url'];
    res = fetch(urlImdb)
    .then(res => res.json())
    .then(res = function(res){
        reviewcritics = res['reviews_from_critics'];
        var boxOffice = document.getElementById("BoxOffice");
        boxOffice.innerHTML += reviewcritics;
})
}

function resume(result){
urlImdb = result['url'];
res = fetch(urlImdb)
.then(res => res.json())
.then(res = function(res){
    resumedescription = res['long_description'];
    var resumeFilm = document.getElementById("resume");
    resumeFilm.innerHTML += resumedescription;
})
}

function closes(){
pop = document.getElementsByClassName('popUpBox');
pop[0].style.display = "none";
}

}
}
)
}
}
)
}
}(document));

//var imgMovie = document.getElementById("boxCatego3Movies").getElementsByTagName('img');
//imgMovie[i].setAttribute("src",x);
//imgMovie[i].setAttribute("id", "(cela va être une var, la var va permettre de cliquer sur le film et ouvrir dynamiquement le modal et les infos");

/////affiche 4 - retour liste /
/////à un moment bloquer à droite et bloquer à gauche/


//function showbtn(){
//let popUpBox = document.getElementById("popUpBox");
//popUpBox.style.display = "block";
//popUpBox.style.display = "flex" ;
//document.getElementById('btn').style.display = "none";
//
//}
//
//function closes(){
//document.getElementById('popUpBox').style.display = "none";
//}




