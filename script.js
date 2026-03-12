let seconds = 0
let minutes = 0
let hours = 0

let interval = null // variavel para armazenar o intervalo

function updateDisplay() { // atualiza o display

    document.getElementById("seconds").innerText =
        seconds < 10 ? "0" + seconds : seconds // se for menor que 10, coloca um 0 antes

    document.getElementById("minutes").innerText =
        minutes < 10 ? "0" + minutes : minutes // se for menor que 10, coloca um 0 antes

    document.getElementById("hours").innerText =
        hours < 10 ? "0" + hours : hours // se for menor que 10, coloca um 0 antes

}

function start() { // inicia o cronometro

    if (interval !== null) return  // evita vários intervalos

    interval = setInterval(() => {

        seconds++

        if (seconds === 60) {
            seconds = 0
            minutes++
        }

        if (minutes === 60) {
            minutes = 0
            hours++
        }

        updateDisplay()

    }, 1000)

}

function pause() { // pausa o cronometro
    clearInterval(interval)
    interval = null
}

function reset() { // zera o cronometro

    clearInterval(interval)
    interval = null

    seconds = 0
    minutes = 0
    hours = 0

    updateDisplay()

}