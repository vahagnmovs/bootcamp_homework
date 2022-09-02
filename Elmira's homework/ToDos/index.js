const addToDoButton = document.getElementById('addToDoButton');
const toDoList = document.getElementById('toDoList');
const toDoInput = document.getElementById('toDoInput');
const completedDiv = document.getElementById('completed')

addToDoButton.addEventListener('click', addNewToDo)

function addNewToDo() {
    const inputValue = toDoInput.value;
    if(inputValue) {
        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox'

        const newToDo = document.createElement('input')
        newToDo.value = inputValue;
        newToDo.classList.add('text')
        newToDo.setAttribute('readonly', 'readonly');

        const listContainer = document.createElement('div')
        listContainer.classList.add('listContainer')

        newToDo.style.listStyleType = 'none'
        newToDo.innerText = inputValue;

        const taskEditBtn = document.createElement('button');
        taskEditBtn.innerText = 'Edit'

        taskEditBtn.addEventListener('click', (e) => {
            if (taskEditBtn.innerText === "Edit") {
                newToDo.focus();
                taskEditBtn.innerText = "Save";
                newToDo.removeAttribute("readonly");
            } else {
                taskEditBtn.innerText = "Edit";
                newToDo.setAttribute("readonly", "readonly");
            }
        });

        const taskDeleteBtn = document.createElement('button');
        taskDeleteBtn.innerText = 'Delete'
        listContainer.append(checkBox, newToDo, taskEditBtn, taskDeleteBtn);
        taskDeleteBtn.addEventListener('click', (e) => {
            listContainer.remove();
            calculateCompleted();
        });

        toDoInput.value = '';
        toDoList.appendChild(listContainer);
        checkBox.addEventListener('change', function () {
            if(checkBox.checked) {
                newToDo.style.textDecoration = 'line-through'
                calculateCompleted()
            } else {
                newToDo.style.textDecoration = 'none'
                calculateCompleted()
            }
        })
        calculateCompleted();
    }
}

function calculateCompleted() {
    const lists = document.querySelectorAll('.listContainer')
    let list = [...lists]
    let completedList = list.filter(el => el.firstChild.checked)
    console.log(list)
    completedDiv.innerHTML = completedList.length === list.length ? `<p> All completed! <p>` : `<p> ${completedList.length} / ${list.length} Completed</p>`
}

