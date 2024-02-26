const title = document.querySelector('h1')
const btn = document.getElementById('btn')
const canvas = document.getElementById("canvas")
const cssGradient = document.getElementById('cssGradient')

btn.addEventListener('click', () => {
    const ctx = canvas.getContext("2d")

    const color1 = document.getElementById("color1").value
    const color2 = document.getElementById("color2").value
    const color3 = document.getElementById("color3").value

    document.getElementById("hexColor1").value = color1
    document.getElementById("hexColor2").value = color2
    document.getElementById("hexColor3").value = color3

    const gradient = ctx.createLinearGradient(0, 0, 250, 0)
    gradient.addColorStop(0, color1)
    gradient.addColorStop(.5, color2)
    gradient.addColorStop(1, color3)

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 300, 200)

    const cssGradient = "linear-gradient(to right, " + color1 + ", " + color2 + ", " + color3 + ")"

    document.getElementById("cssGradient").value = cssGradient
})



function randomGradient() {
    let red1 = Math.floor(Math.random() * 256)
    let green1 = Math.floor(Math.random() * 256)
    let blue1 = Math.floor(Math.random() * 256)

    let red2 = Math.floor(Math.random() * 256)
    let green2 = Math.floor(Math.random() * 256)
    let blue2 = Math.floor(Math.random() * 256)

    let gradient = `linear-gradient(to right, rgb(${red1},${green1},${blue1}), rgb(${red2},${green2},${blue2}))`

    return gradient
}

setInterval(function() {
    title.style.backgroundImage = randomGradient()
}, 1000)
