function myFunc(){
    var element= document.getElementById("circle");
    element.addEventListener('click',clickFunc);

}
function clickFunc(){
    var element= document.getElementById("circle");
    var positionLeft=element.offsetLeft;
    element.style.left=positionLeft-10+'px';
    
}
document.addEventListener('DOMContentLoaded',myFunc);