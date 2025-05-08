function Contar() {
    let inicio = document.querySelector('input#inc')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let res = document.querySelector('div#res')
    if (inicio.value == 0 || fim.value== 0 || passo.value.lenght == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = '<p>Impossível contar!</p>'
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = 1; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
         res.innerHTML += `\u{1F3C1}`    
    }
}