function addNewWorker(event){
    
    const name = document.querySelector("[name='price']").value;

    const worker = {name};

    const workerList = JSON.parse(window.localStorage.getItem("workerList")) || [];
    workerList.push(worker)
    window.localStorage.setItem("workerList", JSON.stringify(workerList));
    renderWorkerList();

    
    console.log(worker);
}
function renderWorkerlist(){
    const workerList = JSON.parse(window.localStorage.getItem("workerList")) || [];
    const workerListEl = document.getElementById("workerListUl");
    workerListEl.innerHTML = "";
    for (const worker of workerList){
        const workerEl = document.createElement("li");
        productEl.innerHTML = `<li>${worker}</li>`
    }
    workerListEl.appendChild(workerEl)
}

window.addEventListener("storage", function(event)){
    if (event.key === "workerList"){
        renderWorkerList();
    }
renderWorkerList();
}