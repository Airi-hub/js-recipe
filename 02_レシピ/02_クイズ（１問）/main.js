const choose = function (choiceString) {
  if (choiceString === "ゴリアテ") {
    feedback.textContent =
      "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
  } else if (choiceString === "ゼニガメ") {
    feedback.textContent =
      "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
  } else if (choiceString === "ガニメデ") {
    feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
  }
}
choice1.onclick = function () {
  choose("ゴリアテ")
}
choice2.onclick = function () {
  choose("ゼニガメ")
}
choice3.onclick = function () {
  choose("ガニメデ")
}
