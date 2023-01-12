var score = 0,
    highScore = 0,
    time = 30,
    timer;
var IsPlaying = false;
var timeBoard = document.getElementById('time'),
    scoreBoard = document.getElementById('score'),
    btnStart = document.getElementById('btn');


function fallDown(apple) {
    if (!(IsPlaying && apple instanceof HTMLElement)) {
        return;
    }
    
    apple.setAttribute('data-top', apple.style.top);
    apple.style.top = "380px";
    // เอาคะแนนมาบวก 5
    score = score + 5;
    renderScore();
    //apple ตกถึงพื้น
    hideFallenApple(apple);
}

function hideFallenApple(apple) {
    
    setTimeout(function () {
        apple.style.display = 'none';
       
        restoreFallenApple(apple);
    }, 501);
}

function restoreFallenApple(apple) {
    apple.style.top = apple.getAttribute('data-top');
    setTimeout(function () {
        apple.style.display = 'inline-block';
    }, 501);
}


function renderScore() {
    scoreBoard.innerText = score;
    if (score > highScore) {
        highScore = score;
        document.getElementById('high').innerText = highScore;
    }
}


function startGame() {
    //ปุ่มใช้งานไม่ได้
    btnStart.disabled = "disabled";
    IsPlaying = true;
    renderScore();
   //renderทำงาน
    timer = setInterval(countDown, 1000);
}

function countDown() {
    time = time - 1;
    timeBoard.innerText = time;
    if (time == 0) {
        //clear the interval by using the timer refrence
        clearInterval(timer);
        //call end game
        endGame();
    }
}

function endGame() {
    IsPlaying = false;
    alert("Your score is " + score);
    //reset score+time ก่อนเริ่มเกมใหม่
    score = 0;
    time = 30;
    btnStart.removeAttribute('disabled');
}
