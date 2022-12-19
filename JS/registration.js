var email = ""
var password = ""
var names = "";
var number = "";
const escapes = document.getElementById("escape");
escapes.addEventListener("click", ()=>{
    icon_heads.style = "display:none;";
})
function getEmail(){
    email = document.querySelector(".eemail").value;
}
function getPassword(){
    password = document.querySelector(".password").value;
}
function getName(){
    names = document.querySelector(".name").value;
}
function getNumber(){
    number = document.querySelector(".mobile-phone").value;
}
const button = document.querySelector(".button");
button.addEventListener("click", ()=>{
    var alert1 = document.getElementById("alert1");
    var alert2 = document.getElementById("alert2");
    var alert3 = document.getElementById("alert3");
    var alert4 = document.getElementById("alert4");
    password1 = document.querySelector(".password");
    email1 = document.querySelector(".eemail");
    names1 = document.querySelector(".name");
    number1 = document.querySelector(".mobile-phone");
    var k = 0;
    var j = 0;
    var count_email = 0;
    var count_password = 0;
    var count_name = 0;
    var count_number = 0;
    if(names.length < 1){
        count_name++;
        alert3.style = "display:block;"
        names1.style = "border:2px solid red;";
    }
    else{
        alert3.style = "display:none;";
        names1.style = "border:none;";
    }
    if(number.length < 11){
        count_number++;
        alert4.style = "display:block;"
        number1.style = "border:2px solid red;";
    }
    else{
        alert4.style = "display:none;";
        number1.style = "border:none;";
    }
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
        if(k == 1 && j >= 1 && count_email == 0 && count_password == 0 && count_name == 0 && count_number == 0){
            window.location.href = "main.html";
        }
    }
})
setInterval(getEmail, 100);
setInterval(getPassword, 100);
setInterval(getName, 100);
setInterval(getNumber, 100);