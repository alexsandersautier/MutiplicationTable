const values = document.getElementById('values')
const begin = document.getElementById('number')
const end = document.getElementById('until')
const calculate = () =>{
    const title = document.createElement('h2')
    title.innerText = `Multiplication table by ${begin.value} is`
    values.appendChild(title)
    for(let i = 0; i <= end.value; i++){
        const p = document.createElement('p')
        p.innerText = `${begin.value} X ${i} = ${i * begin.value}`
        values.appendChild(p)
    }
}