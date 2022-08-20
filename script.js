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
    } else {
    }
    const output = document.querySelector('.output')
    output.innerText = `Possibilities: Min:${0 + min} Range:{${min}...${max}} Max:${max}`
})