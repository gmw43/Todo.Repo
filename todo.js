let input = document.getElementById('input')
let btn = document.getElementById('btn')
let empty = []

btn.addEventListener('click', addTask)

function addTask() {
  let task = input.value.trim()
  if (task !== '') {
    empty.push(task)
    ListDisplay()
    input.value = ''
  } else {
    alert('Please add a task')
  }
}

function deleteItem(index) {
  empty.splice(index, 1)
  ListDisplay()
}

function editItem(index) {
  input.value = empty[index]
  btn.textContent = 'Update'
  btn.removeEventListener('click', addTask)
  btn.onclick = function () {
    empty[index] = input.value
    ListDisplay()
    input.value = ''
    btn.textContent = 'Add Todo'
    btn.onclick = addTask
  }
}

function ListDisplay() {
  let display_list = document.getElementById('display_list')
  display_list.innerHTML = ''
  let final = empty.map((e, index) => {
    return `  <div class="dynamic_list">
    <h4>${e}</h4>
    <div class="dynamic_list_btn">
      <button id="editbtn"  onclick="editItem(${index})">EDIT</button>
      <button id="delbtn"  onclick="deleteItem(${index})">DELETE</button>
    </div>
  </div>`
  })

  display_list.innerHTML = final.join('')
}
