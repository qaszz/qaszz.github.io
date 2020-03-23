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
    console.log(worker);
}
function renderWorkerList(){
    const workerList = JSON.parse(window.localStorage.getItem("workerList")) || [];
    const workerListEl = document.getElementById("workerListUl");
    workerListEl.innerHTML = "";
    for (const worker of workerList){
        const workerEl = document.createElement("li");
        workerEl.innerHTML = `<li>${worker.name}</li>`
        workerListEl.appendChild(workerEl)
    }
}

window.addEventListener("storage", function(event){
    if (event.key === "workerList"){
        renderWorkerList();
    }
    
});
renderWorkerList();

/* ARBEIDSOPPGAVERELATERTE FUNKSJONER */