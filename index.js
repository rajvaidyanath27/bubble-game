var timer = 60;
var score = 0;
var hitrn = 0;





function runtimer() {
    let clutter = "";

    for (var i = 1; i <= 150; i++) {
        var random = Math.floor(Math.random() * 10);
        clutter += `<div class="bubbles"><span>${random}</span></div>`;
    }

    document.querySelector(".panel-bottom").innerHTML = clutter;




    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#time-reval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector(".panel-bottom").innerHTML = "";
        }
    }, 1000);
}

function getnewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#class-hit").textContent = hitrn; // Corrected typo
}


function increaseScore(){
    score +=10;
    document.querySelector("#score-val").textContent = score;
}

document.querySelector(".panel-bottom").addEventListener("click",function(dets){
    var clicked = Number(dets.target.textContent);
    if(clicked === hitrn){
        getnewhit();
        increaseScore();
        
    }
})


runtimer();
getnewhit();
// increaseScore();

