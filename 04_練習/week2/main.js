// HTML要素を取得する
const buyButtonTea = document.getElementById("buy-button-tea")
const displayItems = document.getElementById("display-items")
// buyButtonTea を押した時の処理
buyButtonTea.onclick = function () {
  if (jihankiMoney >= 100) {
    displayItems.textContent += "🍵"
    jihankiMoney -= 100
    displayjihankimoney.textContent = jihankiMoney
  }
}
let saifu = 1000
let jihankiMoney = 0

const addbutton = document.getElementById("add-button-100")
const displaysaifu = document.getElementById("display-saifu")
const displayjihankimoney = document.getElementById(
  "display-jihanki-money",
)

addbutton.onclick = function () {
  if (saifu >= 100) {
    jihankiMoney += 100
    saifu -= 100
    displayjihankimoney.textContent = jihankiMoney
    displaysaifu.textContent = saifu
  }
}