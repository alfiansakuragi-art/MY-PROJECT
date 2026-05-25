const hasil = document.getElementById("hasil")
const foto = document.getElementById("foto")
const pilihan = document.getElementById("pilihan")
const batu = document.getElementById("batu")
const gunting = document.getElementById("gunting")
const kertas = document.getElementById("kertas")
const menang = document.getElementById("menang")
const kalah = document.getElementById("kalah")
const main = document.getElementById("main")

let win = 0
let lose = 0

const botChoice = [
    {
        type: "kertas",
        src: "LUNA/luna-fivehit.png"
    },
    {
        type: "gunting",
        src: "LUNA/luna-peacehit.png"
    },
    {
        type: "batu",
        src: "LUNA/luna-rockhit.png"
    }
]

main.addEventListener("click", () => {
    window.location.reload()
})



batu.addEventListener("click", () => {
    const random = botChoice[~~(Math.random() * botChoice.length)];
    foto.src = random.src;
    pilihan.innerHTML = `kamu memilih: batu, <br><br> luna memilih: ${random.type}`

    if (random.type === "batu") {
        hasil.textContent = "SERI"
        hasil.style.backgroundColor = "white"
    } else if (random.type === "kertas") {
        lose++
        kalah.textContent = `kalah: ${lose}`
        hasil.textContent = "KAMU KALAH"
        hasil.style.backgroundColor = "red"
    } else {
        win++
        hasil.textContent = "KAMU MENANG"
        hasil.style.backgroundColor = "green"
        menang.textContent = `menang: ${win}`
    }
    gameOver()
})
gunting.addEventListener("click", () => {
    const random = botChoice[~~(Math.random() * botChoice.length)];
    foto.src = random.src;
    pilihan.innerHTML = `kamu memilih: gunting, <br><br> luna memilih: ${random.type}`

    if (random.type === "batu") {
        lose++
        hasil.textContent = "KAMU KALAH"
        kalah.textContent = `kalah: ${lose}`
        hasil.style.backgroundColor = "red"
    } else if (random.type === "kertas") {
        win++
        hasil.textContent = "KAMU MENANG"
        hasil.style.backgroundColor = "green"
        menang.textContent = `menang: ${win}`
    } else {
        hasil.textContent = "SERI"
        hasil.style.backgroundColor = "white"
    }
    gameOver()
})
kertas.addEventListener("click", () => {
    const random = botChoice[~~(Math.random() * botChoice.length)];
    foto.src = random.src;
    pilihan.innerHTML = `kamu memilih: kertas, <br><br> luna memilih: ${random.type}`

    if (random.type === "batu") {
        win++
        hasil.textContent = "KAMU MENANG"
        menang.textContent = `menang: ${win}`
        hasil.style.backgroundColor = "green"
    } else if (random.type === "kertas") {
        hasil.textContent = "SERI"
        hasil.style.backgroundColor = "white"
    } else {
        lose++
        kalah.textContent = `kalah: ${lose}`
        hasil.textContent = "KAMU KALAH"
        hasil.style.backgroundColor = "red"
    }
    gameOver()
})
function gameOver() {
    if (win === 10) {
        foto.src = "LUNA/luna-mad.png"
        hasil.textContent = "KAMU MENANG"
        hasil.style.backgroundColor = "green"
        batu.style.display = "none"
        kertas.style.display = "none"
        gunting.style.display = "none"
        main.style.display = "block"
    } else if (lose === 10) {
        batu.style.display = "none"
        kertas.style.display = "none"
        gunting.style.display = "none"
        main.style.display = "block"
        foto.src = "LUNA/luna-laugh.png"
        hasil.style.backgroundColor = "red"
        hasil.textContent = "KAMU KALAH"
    }

}