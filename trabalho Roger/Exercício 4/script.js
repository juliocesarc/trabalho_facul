const btn = document.getElementById('btn')

function handler() {
    const largura = parseFloat(document.getElementById('largura').value)
    const comprimento = parseFloat(document.getElementById('comprimento').value)
    const altura = parseFloat(document.getElementById('altura').value)


    alert(`O volume corresponde a: ${(largura * comprimento * altura).toFixed(2)}`)
}

btn.addEventListener('click', handler)

