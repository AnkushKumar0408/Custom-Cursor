let main = document.querySelector("#main");
let crsr = document.querySelector("#cursor");

main.addEventListener("mousemove", function(eve){
    crsr.style.left = eve.x + "px";
    crsr.style.top = eve.y + "px";
})
