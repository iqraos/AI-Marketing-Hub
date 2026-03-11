function showPopup(title,text){

document.getElementById("popup").style.display="flex";

document.getElementById("popupTitle").innerText=title;

document.getElementById("popupText").innerText=text;

}

function closePopup(){

document.getElementById("popup").style.display="none";

}
