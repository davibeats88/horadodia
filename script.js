function horario(){
    let horario = window.document.getElementById ('horario')
    let img = window.document.getElementById ('img')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    horario.innerHTML = `Agora são ${hora} horas,${minutos} minutos e ${segundos} segundos`
    if (hora >= 0 && hora < 12) {
        img.src = 'dia.jpg'
        document.body.style.background = '#55DCF4'
    }
    else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#F2E816'
    }
    else {
        img.src = 'noite.jpg'
        document.body.style.background = '#0800F5'
    }
}