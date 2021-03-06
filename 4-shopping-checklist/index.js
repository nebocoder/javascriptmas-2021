// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

const checklist = document.getElementById("checklist")
const addInput = document.getElementById("add-input")
const addBtn = document.getElementById("add-btn")
const deleteAllBtn = document.getElementById("delete-all-btn")

let items = []
let elementList = ""

let storedItems = JSON.parse(localStorage.getItem("items"))

if (storedItems) {
  items = storedItems
  render()
}

function render() {
  elementList = `<h2 id="list-title">Shopping List:</h2>`
  items.forEach((item) => {
    elementList += `<div class="checklist-item">
              <input type="checkbox" name="item" />
              <label class="strikethrough" for="item">${item}</label>
            </div>`
  })
  checklist.innerHTML = elementList
}

addBtn.addEventListener("click", () => {
  items.push(addInput.value)
  localStorage.setItem("items", JSON.stringify(items))
  addInput.value = ""
  render()
})

deleteAllBtn.addEventListener("click", () => {
  localStorage.clear()
  items = []
  checklist.innerHTML = `<h2 id="list-title">Shopping List:</h2>`
})
