const buy = document.querySelectorAll(".buy");
const overlay = document.getElementById("overlay");
const escapes = document.getElementById("escape");
icon_heads = document.getElementById("icon-heads");
buy.forEach(function(item){
    item.addEventListener("click", ()=>{
        overlay.style = "display:block;";
    })
})
escapes.addEventListener("click", ()=>{
    overlay.style = "display:none;";
    icon_heads.style = "display:none;";
})
