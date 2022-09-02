// getting settings and employees data
const URL = "./src/package.json"
const SETTINGS = './settings/config.json'

// getting DOM elements to work with
const button = document.getElementById("button");
const tableBody = document.getElementById("employees");
const maxShowInput = document.getElementById('Max_Items_To_Show');
const searchInput = document.getElementById('search')

// main event
button.addEventListener("click", handleButtonClick);

// to delete current row with 'Remove' button
function deleteCurrentRowHTML(event) {
    let e = event.target;
    let i = e.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

// to work by pressing 'Enter' key
maxShowInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        button.click();
    }
});

// to make false waiting for data
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// main function for creating table
async function handleButtonClick(status) {
    tableBody.innerHTML = getLoaderHTML();

    await sleep(1500)

    // getting all settings from config file
    fetch(SETTINGS)
        .then(res => res.json())
        .then((settings) => {
            const fetchedSettings = {};

            // refactoring all settings
            settings.forEach(setting => {
                fetchedSettings[setting.name] = setting.value
            })

            if (maxShowInput.value) {
                fetchedSettings.max_items_to_show = maxShowInput.value;
            }

            // getting Employees datas
            fetch(URL)
                .then((resp) => resp.json())
                .then((employeesCollection) => {
                    tableBody.innerHTML = '';

                    // filtering Employees with active or passive status and drawing them to table
                    const filteredEmployees = employeesCollection.filter(employee => `${employee.status}` === fetchedSettings.show_only_active)
                    filteredEmployees.length = fetchedSettings.max_items_to_show;
                    filteredEmployees.forEach(employee => {
                        tableBody.innerHTML += getRowHTML(
                            employee.id,
                            employee.name,
                            employee.status,
                            fetchedSettings.show_description ? employee.description : 'N/A'
                        )
                    })
                })
                .then(() => {
                    // adding delete button funtionality
                    const deleteButtons = document.querySelectorAll("input[value = 'Remove']");
                    deleteButtons.forEach((button) =>
                        button.addEventListener("click", deleteCurrentRowHTML)
                    );
                })
                .catch((err) => {
                    tableBody.innerHTML = getFailMsgHTML();
                });
            })
}

// search in table rows
searchInput.addEventListener('input', (event) => {
    let searchInput = event.target.value;
    let container = document.getElementById('employees')
    let list = [...container.children]
    if (searchInput.length) {
        list = list.map(user => {
            let content = user.innerText.toLowerCase();

            if(!content.includes(searchInput.toLowerCase())) {
                user.style.display = 'none';
            }
            else {
                user.style.display = '';
            }
            return user;
        })
        container.innerHTML = '';
        container.append(...list)
    } else {
        list.map(user => {
            user.style.display = '';
            return user;
        })
    }
})

// to draw html table
function getRowHTML(id, name, status, description) {
    return `
        <tr class="table_row">
          <td>${id}</td>
          <td>${name}</td>
          <td>${status ? 'active' : 'passive'}</td>
          <td>${description}</td>
          <td>
            <input type="button" value="Remove"/>
          </td>
        </tr>`;
}

// to show loading animation while loading data
function getLoaderHTML() {
    return `
        <tr>
          <td colspan="5">
            <img
              src="https://icons8.com/preloaders/preloaders/1487/%E2%80%8B%E2%80%8BIphone-spinner-1.gif"
            />
          </td>
        </tr>`;
}

// to get fail message when error is catched
function getFailMsgHTML() {
    return `
        <tr>
          <td colspan="5">
            <p>Failed to load Employees</p>
          </td>
        </tr>`;
}

