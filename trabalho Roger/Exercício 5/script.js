const btn = document.getElementById('btn')

function handler() {
    const diametro = parseFloat(document.getElementById('diametro').value)

    alert(`A área do círculo corresponde a: ${(Math.pow(diametro / 2, 2) * Math.PI).toFixed(2)}`)
}

btn.addEventListener('click', handler)

