
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    //taking in values and turning them to const
    const rowCount = parseInt(document.querySelector("form .makeRows").value)
    const blockCount = parseInt(document.querySelector("form .makeBlocks").value)

    const table = document.querySelector(".genTable");
    table.innerHTML = "";


    for(let i = 0; i < rowCount; i++){
        let tr = document.createElement("tr")
        document.querySelector(".genTable").appendChild(tr);
        tr.className = `tableRow${i}`;

        for(let y = 0; y < blockCount; y++){
            let td = document.createElement("td")
            td.textContent = "2";
            document.querySelector(`.genTable .tableRow${i}`).appendChild(td);
        }
    }
})