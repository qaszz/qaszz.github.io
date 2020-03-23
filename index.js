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

/* TILDELINGEN AV ARBEIDSOPPGAVER TIL ANSATT */
function assignTask(event){
    event.preventDefault();
    const name = document.querySelector("#workerDropDown").value;
    const task = document.querySelector("#taskDropDown").value;
    const assignedTask = {name, task};

    const assignedTaskList = JSON.parse(window.localStorage.getItem("assignedTaskList")) || [];
    assignedTaskList.push(assignedTask);
    window.localStorage.setItem("assignedTaskList", JSON.stringify(assignedTaskList));
    renderAssignedTaskList();

    event.target.reset();
    console.log(assignedTask);
}

function renderAssignedTaskList(){
    const assignedTaskList = JSON.parse(window.localStorage.getItem("assignedTaskList")) || [];
    const assignedTaskListEl = document.getElementById("assignTaskListUl");
    assignedTaskListEl.innerHTML = "";
    for (const assignedTask of assignedTaskList){
        const assignedTaskEl = document.createElement("li");
        assignedTaskEl.innerHTML = `<li>Ansatt: ${assignedTask.name}, Arbeidsoppgave: ${assignedTask.task}`;
        assignedTaskListEl.appendChild(assignedTaskEl);
    }
    window.addEventListener("storage", function(event){
        if (event.key === "assignedTaskList"){
            renderAssignedTaskList();
        }
    })
}
renderAssignedTaskList();

/* LEGGER TIL BILDE AV ANSATT */
function addImg(event){
    event.preventDefault();

    const img = document.querySelector("[name='image']").dataset.image;
    const image = {img};
    const imageList = JSON.parse(window.localStorage.getItem("imageList")) || [];
    imageList.push(image);
    window.localStorage.setItem("imageList", JSON.stringify(imageList));
    renderImageList();

    event.target.reset();
    console.log(image);
    const output = document.getElementById("output");
}
function renderImageList(){
    const imageList = JSON.parse(window.localStorage.getItem("imageList")) || [];
    const imageListEl = document.getElementById("imgListUl");
    imageListEl.innerHTML = "";
    for (const image of imageList){
        const imageEl = document.createElement("li");
        imageEl.innerHTML = `<li><img src="${image.img}"/></li>`
        imageListEl.appendChild(imageEl);
    }
    window.addEventListener("storage", function(event){
        if (event.key === "imageList"){
            renderImageList();
        }
    })
}
renderImageList();
function init(){
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}
function handleFileSelect(event){
    const reader = new FileReader()
    reader.onload = handleFileLoad;
    reader.readAsDataURL(event.target.files[0])
}
function handleFileLoad(event){
    const output = document.getElementById("output");
    output.innerHTML = `<img src="${event.target.result}" width="100px" />`
    document.querySelector("[name='image']").dataset.image = event.target.result;
}
