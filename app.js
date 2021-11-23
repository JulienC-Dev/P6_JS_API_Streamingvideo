
fetch("http://localhost:8000/api/v1/titles/")
.then(result => result.json())
.then(function(result){
    x = result.results[1]['image_url'];
    var p = document.getElementById("pictureBestMovie");
    p.setAttribute("src", x);
})

//?imdb_score_min=9.6 - score

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




