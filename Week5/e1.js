function myFunc(){
    var element= document.getElementById("circle");
    element.addEventListener('click',clickFunc);

}
function clickFunc(){
    alert("Element is clicked");
}
document.addEventListener('DOMContentLoaded',myFunc);