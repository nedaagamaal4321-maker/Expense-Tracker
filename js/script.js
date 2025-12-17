document.addEventListener("DOMContentLoaded", () => {
    const nameInp = document.getElementById("name");
    const amountInp = document.getElementById("amount");
    const categoryInp = document.getElementById("category");
    const dateInp = document.getElementById("date");
    const priceInp = document.getElementById("price");
    const addBtn = document.getElementById("add");
    const table = document.getElementById("expTable");

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    expenses.forEach((exp, index) => addRowToTable(exp, index));

    addBtn.addEventListener("click", e => {
        e.preventDefault();

        if (
            !nameInp.value.trim() ||
            !amountInp.value.trim() ||
            !categoryInp.value.trim() ||
            !dateInp.value.trim() ||
            !priceInp.value.trim()
        ) return;

        const expense = {
            name: nameInp.value,
            amount: amountInp.value,
            category: categoryInp.value,
            date: dateInp.value,
            price: priceInp.value
        };

        expenses.push(expense);
        localStorage.setItem("expenses", JSON.stringify(expenses));

        addRowToTable(expense, expenses.length - 1);

        nameInp.value = "";
        amountInp.value = "";
        categoryInp.value = "";
        dateInp.value = "";
        priceInp.value = "";
    });

    function addRowToTable(expense, index) {
        const row = document.createElement("tr");

        Object.values(expense).forEach(val => {
            const td = document.createElement("td");
            td.textContent = val;
            row.appendChild(td);
        });

        const delTd = document.createElement("td");
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";

        delBtn.addEventListener("click", () => {
            expenses.splice(index, 1);
            localStorage.setItem("expenses", JSON.stringify(expenses));
            row.remove();
        });

        delTd.appendChild(delBtn);
        row.appendChild(delTd);

        table.appendChild(row);
    }
});

