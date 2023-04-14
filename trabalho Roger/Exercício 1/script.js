function handler() {
    const value = parseFloat(document.getElementById('valueInMeters').value)
    const inPes = (value * 3.28084).toFixed(2)
    alert(`Resultado: ${inPes} pés`)
}

document.getElementById('btn').addEventListener('click', handler)