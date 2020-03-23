/* ANSATTRELATRERTE FUNKSJONER */
function addNewWorker(event){
    event.preventDefault()

    const name = document.querySelector("[name='name']").value;

    const worker = {name};

    const workerList = JSON.parse(window.localStorage.getItem("workerList")) || [];
    workerList.push(worker)
    window.localStorage.setItem("workerList", JSON.stringify(workerList));
    renderWorkerList();

    event.target.reset();
}
function renderWorkerList(){
    const workerList = JSON.parse(window.localStorage.getItem("workerList")) || [];
    const workerListEl = document.getElementById("workerListUl");
    const workerDropDown = document.getElementById("workerDropDown")
    workerListEl.innerHTML = "";
    workerDropDown.innerHTML = "";
    for (const worker of workerList){
        const workerEl = document.createElement("li");
        const workerDrop = document.createElement("option");
        workerEl.innerHTML = `<li>${worker.name}</li>`;
        workerDrop.innerHTML = `<option>${worker.name}</option>`;
        workerListEl.appendChild(workerEl);
        workerDropDown.appendChild(workerDrop);
    }
}

window.addEventListener("storage", function(event){
    if (event.key === "workerList"){
        renderWorkerList();
    }
    
});
renderWorkerList();

/* ARBEIDSOPPGAVERELATERTE FUNKSJONER */
function addNewTask(event){
    event.preventDefault();
    const task = document.querySelector("[name='task']").value;

    const work = {task};

    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    taskList.push(work);
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
    renderTaskList()

    event.target.reset()
    console.log(work);
}

function renderTaskList(){
    const taskList = JSON.parse(window.localStorage.getItem("taskList")) || [];
    const taskListEl = document.getElementById("taskListUl");
    const taskDropDown = document.getElementById("taskDropDown")
    taskListUl.innerHTML = "";
    taskDropDown.innerHTML = "";
    for (const work of taskList){
        const taskEl = document.createElement("li");
        const taskDrop = document.createElement("option");
        taskEl.innerHTML = `<li>${work.task}</li>`;
        taskDrop.innerHTML = `<option>${work.task}</option>`;
        taskListEl.appendChild(taskEl);
        taskDropDown.appendChild(taskDrop);
    }   
    window.addEventListener("storage", function(event){
        if (event.key === "taskList"){
            renderTaskList();
        }
    })
}
renderTaskList();