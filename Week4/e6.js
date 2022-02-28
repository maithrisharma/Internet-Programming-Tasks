function myFunc(){
    var e=document.getElementById("ele1");
    e.firstChild.nodeValue = 'New Heading';
    

}
function myFunc1(){
    document.getElementById("ele2").firstChild.nodeValue = 'New Content';
    

}
function myLoadFunc(){
    var element1= document.getElementById("ele1");
    element1.addEventListener('click',myFunc);
    var element2= document.getElementById("ele2");
    element2.addEventListener('click',myFunc1);
}
document.addEventListener('DOMContentLoaded',myLoadFunc);