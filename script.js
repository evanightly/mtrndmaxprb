const form = document.querySelector('form')

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

    const [outMin, outRange, outMax] = document.querySelectorAll('tbody td:nth-of-type(even)')
    outMin.innerText = 0 + min
    outRange.innerText = `${min}...${max}`
    outMax.innerText = max
})