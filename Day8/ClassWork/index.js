document.getElementById("parent").style.backgroundColor="aqua";
document.getElementById("parent").style.border="3px solid red ";
document.getElementById("parent").style.height="300px";
document.getElementById("parent").style.width="500px";
let btn=document.createElement("button");
btn.innerText="submit";
btn.style.backgroundColor="yellowGreen";
btn.style.padding="10px";
btn.style.marginLeft="20px";
document.getElementById("parent").append(btn);
let num=10;
console.log(num);
num=15;
console.log(num);
function myFunction(){
    console.log(num);
}
myFunction();

