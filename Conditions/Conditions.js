function guessingGame(num){
    var correctNum = (Math.floor(Math.random() * 10)).toString();
    if(num.toString() === correctNum){
        document.getElementById("result").innerHTML = `Correct! The number was ${correctNum}!`;
    } else {
        document.getElementById("result").innerHTML = `Incorrect! The number was ${correctNum}!`;
    }

}
    
//document.getElementById("gameButton").onclick = guessingGame(document.getElementById("user-input"));