document.addEventListener("DOMContentLoaded", () => {
    const nameInp = document.getElementById("name");
    const amountInp = document.getElementById("amount");
    const categoryInp = document.getElementById("category");
    const dateInp = document.getElementById("date");
    const priceInp = document.getElementById("price");
    const addBtn = document.getElementById("add");
    const table = document.getElementById("expTable");

    addBtn.addEventListener("click", e => {
        e.preventDefault();

        if (
            !nameInp.value.trim() ||
            !amountInp.value.trim() ||
            !categoryInp.value.trim() ||
            !dateInp.value.trim() ||
            !priceInp.value.trim()
        ) return;

        const row = document.createElement("tr");

        [nameInp, amountInp, categoryInp, dateInp, priceInp].forEach(inp => {
            const td = document.createElement("td");
            td.textContent = inp.value;
            row.appendChild(td);
            inp.value = "";
        });

        table.appendChild(row);
    });
});
