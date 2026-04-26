const hours = [];
for (let h = 1; h <= 24; h++) {
    hours.push(h + ":00");
}

const tablebody = document.getElementById("table-body");

const savedData = JSON.parse(localStorage.getItem("tableData")) || {};

hours.forEach((hour, rowIndex) => {
    const row = document.createElement("tr");

    const hourCell = document.createElement("td");
    hourCell.innerText = hour;
    row.appendChild(hourCell);

    for (let colIndex = 0; colIndex < 7; colIndex++) {
        const cell = document.createElement("td");
        cell.contentEditable = true;

        const key = `${rowIndex}-${colIndex}`;
        if (savedData[key]) {
            cell.innerText = savedData[key];
        }

        cell.addEventListener("input", () => {
            savedData[key] = cell.innerText;
            localStorage.setItem("tableData", JSON.stringify(savedData));
        });

        row.appendChild(cell);
    }

    tablebody.appendChild(row);
});



