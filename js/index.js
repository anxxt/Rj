const putPhoto = (day, img) => {
  if (day >= 1 && day <= 5) {
    img.src = `img/day${day}.avif`
    img.alt = `Ejercicios del día ${day}`
  } else {
    img.remove()
    const newH1 = document.createElement("h1")
    newH1.innerText = "No hay ejercicios para hoy"
    document.body.appendChild(newH1)
  }
}

const day = new Date().getDay()
const img = document.querySelector("img")

putPhoto(day, img)