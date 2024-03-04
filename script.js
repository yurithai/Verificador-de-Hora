function carregar() {
    let msg = document.querySelector("#msg")
    let img = document.querySelector("#img")
    let data = new Date() 
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12)
    {
        img.src = "./Assets/Manhã.jpg" 
        document.body.style.background = "#61a5c2"
    }
    else if (hora < 18) {
        img.src = "./Assets/Tarde.jpg"
        document.body.style.background = "#edafb8"
    }
    else {
        img.src = "./Assets/Noite.jpg"
        document.body.style.background = "#001d3d"
    }
}

