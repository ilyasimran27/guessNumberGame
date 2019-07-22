let easyRandom = parseInt(Math.random() * 100);
let mediumRandom = parseInt(Math.random() * 1000);
let hardRandom = parseInt(Math.random() * 10000);
let count = 0;
function easyLevel(){
    document.getElementById("easy").style.display = "inline-block";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";
}
function mediumLevel(){
    document.getElementById("medium").style.display = "inline-block";
    document.getElementById("easy").style.display = "none";
    document.getElementById("hard").style.display = "none";
}
function hardLevel(){
    document.getElementById("hard").style.display = "inline-block";
    document.getElementById("medium").style.display = "none";
    document.getElementById("easy").style.display = "none";
}
function guessTheNumber(button) {
    let getInputValue = "";
    let getInputValue2="";
    let getInputValue3="";
    if (button.id == 1) {
        let getInputValue = document.querySelector("#level1").value;
        if (easyRandom < getInputValue) {
            alert("number is too large :0");
            count += 1;
        }
        else if (easyRandom > getInputValue) {
            alert("number is too small :(");
            count += 1;
        }
        else if (easyRandom == getInputValue) {
            count += 1;
            alert("congrats you win :)  in " + count + " tries");
            count = 0;
        }
    }
    if (button.id == 2) {
        let getInputValue2 = document.querySelector("#level2").value;
        if (mediumRandom < getInputValue2) {
            alert("number is too large :0");
            count += 1;
        }
        else if (mediumRandom > getInputValue2) {
            alert("number is too small :(");
            count += 1;
        }
        else if (mediumRandom == getInputValue2) {
            count += 1;
            alert("congrats you win :)  in " + count + " tries");
            count = 0;
        }
    }
    if (button.id == 3) {
        let getInputValue3 = document.querySelector("#level3").value;
        if (hardRandom < getInputValue3) {
            alert("number is too large :0");
            count += 1;
        }
        else if (hardRandom > getInputValue3) {
            alert("number is too small :(");
            count += 1;
        }
        else if (hardRandom == getInputValue3) {
            count += 1;
            alert("congrats you win :)  in " + count + " tries");
            count = 0;
        }
    }

}
