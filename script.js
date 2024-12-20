const decbtn=document.getElementById("dec");
const resetbtn=document.getElementById("reset");
const incbtn=document.getElementById("inc");
const countt=document.getElementById("count");
let c=0;
incbtn.onclick = function(){
    c++;
    countt.textContent=c;
}
decbtn.onclick = function(){
    c--;
    countt.textContent=c;
}
resetbtn.onclick = function(){
    c=0;
    countt.textContent=c;
}