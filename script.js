const form = document.querySelector('form')
const outputs = document.querySelectorAll('tbody td:nth-of-type(even)')
const [outMin, outRange, outMax] = outputs

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let [calc, calc2] = form.elements
    calc = eval(calc.value)
    calc2 = parseInt(calc2.value)
    let [min, max] = [calc2, calc]

    if (calc < calc2) {
        min = calc2
        max = min + calc
    }

    outMin.innerText = 0 + min
    outRange.innerText = `${min}...${max}`
    outMax.innerText = max
})