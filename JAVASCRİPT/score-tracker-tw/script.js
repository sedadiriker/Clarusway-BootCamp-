const limit = document.getElementById("numbers")
const player1Buton = document.querySelector(".ply1_btn")
const player2Buton = document.querySelector(".ply2_btn")
const reset = document.querySelector(".reset")
let player1Score = document.querySelector(".ply1_score")
let player2Score = document.querySelector(".ply2_score")

const audioElements = document.querySelectorAll('.audio audio');

function playAudio(index) {
    audioElements[index].play();
}

playAudio(2);


player1Score.textContent = "0"
player2Score.textContent = "0"


player1Buton.addEventListener("click", () => {
    if(limit.value == 0) {
        player1Buton.setAttribute('disabled','disabled')
    }else{
        player1Buton.removeAttribute('disabled')
        player1Score.textContent++
        playAudio(1)
        if (parseInt(player1Score.textContent) === parseInt(limit.value)) {
            playAudio(0)
          player1Buton.setAttribute("class", "ply-btn-win")
          player2Buton.setAttribute("class", "ply-btn-lose")
          player1Buton.setAttribute("disabled", "disabled")
          player2Buton.setAttribute("disabled", "disabled")
        }
    }
})

player2Buton.addEventListener("click", () => {
    if(limit.value == 0) {
        player2Buton.setAttribute('disabled','disabled')
    }else{
        player2Buton.removeAttribute('disabled')
        player2Score.textContent++
        playAudio(1)
        if (parseInt(player2Score.textContent) === parseInt(limit.value)) {
            playAudio(0)
            player2Buton.setAttribute("class", "ply-btn-win")
            player1Buton.setAttribute("class", "ply-btn-lose")
            player1Buton.setAttribute("disabled", "disabled")
            player2Buton.setAttribute("disabled", "disabled")
        }
    }
})


reset.addEventListener("click", () => {
    player2Score.textContent = "0"
    player1Score.textContent = "0"
    player1Buton.setAttribute("class", "ply1_btn")
    player2Buton.setAttribute("class", "ply2_btn")
    player1Buton.removeAttribute("disabled")
    player2Buton.removeAttribute("disabled")
    limit.value = "0"  
    playAudio(2)
})

function enableBtons() {
    player1Buton.removeAttribute('disabled')
    player2Buton.removeAttribute('disabled')
}


limit.addEventListener('change',enableBtons)
