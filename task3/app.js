
const input = document.getElementById('input')

let string = '';
const buttons = document.querySelectorAll('.btn')
Array.from(buttons).forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            input.value = string
        }
        else if (e.target.innerHTML == 'C') {
            string = ''
            input.value = string
        }
        else {
            string = string + e.target.innerHTML;
            input.value = string
        }
    })
})
