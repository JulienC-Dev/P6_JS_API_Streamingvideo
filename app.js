!(function(d){

var bestmovie = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
var bestmoviebox = document.getElementById("boxBestFilm");
RequestData(bestmovie, bestmoviebox);

var catemieuxNote = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
var catebestmoviebox = document.getElementById("boxFilmMovies");
RequestData(catemieuxNote, catebestmoviebox);

var Cate1 = "http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score";
var cate1box = document.getElementById("boxCatego1Movies");
cateSciFi = document.getElementById("Categorie1");
cateSciFi.innerHTML += ": Sci-Fi";
RequestData(Cate1, cate1box);

var Cate2 = "http://localhost:8000/api/v1/titles/?genre=Animation&sort_by=-imdb_score";
var cate2box = document.getElementById("boxCatego2Movies");
cateAnimation = document.getElementById("Categorie2");
cateAnimation.innerHTML += ": Animation";
RequestData(Cate2, cate2box);

var Cate3 = "http://localhost:8000/api/v1/titles/?genre=Biography&sort_by=-imdb_score";
var cate3box = document.getElementById("boxCatego3Movies");
cateBiography = document.getElementById("Categorie3");
cateBiography.innerHTML += ": Biography";
RequestData(Cate3, cate3box);


function RequestData(url,box){
requestMovies = fetch(url)

.then(requestMovies => requestMovies.json())
.then(requestMovies => {


var ObjectFilmsData = [];


for (var i = 0; i < requestMovies.results.length; i++){
    ObjectFilmsData.push(requestMovies.results[i])
}

if (requestMovies['next'] != null){
    RequestNextPage = requestMovies['next'];
    RequestNextPage = fetch(RequestNextPage)
    .then(RequestNextPage =>RequestNextPage.json())
    .then(RequestNextPage => {
        for (var i = 0; i < RequestNextPage.results.length; i++){
            if (ObjectFilmsData.length<7){
                ObjectFilmsData.push(RequestNextPage.results[i])
            }
            }
        return ObjectFilmsData;
        })
    }
return RequestNextPage

})
requestMovies.then(ObjectFilmsData => {

ExtractMovie(ObjectFilmsData)

function ExtractMovie(ObjectFilmsData){

    boxImgs = box.getElementsByTagName('img');
    BestmovieBox = document.getElementById("boxBestFilm");
    if (box == BestmovieBox){
    btn = document.getElementById("btn1");
    var titre = document.getElementById("BestMovie");
    var resumeTitle = document.getElementById("resumeTitle");
    FilmData = ObjectFilmsData[0];
    boxImg = boxImgs[0];
    fetch(FilmData.url)
    .then(response => response.json())
    .then(data => {
        nomfilm = data['title'];
        titre.innerHTML += nomfilm;
        resumeFilm = data['description'];
        resumeTitle.innerHTML += resumeFilm;
        setUpImage(FilmData,boxImg)
        btn.addEventListener('click', function(){
        popUpPicture(data, boxImg)
        })
        }
     )
     }
    else{
    for (var i = 0; i < ObjectFilmsData.length; i++){
        setUpImage(ObjectFilmsData[i], boxImgs[i]);
    }
    setEventListeners(ObjectFilmsData, boxImgs);
    }
}


function setEventListeners(ObjectFilmsData, boxImgs) {
    var next = box.getElementsByClassName('BtnD')[0];
    var prev = box.getElementsByClassName('BtnG')[0];

    next.addEventListener('click', function(){
    moveNext(ObjectFilmsData, boxImgs);
    });
    prev.addEventListener('click', function(){
    movePrev(ObjectFilmsData, boxImgs);
    });
}

function moveNext(ObjectFilmsData, boxImgs){
    var ObjetfilmsGauche = [];
    ObjetfilmsGauche = ObjectFilmsData.slice(3,7);
    for (var i = 0; i < ObjetfilmsGauche.length; i++){
        setUpImage(ObjetfilmsGauche[i], boxImgs[i]);
    }
}


function movePrev(ObjectFilmsData, boxImgs){
    var ObjetfilmsDroite = [];
    ObjetfilmsDroite = ObjectFilmsData.slice(0,4);

    for (var i = 0; i < ObjetfilmsDroite.length; i++){
        setUpImage(ObjetfilmsDroite[i], boxImgs[i]);
    }
}


function setUpImage(filmData, boxImg){
    imageMovie = filmData['image_url'];
    idMovie = filmData['id'];

    if (boxImg != null){
    boxImg.setAttribute("src",imageMovie);
    boxImg.setAttribute("id",idMovie);
    boxImg.addEventListener('click', function(){
    fetch(filmData.url)
    .then(response => response.json())
    .then(data => popUpPicture(data, boxImg))
    });
    }
}


function popUpPicture(filmData, boxImg){
    boxCategorie = box.parentNode;
    if (filmData.id ==boxImg.id){
    titleBox = boxCategorie.getElementsByTagName('h1');
    var popUpBox = document.getElementsByClassName("popUpBox");
    boxCategorie.insertBefore(popUpBox[0], titleBox[0]);
    popUpBox[0].style.display = "flex";
    boxBestFilm = document.getElementById("boxBestFilm");
    var btnPlay = document.getElementById("btn1");
    btnPlay.style.display ="none";
    if (box == boxBestFilm){
    btnPlay.style.display ="none";
    }

    clearBox();
    nomFilm(filmData);
    PochetteFilm(filmData);
    categorie(filmData);
    sortieFilm(filmData);
    ratedFilm(filmData);
    scoreimdb(filmData);
    realisateur(filmData);
    acteurs(filmData);
    tempsFilm(filmData);
    paysOrigine(filmData);
    BoxOffice(filmData);
    resumeDescription(filmData);

    closeBtn = document.getElementById("clsbtn");
    closeBtn.addEventListener('click',closes);

    }
    else {
    }
}

function clearBox(){
    var nomfilm = document.getElementById("NomFilm");
    nomfilm.innerHTML = "Nom du Film : ";
    var categorie = document.getElementById("Categorie");
    categorie.innerHTML = "Catégorie : ";
    var sortieFilm = document.getElementById("sortieFilm");
    sortieFilm.innerHTML = "Sortie Film : ";
    var rated = document.getElementById("rated");
    rated.innerHTML = "Rated : ";
    var scoreimbd = document.getElementById("scoreimbd");
    scoreimbd.innerHTML = "Score imbd : ";
    var realisateur = document.getElementById("realisateur");
    realisateur.innerHTML = "Réalisateur : ";
    var acteurs = document.getElementById("acteurs");
    acteurs.innerHTML = "Acteurs : ";
    var tempsfilm = document.getElementById("tempsFilm");
    tempsfilm.innerHTML = "Durée du Film en minutes : ";
    var paysfilm = document.getElementById("paysOrigine");
    paysfilm.innerHTML = "Pays d'origine : ";
    var boxOffice = document.getElementById("BoxOffice");
    boxOffice.innerHTML = "Résultat box office : ";
    var resumeFilm = document.getElementById("resume");
    resumeFilm.innerHTML = "Résumé Film : ";

}

function PochetteFilm(filmData){
    pochetteFilm = filmData['image_url'];
    var picture = document.getElementById("PochetteFilm");
    picture.setAttribute("src",pochetteFilm);
}

function nomFilm(filmData){
    titre = filmData['title'];
    var nomfilm = document.getElementById("NomFilm");
    nomfilm.innerHTML += titre;
}

function categorie(filmData){
    genres= filmData['genres'];
    var categorie = document.getElementById("Categorie");
    categorie.innerHTML += genres;
}

function sortieFilm(filmData){
    year = filmData['year'];
    var sortieFilm = document.getElementById("sortieFilm");
    sortieFilm.innerHTML += year;
}

function ratedFilm(filmData){
    rated = filmData['rated'];
    var ratedd = document.getElementById("rated");
    ratedd.innerHTML += rated;
}

function scoreimdb(filmData){
    imdbSocre = filmData['imdb_score'];
    var score = document.getElementById("scoreimbd");
    score.innerHTML += imdbSocre;
}

function realisateur(filmData){
    directors = filmData['directors'];
    var realisateur = document.getElementById("realisateur");
    realisateur.innerHTML += directors;
}

function acteurs(filmData){
    actors = filmData['actors'];
    var acteurs = document.getElementById("acteurs");
    acteurs.innerHTML += actors;
}

function tempsFilm(filmData){
    dureFilm = filmData['duration'];
    tempsfilm = document.getElementById("tempsFilm");
    tempsfilm.innerHTML += dureFilm;
}

function paysOrigine(filmData){
    countries = filmData['countries'];
    var paysfilm = document.getElementById("paysOrigine");
    paysfilm.innerHTML += countries;
}

function BoxOffice(filmData){
    reviewcritics = filmData['worldwide_gross_income'];
    var boxOffice = document.getElementById("BoxOffice");
    boxOffice.innerHTML += reviewcritics;
}

function resumeDescription(filmData){
    resumedescription = filmData['long_description'];
    var resumeFilm = document.getElementById("resume");
    resumeFilm.innerHTML += resumedescription;
}

function closes(){
pop = document.getElementsByClassName('popUpBox');
pop[0].style.display = "none";
var btnPlay = document.getElementById("btn1");
btnPlay.style.display ="block";
}
})
}
}(document));