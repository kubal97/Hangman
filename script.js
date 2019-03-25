var passwordsList = [];
passwordsList[0] = "Two wrongs do not make a right";
passwordsList[1] = "The pen is mightier than the sword";
passwordsList[2] = "When in Rome do as the Romans";
passwordsList[3] = "The squeaky wheel gets the grease";
passwordsList[4] = "When the going gets tough the tough get going";
passwordsList[5] = "No man is an island";
passwordsList[6] = "Fortune favors the bold";
passwordsList[7] = "People who live in glass houses should not throw stones";
passwordsList[8] = "Hope for the best but prepare for the worst";
passwordsList[9] = "Better late than never";
passwordsList[10] = "Birds of a feather flock together";
passwordsList[11] = "Keep your friends close and your enemies closer";
passwordsList[12] = "A picture is worth a thousand words";
passwordsList[13] = "There is no such thing as a free lunch";
passwordsList[14] = "There is no place like home";
passwordsList[15] = "Discretion is the greater part of valor";
passwordsList[16] = "The early bird catches the worm";
passwordsList[17] = "Never look a gift horse in the mouth";
passwordsList[18] = "You can not make an omelet without breaking a few eggs";
passwordsList[19] = "God helps those who help themselves";

var password = passwordsList[Math.floor(Math.random()*passwordsList.length)];
password = password.toUpperCase();
var passLength = password.length;
var newPassword = "";
var failsCount = 1;

for(i=0;i<passLength;i++){
    if(password.charAt(i) === " ") newPassword = newPassword + " ";
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
        document.getElementById('image').innerHTML = '<img id="img" src="assets/'+image+'" alt="" />';

        returnPassword();
    }

    if(failsCount === 7){
        document.querySelector(".letters").innerHTML = '<div class="finish"><b>You Failed!</b><br> The password was: '+password+'</div><div class="btn btn-dark" onClick="window.location.reload()">Try again</div>'
    }

    if(newPassword == password){
        document.querySelector(".letters").innerHTML = '<div class="finish"><b>Correct!</b><br> You won with still having '+(8-failsCount)+' lives</div><div class="btn btn-dark" onClick="window.location.reload()">Try again</div>'
    }
}