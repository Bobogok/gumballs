window.onload = function() {
    setInterval(handleRefresh, 3000); 
}

var lastReportTime = 0;

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
    if (sales.length > 0) {
        lastReportTime = sales[sales.length-1].time; //необходимо убедиться в НАЛИЧИИ массива; в случае
        // отсутствия новых отчетов о продажах будет возвращен пустой массив и наш код сгене рирует исключение.
    }
}

function handleRefresh() {
    var url = 'http://gumball.wickedlysmart.com' +
              '?callback=updateSales' +
              '&lastreporttime=' + lastReportTime +
              '&random=' + (new Date()).getTime(); //фиктивный параметр против кеширования
    var newScriptElement = document.createElement('script');
    newScriptElement.setAttribute('src', url);
    newScriptElement.setAttribute('id', 'jsonp');

    var oldScriptElement = document.getElementById('jsonp');
    var head = document.getElementsByTagName('head')[0];
    if (oldScriptElement == null) { // проверяем, есть ли элемент в head
        head.appendChild(newScriptElement);
    }
    else {
        head.replaceChild(newScriptElement, oldScriptElement); // заменяем элемент, если он уже был в head
    }
}