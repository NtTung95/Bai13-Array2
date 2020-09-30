let english = ["dog", "cat", "fish"];
let vietnamese = ["chó", "mèo", "cá"];


function translate1() {
    let wrd = english.indexOf(document.getElementById("words").value);
    if (wrd !== -1) {
        document.getElementById("display").innerHTML = vietnamese[wrd]
    } else {
        document.getElementById("display").innerHTML = "K dịch được"
    }
}