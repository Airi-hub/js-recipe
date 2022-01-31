const Memoinput = document.getElementById("memo-input")
const Addbutton = document.getElementById("add-button")
const Memocontainer = document.getElementById("memo-container")

Addbutton.onclick = function() {
    // 入力欄の値（テキスト）をとりだして、 text にいれる
    const text = Memoinput.value
  
    // card を作成
    const card = document.createElement("div")
    card.className = "card"
  
    // todo を作成
    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text
  
    // todo を card の中に追加する
    card.append(todo)
  
    // card を container の中に追加する
    Memocontainer.append(card)
  
    // 入力欄を空にする
    Memoinput.value = ""
  }

  