var password = "My password is simple";
var passLength = password.length;
var newPassword = "";

for(i=0;i<passLength;i++){
    if(password.charAt(i) == " ") newPassword = newPassword + " ";
    else newPassword = newPassword + "-";
}

var letters = new Array(25);
letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "Q";
letters[17] = "R";
letters[18] = "S";
letters[19] = "T";
letters[20] = "U";
letters[21] = "V";
letters[22] = "W";
letters[23] = "X";
letters[24] = "Y";
letters[25] = "Z";


function startGame() {
    document.querySelector('h1').style.display = "none";
    document.getElementById('start').style.display = "none";
    document.getElementById('password').innerHTML = newPassword;
    document.querySelector('.images').style.display = "flex";

    var divContent = "";
    for(i=0;i<26;i++){
        divContent = divContent + '<div class="letter">'+letters[i]+'</div>'

    }
    document.querySelector('.letters').innerHTML = divContent;
}