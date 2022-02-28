function myFunc(){
    var e=document.getElementById("ele1");
    e.firstChild.nodeValue = 'New Heading';
    document.getElementById("ele2").firstChild.nodeValue="New content"

}
function myLoadFunc(){
    var element= document.getElementById("ele1");
    element.addEventListener('click',myFunc);
}
document.addEventListener('DOMContentLoaded',myLoadFunc);