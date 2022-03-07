function myFunc(){

    document.addEventListener('keydown',clickFunc);

}
function clickFunc(event){
    console.log(event.keyCode);
    var element= document.getElementById("circle");
    var positionLeft=element.offsetLeft;
    var positionTop=element.offsetTop;
    if(event.keyCode==37){
        element.style.left=positionLeft-10+'px';
    }
    else if(event.keyCode==39){
        
        element.style.left=positionLeft+10+'px';
    }
    else if(event.keyCode==38){
        
        element.style.top=positionTop-10+'px';
    }
    else if(event.keyCode==40){
        
        element.style.top=positionTop+10+'px';
    }
    
}
document.addEventListener('DOMContentLoaded',myFunc);