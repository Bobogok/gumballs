window.onload = function() {
    
}

function updateSales(sales) {
    //функция на данный момент возвращает строку
    var salesDiv = document.getElementById('sales');
    for (var i = 0; i < sales.length; i++) {
        var sale = sales[i];
        var div = document.createElement('div'); // для каждого элемента данных создаем div
        div.setAttribute('class', 'saleItem'); // присваиваем элементу класс saleitem
        div.innerHTML = sale.name + ' sold ' + sale.sales + ' gumballs'; // задаем содержимое для элемента div
        salesDiv.appendChild(div);
    }
}