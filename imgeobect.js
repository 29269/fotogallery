let object = [];
console.log(kpopFoto);
// imgeObject funtie aanmaken 
function ImgeObject(name, description) {
    let imgObj = this;
    imgObj.name = name;
    imgObj.description = description;
}

function createObjects() {
    for (let counter = 0; counter < kpopFoto.length; counter++) {
        object.push(new ImgeObject(kpopFoto[counter], counter));
    }
}


function fotoeen(obj) {
    let item = document.createElement('div');
    item.className = 'item';
    let mijnFoto = document.createElement('img');
    mijnFoto.src = obj.name;
    mijnFoto.alt = obj.description;
    mijnFoto.title = obj.description;
    item.append(mijnFoto);
    kader.append(item);
}

function showImage() {
    for (let i = object.length; i > 0; i--) {
        let num = Math.floor(Math.random() * object.length)
        fotoeen(object[num]);
        kpopFoto.splice(num, 1)
    }
}


function createJSON() {
    alert();
    let id = document.getElementById('json');

    let applicationData = "application/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(object));
    console.log(id);
    let json = document.createElement('a');
    json.href = 'data:' + applicationData;
    json.download = 'json.json';
    json.innerHTML = 'Ready to download your json file';

    id.appendChild(json);
}

function requestListener() {
    let obj = JSON.parse(this.responseText);
    object = obj.slice();
}

function createGetReguest() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", requestListener);
    request.open("GET", data / json.json, false);
    request.send();
}

///met i-- kan ik beginnen van beneden naar boven 

createObjects();
createJSON();
showImage();