async function getOnlyActives() {
    tableBody.innerHTML = getLoaderHTML();

    await sleep(1500)

    // getting all settings from config file
    fetch(SETTINGS)
        .then(res => res.json())
        .then((settings) => {
            const fetchedSettings = {};

            // refactoring all settings
            settings.forEach(setting => {
                fetchedSettings[setting.name] = setting.value
            })

            if (maxShowInput.value) {
                fetchedSettings.max_items_to_show = maxShowInput.value;
            }

            // getting Employees datas
            fetch(URL)
                .then((resp) => resp.json())
                .then((employeesCollection) => {
                    tableBody.innerHTML = '';

                    // filtering Employees with active or passive status and drawing them to table
                    const activeEmployees = employeesCollection.filter(employee => `${employee.status}` === 'true')
                    activeEmployees.length = fetchedSettings.max_items_to_show;
                    activeEmployees.forEach(employee => {
                        tableBody.innerHTML += getRowHTML(
                            employee.id,
                            employee.name,
                            employee.status,
                            fetchedSettings.show_description ? employee.description : 'N/A'
                        )
                    })
                })
                .then(() => {
                    // adding delete button funtionality
                    const deleteButtons = document.querySelectorAll("input[value = 'Remove']");
                    deleteButtons.forEach((button) =>
                        button.addEventListener("click", deleteCurrentRowHTML)
                    );
                })
                .catch((err) => {
                    tableBody.innerHTML = getFailMsgHTML();
                });
        })
}

const checkActive = document.getElementById('actives')

checkActive.addEventListener('change', function() {
    if(this.checked) {
        checkPassive.checked = false;
        allEmployees.checked = false;
        getOnlyActives()
    }
});

async function getOnlyPassives() {
    tableBody.innerHTML = getLoaderHTML();

    await sleep(1500)

    // getting all settings from config file
    fetch(SETTINGS)
        .then(res => res.json())
        .then((settings) => {
            const fetchedSettings = {};

            // refactoring all settings
            settings.forEach(setting => {
                fetchedSettings[setting.name] = setting.value
            })

            if (maxShowInput.value) {
                fetchedSettings.max_items_to_show = maxShowInput.value;
            }

            // getting Employees datas
            fetch(URL)
                .then((resp) => resp.json())
                .then((employeesCollection) => {
                    tableBody.innerHTML = '';

                    // filtering Employees with active or passive status and drawing them to table
                    const activeEmployees = employeesCollection.filter(employee => `${employee.status}` === 'false')
                    activeEmployees.length = fetchedSettings.max_items_to_show;
                    activeEmployees.forEach(employee => {
                        tableBody.innerHTML += getRowHTML(
                            employee.id,
                            employee.name,
                            employee.status,
                            fetchedSettings.show_description ? employee.description : 'N/A'
                        )
                    })
                })
                .then(() => {
                    // adding delete button funtionality
                    const deleteButtons = document.querySelectorAll("input[value = 'Remove']");
                    deleteButtons.forEach((button) =>
                        button.addEventListener("click", deleteCurrentRowHTML)
                    );
                })
                .catch((err) => {
                    tableBody.innerHTML = getFailMsgHTML();
                });
        })
}

const checkPassive = document.getElementById('passives')

checkPassive.addEventListener('change', function() {
    if(checkPassive.checked) {
        allEmployees.checked = false;
        checkActive.checked = false;
        getOnlyPassives()
    }
});

async function getAllEmployees() {
    tableBody.innerHTML = getLoaderHTML();

    await sleep(1500)

    // getting all settings from config file
    fetch(SETTINGS)
        .then(res => res.json())
        .then((settings) => {
            const fetchedSettings = {};

            // refactoring all settings
            settings.forEach(setting => {
                fetchedSettings[setting.name] = setting.value
            })

            if (maxShowInput.value) {
                fetchedSettings.max_items_to_show = maxShowInput.value;
            }

            // getting Employees datas
            fetch(URL)
                .then((resp) => resp.json())
                .then((employeesCollection) => {
                    tableBody.innerHTML = '';

                    employeesCollection.forEach(employee => {
                        tableBody.innerHTML += getRowHTML(
                            employee.id,
                            employee.name,
                            employee.status,
                            fetchedSettings.show_description ? employee.description : 'N/A'
                        )
                    })
                })
                .then(() => {
                    // adding delete button funtionality
                    const deleteButtons = document.querySelectorAll("input[value = 'Remove']");
                    deleteButtons.forEach((button) =>
                        button.addEventListener("click", deleteCurrentRowHTML)
                    );
                })
                .catch((err) => {
                    tableBody.innerHTML = getFailMsgHTML();
                });
        })
}

const allEmployees = document.getElementById('all')

allEmployees.addEventListener('change', function() {
    if(allEmployees.checked) {
        checkActive.checked = false;
        checkPassive.checked = false;
        getAllEmployees()
    }
});