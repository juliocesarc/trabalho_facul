const btn = document.getElementById('btn')

function handler() {
    const salario = parseFloat(document.getElementById('salary').value)

    let imposto
    if (salario <= 1903.98) {
        imposto = 0
    } else if (salario <= 2826.65) {
        imposto = salario * 0.075
    } else if (salario <= 3751.05) {
        imposto = salario * 0.15
    } else if (salario <= 4664.68) {
        imposto = salario * 0.225
    } else {
        imposto = salario * 0.275
    }

    alert(`O imposto sobre o salário de R$ ${salario.toFixed(2)} é de R$ ${imposto.toFixed(2)}.`);
}

btn.addEventListener('click', handler)

