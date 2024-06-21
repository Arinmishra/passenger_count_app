let count = 0

let countEl = document.getElementById("count")

function increment(){
    count += 1
    countEl.innerText = count
}

let saveEl = document.getElementById("pCount")

function save(){
    let result = count + " - "
    saveEl.textContent += result
    countEl.innerText = 0
    count = 0
}