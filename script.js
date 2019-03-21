var password = "My password is simple";
password = password.toUpperCase();
var passLength = password.length;
var newPassword = "";
var failsCount = 1;

for(i=0;i<passLength;i++){
    if(password.charAt(i) == " ") newPassword = newPassword + " ";
    else newPassword = newPassword + "-";
}

function returnPassword()
{
    document.getElementById("password").innerHTML = newPassword;
}

var letters = new Array(25);
letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


function startGame() {
    document.querySelector('h1').style.display = "none";
    document.getElementById('start').style.display = "none";
    document.querySelector('.images').style.display = "flex";

    var divContent = "";

    for(i=0;i<26;i++){
        var element = "lit" + i;
        divContent = divContent + '<div class="letter hover" onclick="check('+i+')" id="'+element+'">'+letters[i]+'</div>';

    }
    document.querySelector('.letters').innerHTML = divContent;

    returnPassword();
}

String.prototype.setChar = function (place, char) {
    if (place > this.length -1) return this.toString();
    else return this.substr(0, place) + char + this.substr(place+1);
}

function check(id) {

    var correct = false;

    for(i=0; i<passLength; i++)
    {
        if (password.charAt(i) === letters[id]){
            newPassword = newPassword.setChar(i, letters[id]);
            correct = true;
        }
    }

    if (correct === true){
        document.getElementById("lit"+id).classList.add("correct");
        document.getElementById("lit"+id).classList.remove("hover");
        document.getElementById( "lit"+id).disabled = true;

        returnPassword();
    }

    else {
        failsCount++;
        document.getElementById("lit"+id).classList.add("wrong");
        document.getElementById("lit"+id).classList.remove("hover");
        document.getElementById( "lit"+id).disabled = true;

        var image = "Hangman"+ failsCount + ".png";
        document.getElementById('image').innerHTML = '<img src="assets/'+image+'" alt="" />';

        returnPassword();
    }

    if(failsCount === 7){
        document.querySelectorAll(".letter").disabled = true;
        document.querySelector(".letters").innerHTML = '<div class="failed">You Failed! The password is: '+password+'</div>'
    }

    if(newPassword == password){
        document.querySelectorAll(".letter").disabled = true;
        document.querySelector(".letters").innerHTML = '<div class="failed">Nice work! You have still '+(7-failsCount)+' lives</div>'
    }
}