// var click=true
function changecolor(){
    // if(click){
    document.getElementById("box").style.backgroundColor="blue";
    // }else{
    //  document.getElementById("box").style.backgroundColor="brown";
    // }
    // click=!click
    
}

function changecolorout(){
    // if(click){
    // document.getElementById("box").style.backgroundColor="blue";
    // }else{
     document.getElementById("box").style.backgroundColor="brown";
    // }
    // click=!click
    
}


document.getElementById('box').addEventListener('mouseover', changecolor);
document.getElementById('box').addEventListener('mouseout',changecolorout)
