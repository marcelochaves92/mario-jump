const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const gameover = document.querySelector(".telagameover")
const reiniciar = document.querySelector(".reiniciar")
const refreshButton = document.querySelector('.refresh-button');
const pontuacao = document.querySelector("#pontuacao")

const refreshPage = () => {
    location.reload();
}

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

var count = 0

function changeContador() {
    count += 1
    setValue(count)
}

function setValue(value) {
    document.querySelector('#pontuacao').innerHTML = value
}

// const loop = setInterval(() => {
//     const pipePosition = pipe.offsetLeft;
//     const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
//     const cloudPosition = clouds.offsetLeft
//     if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
//         pipe.style.animation = 'none';
//         pipe.style.left = `${pipePosition}px`;

//         mario.style.animation = 'none';
//         mario.style.bottom = `${marioPosition}px`;

//         mario.src = './images/game-over.png';
//         mario.style.width = '75px';
//         mario.style.marginLeft = '50px';

//         gameover.style.display = 'inline-block';
//         refreshButton.style.display = 'inline-block';
//         pontuacao.style.display = 'inline-block'
//         clouds.style.animation = 'none';
//         clouds.style.left = `${cloudPosition}px`;
//         return clearInterval(loop);
//     }
//     console.log(pipePosition)
//     pipePosition <= 120 && clearInterval(loop)
// }, 10);

let loop

function restart() {
    console.log(1)
    loop = makeInterval()
}

const makeInterval = () => {
    return setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudPosition = clouds.offsetLeft
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            gameover.style.display = 'inline-block';
            refreshButton.style.display = 'inline-block';
            pontuacao.style.display = 'inline-block'
            clouds.style.animation = 'none';
            clouds.style.left = `${cloudPosition}px`;
            return clearInterval(loop);
        }
        if (pipePosition <= 120) {
            clearInterval(loop);
            changeContador();
            restart();
        }
    }, 10);
}

restart()

document.addEventListener('keydown', jump);
refreshButton.addEventListener('click', refreshPage)
setValue(0)