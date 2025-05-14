let Num = document.getElementById('txtnum')
let lista = document.querySelector('select#numtab')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() {
    if (isNumero(Num.value) && !inLista(Num.value, valores)) {
        
        let item = document.createElement('option')
        item.text = `O valor ${valores} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado!')
    }
}
