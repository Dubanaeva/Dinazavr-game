const dina = document.getElementById("dina");
const block = document.getElementById("block");

document.addEventListener("keydown", function(event){
    jump() ;
});
function jump () {
   if (dina.classList != "jump"){
    dina.classList.add("jump")
   }

   setTimeout(function(){
       dina.classList.remove("jump");
}, 300)
}
let isAlive = setInterval(function (){
    let dinaTop = parseInt(window.getComputedStyle(dina).getPropertyValue("top"))
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    if (blockLeft < 50 && blockLeft > 0 && dinaTop >= 140) {
        alert("Game over")
    }
}, 10)  