let tg = window.Telegram.WebApp
tg.expand()

let btn = document.querySelector("#click")
btn.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Хорошего дня!")
        tg.MainButton.show()
    }
}