function Tabuada(){
    let número = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if(número.value.length == 0){
        alert('[ERRO] Você não digitou nenhum número!')
    }else {
        let Num = Number(número.value)
        tab.innerHTML = ''
        for(var c = 1;c <= 10;c++){
           let multi = Num * c
            let item = document.createElement('option')
            item.text = `${Num} x ${c} = ${multi}`
            tab.appendChild(item)
        }
    }
}