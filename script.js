let tg = window.Telegram.WebApp
tg.expand()

let cats = {
    Persik: 0,
    Sebastian: 0,
    Markiz: 0,
    Pushinka: 0,
    Huligan: 0,
    Benjamin: 0,
}

let list = document.querySelector('#catlist')

let btnPersik = document.querySelector("#btn1")
let btnSebastian = document.querySelector("#btn2")
let btnMarkiz = document.querySelector("#btn3")
let btnPushinka = document.querySelector("#btn4")
let btnHuligan = document.querySelector("#btn5")
let btnBenjamin = document.querySelector("#btn6")

let username = document.querySelector('#username')
let phone = document.querySelector('#phoneNumber')
let address = document.querySelector('#userAddress')

let name = ''
let phoneNumber = ''
let userAddress = ''

username.onchange = () => {
    name = username.value
}
phone.onchange = () => {
    phoneNumber = phone.value
}
address.onchange = () => {
    userAddress = address.value
}

let resultDiv = document.querySelector("#res")

function getInfo(data) {
    let li = document.createElement('li')
    li.innerHTML = data
    list.appendChild(li)
}

function changeCats(catname, changeName, dictName) {
    cats[dictName] += 1

    list.innerHTML = ""


    if (name != "") {
        getInfo("Ваше имя - " + name)
    }


    if (phoneNumber != "") {
        getInfo("Ваш телефон - " + phoneNumber)
    }
    if (userAddress != "") {
        getInfo("Ваш адрес - " + userAddress)
    }

     for (let cat in cats) {
        getInfo(cat + ":" + cats[cat])
    }

    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("теперь вы обладатель " + changeName)
        tg.MainButton.show()
    }
}

btnPersik.onclick = () => {
    changeCats('Персик', 'Персика', 'Persik')
}
btnSebastian.onclick = () => {
    changeCats('Себастиан', 'Себастиана', 'Sebastian')
}
btnMarkiz.onclick = () => {
    changeCats('Маркиз', 'Маркиза', 'Markiz')
}
btnPushinka.onclick = () => {
    changeCats('Пушинка', 'Пушинки', 'Pushinka')
}
btnHuligan.onclick = () => {
    changeCats('Хулиган', 'Хулигана', 'Huligan')
}
btnBenjamin.onclick = () => {
    changeCats('Бенджамин', 'Бенджамина', 'Benjamin')
}



let btn = document.querySelector("#click")
btn.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Хорошего дня!")
        tg.MainButton.show()
    }
}

Telegram.WebApp.onEvent('mainButtonClicked', function() {
    result = ''
    if (name != "") {
        result += "ваше имя - " + name + "\n"
    }
    if (phoneNumber != "") {
        result += "Ваш телефон - " + phoneNumber + "\n"
    }
    if (userAddress != "") {
        result += "Ваш адрес - " + userAddress + "\n"
    }
    result += "Ваш заказ: " + "\n"
    for (let cat in cats) {
        if (cats[cat] > 0) {
            result += cat + ": " + cats[cat] + "\n"
        }
    }
    tg.sendData(result)
})