function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/foto-bebe-m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src','imagens/foto-jovem-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','imagens/foto-adulto-m.jpg')
            } else {
                // Idoso 
                img.setAttribute('src','imagens/foto-idoso-m.jpg')
            }
                
        } else {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/foto-bebe-f.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src','imagens/foto-jovem-f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','imagens/foto-adulto-f.jpg')
            } else {
                // Idoso 
                img.setAttribute('src','imagens/foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)
        img.style.borderRadius = '50%'
    }
}