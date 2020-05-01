function reqem1() {
    let x = document.getElementById("reqem1").value;
    document.getElementById("eded1").innerHTML += x;
}

function reqem2() {
    let x = document.getElementById("reqem2").value;
    document.getElementById("eded1").innerHTML += x;
}
function reqem3() {
    let x = document.getElementById("reqem3").value;
    document.getElementById("eded1").innerHTML += x;
}
function reqem4() {
    let x = document.getElementById("reqem4").value;
    document.getElementById("eded1").innerHTML += x;
}
function reqem5() {
    let x = document.getElementById("reqem5").value;
    document.getElementById("eded1").innerHTML += x;
}
function reqem6() {
    let x = document.getElementById("reqem6").value;
    document.getElementById("eded1").innerHTML += x;
}
function reqem7() {
    let x = document.getElementById("reqem7").value;
    document.getElementById("eded1").innerHTML += x;
}
function reqem8() {
    let x = document.getElementById("reqem8").value;
    document.getElementById("eded1").innerHTML += x;
}
function reqem9() {
    let x = document.getElementById("reqem9").value;
    document.getElementById("eded1").innerHTML += x;
}
function reqem0() {
    let x = document.getElementById("reqem0").value;
    document.getElementById("eded1").innerHTML += x;
}
function faiz(){
    let y = document.getElementById("eded1").innerHTML; 
    document.getElementById("eded1").innerHTML = y + "/100*";
}
function topla(){
    let y = document.getElementById("eded1").innerHTML; 
    document.getElementById("eded1").innerHTML = y + "+";
}
function cix(){
    let y = document.getElementById("eded1").innerHTML; 
    document.getElementById("eded1").innerHTML = y + "-";
}
function vur(){
    let y = document.getElementById("eded1").innerHTML; 
    document.getElementById("eded1").innerHTML = y + "*";
}
function bol(){
    let y = document.getElementById("eded1").innerHTML; 
    document.getElementById("eded1").innerHTML = y + "/";
}
function mus_men(){
    let y = document.getElementById("eded1").innerHTML; 
    document.getElementById("eded1").innerHTML = "-" + y;
}
function vergul(){
    let y = document.getElementById("eded1").innerHTML; 
    document.getElementById("eded1").innerHTML = y + ".";
}
function temizle(){
    document.getElementById("eded1").innerHTML="";
    document.getElementById("eded2").innerHTML="";
}
function hesabla(){
    document.getElementById("eded2").innerHTML= eval(document.getElementById("eded1").innerHTML);
}



