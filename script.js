const gameContainer = document.getElementById('game-container');
const ball = document.getElementById('ball');
const player = document.getElementById('player');

let score = 0;

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
        player.style.left = parseInt(player.style.left) + 10 + 'px';
    } else if (event.code === 'ArrowLeft') {
        player.style.left = parseInt(player.style.left) - 10 + 'px';
    }
});

function moveBall() {
    let ballTop = parseInt(ball.style.top);
    let ballLeft = parseInt(ball.style.left);

    if (ballTop >= gameContainer.clientHeight - ball.clientHeight) {
        if (ballLeft >= parseInt(player.style.left) && ballLeft <= parseInt(player.style.left) + player.clientWidth) {
            score++;
            document.getElementById('score').innerText = 'Score: ' + score;
        } else {
            alert('Game Over! Your score is: ' + score);
            location.reload();
        }
    } else {
        ball.style.top = ballTop + 5 + 'px';
        ball.style.left = ballLeft + 5 + 'px';
    }
}

setInterval(moveBall, 50);