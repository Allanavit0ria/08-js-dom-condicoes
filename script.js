function carregar() {
 var msg = window.document.getElementById('msg')

 var data = new data()
 var hora = data.getHours()
 msg.innerHTML = 'Agora são ${hora} horas.'
}