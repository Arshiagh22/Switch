// app.js
const form = document.getElementById('inventory-form');
const tableBody = document.querySelector('#inventory-table tbody');

// آرایه برای ذخیره اطلاعات کالاها
let inventory = [];

// افزودن کالا
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;

    // افزودن کالا به آرایه
    inventory.push({ name: itemName, quantity: parseInt(itemQuantity) });
    updateTable();
    form.reset();
});

// بروزرسانی جدول
function updateTable() {
    tableBody.innerHTML = ''; // پاک کردن محتوای قبلی
    inventory.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td><button onclick="deleteItem(${index})">حذف</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// حذف کالا
function deleteItem(index) {
    inventory.splice(index, 1);
    updateTable();
}
