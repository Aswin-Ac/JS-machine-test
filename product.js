var i = 1;

function addProduct() {
    var name = document.getElementById("productName").value
    var description = document.getElementById("description").value
    var category = document.getElementById("category").value
    var subcategory = document.getElementById("subCategory").value
    var weight = document.getElementById("weight").value
    var unit = document.getElementById("unit").value
    var qty = document.getElementById("qty").value
    var amt = document.getElementById("amt").value

    var table = document.getElementById("table")
    var newRow = table.insertRow(-1);
    newRow.setAttribute("id", i)
    var id = newRow.insertCell(1);
    id.innerHTML = i++;

    var tName = newRow.insertCell(2);
    tName.innerHTML = name;

    var tDiscription = newRow.insertCell(3);
    tDiscription.innerHTML = description;

    var tCategory = newRow.insertCell(4);
    tCategory.innerHTML = category;

    var tSubcategory = newRow.insertCell(5);
    tSubcategory.innerHTML = subcategory;

    var tWeight = newRow.insertCell(6);
    tWeight.innerHTML = weight + " " + unit;

    var tQty = newRow.insertCell(7);
    tQty.innerHTML = qty;

    var tAmt = newRow.insertCell(8);
    tAmt.innerHTML = amt;



}