window.onload=function(){
    var board=document.querySelector('.board-js');
board.addEventListener('click',addX);
btn.addEventListener('click',clear);
};
var centinel = true;
function addX(event){
    if(centinel)
        event.target.textContent='X';
    else
        event.target.textContent='O';
        centinel=!centinel;
}

 /*evento para limpiar el juego*/
function clear(event) {
       location.reload();
}