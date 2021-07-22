var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-area");
var outputDiv = document.querySelector("#txt-output");

var serverURL="https://api.funtranslations.com/translate/dolan.json"


function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
     console.log("error occured",error);
     alert("Something went wrong")
} 

function dothis(){
    var inputTxt = txtInput.value; 
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
            var translatedTxt = json.contents.translated;
            outputDiv.innerText = translatedTxt;
        })
    .catch(errorHandler)       
};
btnTranslate.addEventListener("click", dothis);