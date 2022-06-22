const Fname = prompt('Как вас зовут?')
const playBtn = document.querySelector('.btn')
const userNumber = document.querySelector('.userNumber')
const myResult = document.querySelector('.my-result')

const nameObj = {
    name: Fname
}

fetch('/name', {
    method: 'POST',
    headers: {
        'Content-type' : 'application/json'
    },
    body: JSON.stringify(nameObj)
})

playBtn.addEventListener('click', () => {
    const result = userNumber.value
    let res = result.trim()

    if(res === '' || Number(userNumber.value > 5) || Number(userNumber.value < 0) || isNaN(userNumber.value)) {
        alert('Введите число от 0 до 5')
    } else {
        const obj = {userNumber: userNumber.value}

        fetch('/user', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json'}
        }).then(response => response.json())
            .then(response =>  myResult.innerHTML = `${response.message}`)
            
    }
})

