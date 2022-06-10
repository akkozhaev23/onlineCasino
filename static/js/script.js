const playBtn = document.querySelector('.btn')
const inp = document.querySelector('.input')
const userNumber = document.querySelector('.userNumber')

playBtn.addEventListener('click', () => {
    if(inp.value !== '' && inp.value <= 5) {
        alert(inp.value)
    } else {
        alert('Choose a number between 1 and 5')
    }

    const obj = {userNumber: userNumber.value}

    fetch('/user', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json'}
    })
})

