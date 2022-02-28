function myFunc(){
    var e=document.getElementById("ele1");
    e.firstChild.nodeValue = 'New Heading';
    

}
function myFunc1(){
    document.getElementById("ele2").firstChild.nodeValue = 'New Content';
    

}
function myFunc2(){
    document.getElementById("ele2").firstChild.nodeValue = 'Changed when mouse enter';
    

}
function myFunc3(){
    document.getElementById("ele2").firstChild.nodeValue = 'Changed when mouse Leave';
    

}
function myLoadFunc(){
    var element1= document.getElementById("ele1");
    element1.addEventListener('click',myFunc);
    var element2= document.getElementById("ele2");
    element2.addEventListener('click',myFunc1);
    element2.addEventListener('mouseenter',myFunc2);
    element2.addEventListener('mouseleave',myFunc3);
}
document.addEventListener('DOMContentLoaded',myLoadFunc);