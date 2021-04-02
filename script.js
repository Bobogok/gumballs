window.onload = function() {
    var url = 'http://localhost/gumballs/sales.json';
    // var url = 'http://gumball.wickedlysmart.com/';
    var request = new XMLHttpRequest();
    // request.open('GET', url); lvl2 XML
    request.onreadystatechange = function() { // lvl1 XML
    // request.onload = function() { // lvl2 XML
        if (request.readyState == 4 && request.status == 200) {
            updateSales(request.responseText)
            // console.log(request.responseText)
        }
    };
    request.open('GET', url); // lvl 1 XML
    request.send(null);
}

function updateSales(responseText) {
    var salesDiv = document.getElementById('sales');
    var sales = JSON.parse(responseText); // преобразуем responseText из строки в JS эквивалент с помощью JSON.parse (массив)
    for (var i = 0; i < sales.length; i++) {
        var sale = sales[i];
        var div = document.createElement('div'); // для каждого элемента данных создаем div
        div.setAttribute('class', 'saleItem'); // присваиваем элементу класс saleitem
        div.innerHTML = sale.name + ' sold ' + sale.sales + ' gumballs'; // задаем содержимое для элемента div
        salesDiv.appendChild(div);
    }
}