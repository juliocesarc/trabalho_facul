const btn = document.getElementById('btn')

function handler() {
    const largura = parseFloat(document.getElementById('largura').value)
    const comprimento = parseFloat(document.getElementById('comprimento').value)

    alert(`A área corresponde a: ${(largura * comprimento).toFixed(2)}`)
}

btn.addEventListener('click', handler)

