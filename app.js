

function showbtn(){
    let popUpBox = document.getElementById("popUpBox");
    popUpBox.style.display = "block";
    document.getElementById('btn').style.display = "none";
}

function closes(){
    document.getElementById('popUpBox').style.display = "none";
}

//# import requests
//# import json
//#
//# reponse_api = requests.get("http://localhost:8000/api/v1/titles/")
//# print(reponse_api.status_code)
//# data = reponse_api.text
//# print(data)
//# parse_json = json.loads(data)
//#

