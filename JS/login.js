var email = ""
var password = ""
const escapess = document.getElementById("escapes");
escapess.addEventListener("click", ()=>{
    icon_heads.style = "display:none;";
})
function getEmail(){
    email = document.querySelector(".eemail").value;
}
function getPassword(){
    password = document.querySelector(".password").value;
}
const button = document.querySelector(".button");
button.addEventListener("click", ()=>{
    var alert1 = document.getElementById("alert1");
    var alert2 = document.getElementById("alert2");
    password1 = document.querySelector(".password");
    email1 = document.querySelector(".eemail");
    var k = 0;
    var j = 0;
    var count_email = 0;
    var count_password = 0;

    if(password.length < 1){
        count_password++;
        alert2.style = "display:block;"
        password1.style = "border:2px solid red;";
    }
    else{
        alert2.style = "display:none;";
        password1.style = "border:none;";
    }
    if(email.length < 1){
        count_email++;
        alert1.style = "display:block;"
        email1.style = "border:2px solid red;"
    }
    else{
        if(email[0] == "@" || email[0] == "."){
            count_email++;
            alert1.style = "display:block;"
            email1.style = "border:2px solid red;";
        }
        else if(email[email.length-1] == "@" || email[email.length-1] == "."){
            count_email++;
            alert1.style = "display:block;";
            email1.style = "border:2px solid red;";
        }
        else{
            alert1.style = "display:none;";
            email1.style = "border:none";
        }
        for(var i = 0; i < email.length-1; i++){
            if(email[i] == "@"){
                k++;
            }
            else if(email[i] =="."){
                j++;
            }
        }
        if(k !=1){
            alert1.style = "display:block;"
            email1.style = "border:2px solid red;"
        }
        if(j < 1){
            alert1.style = "display:block;"
            email1.style = "border:2px solid red;"
        }
        if(k == 1 && j >= 1 && count_email == 0 && count_password == 0){
            window.location.href = "main.html";
        }
    }
})
setInterval(getEmail, 100);
setInterval(getPassword, 100);
