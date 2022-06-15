const playBtn = document.querySelector('.btn')
const userNumber = document.querySelector('.userNumber')

playBtn.addEventListener('click', () => {
    if(userNumber.value === '' || userNumber.value > 6) {
        alert('Введите число от 0 до 5')
    }
    const obj = {userNumber: userNumber.value}

    fetch('/user', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json'}
    })
})

