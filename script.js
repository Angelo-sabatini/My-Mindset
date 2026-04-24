const hours = [];
for (let h = 1; h <= 24; h++) {
    hours.push(h + ":00");
}

const tablebody = document.getElementById("table-body");

hours.forEach(hour => {
    const row = document.createElement("tr");

    const hourCell = document.createElement("td");
    hourCell.innerText = hour;
    row.appendChild(hourCell);

    for (let i = 0; i < 7; i++) {
        const cell = document.createElement("td");
        cell.contentEditable = true;
        row.appendChild(cell);
    }

    tablebody.appendChild(row);

});
