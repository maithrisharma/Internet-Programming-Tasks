function myFunc(){
    var e=document.getElementById("ele1");
    e.firstChild.nodeValue = 'New Heading';
    document.getElementById("ele2").firstChild.nodeValue="New content";

}
document.addEventListener('DOMContentLoaded',myFunc);