
// we need in some way to store the count
var count = 0;

var countEl = document.getElementById("count-el");
var saveEl = document.getElementById("save-el");
var resetEl = document.getElementById("reset-el");


function  increment() {

    count = count + 1;
    countEl.innerText = count;
    //console.log(count);

}



function adding() {

    count = count += 1;
    countEl.innerText = count;
    //console.log(count)

}





function save() {

    var countSave = count + " - "
    saveEl.innerText += countSave;

    //reset the number
    countEl.innerText = 0;



}

function reset(){

    countEl.innerHTML = 0;
    resetEl.innerText = 0;

}


