let count = 0;
let num =document.getElementById('number')

function plus() {
    count++;
    console.log(count)
    num.innerHTML=count;
}
function minus() {
    count--;
    console.log(count)
    num.innerHTML=count;
}

function reset(){
    num.innerHTML="0"
}