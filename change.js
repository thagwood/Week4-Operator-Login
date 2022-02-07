function betterCountdown() {
    // set current time to 10 //
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Disassemble!!!!!";
            }, 1000 * i);
            // else statement for half way //
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Warning 1/2 way to Disassemble, are you sure you want Disassemble!! " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Disassemble in " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);

        }
    }
}
function whileCount() {
    var currtime = 10;
    var i = 1;
    while (i < 12) {

        if (i == 11) {
            // innerHtml is needed to refresh my html file //
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Disassemble!!!!!:)";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning 1/2 way to Disassemble, are you sure you want Disassemble!! " + currTime;
                currtime = currtime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Disassemble in " + currtime;
                currtime = currtime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }// I want to find away to make the page explode after the count down //
          
}

function checkCreds() {
var firstName = document.getElementById("fName").value;
var lastName = document.getElementById("lName").value;
var badgeNumb = document.getElementById("badgeID").value;
var fullName = firstName + " " + lastName;

if (fullName.length > 20 || fullName.length < 2) {
    document.getElementById("loginStatus").innerHTML = "Full name has invalid number of characters!";
} else if (badgeNumb > 999 || badgeNumb < 0) {
    document.getElementById("loginStatus").innerHTML = "Badge ID is  an invalid number!";
} else {
    alert("Access Granted, Welcome " + fullName + "!");
    location.replace("Assignment week4.html");
}
}