window.onload = function() { // выполним функцию при помощи обработчика событий ПОЛНОЙ загрузки DOM
    setInterval(handleRefresh, 3000); // таймер, который вызывает ФУНКЦИИ в определенный промежуток времени
}

var lastReportTime = 0; // значение времени

function updateSales(sales) {
    //функция на данный момент обрабатывает JSONP
    var salesDiv = document.getElementById('sales');
    for (var i = 0; i < sales.length; i++) { // совершаем итерацию по каждому элементу в массиве
        var sale = sales[i];
        var div = document.createElement('div'); // для каждого элемента данных создаем div
        div.setAttribute('class', 'saleItem'); // присваиваем элементу класс saleitem
        div.innerHTML = sale.name + ' sold ' + sale.sales + ' gumballs'; // задаем содержимое для элемента div
        salesDiv.appendChild(div);
    }
    if (sales.length > 0) {
        lastReportTime = sales[sales.length-1].time; //необходимо убедиться в НАЛИЧИИ массива; в случае
        // отсутствия новых отчетов о продажах будет возвращен пустой массив и наш код сгенерирует исключение.
    }
}

function handleRefresh() {
    var url = 'http://gumball.wickedlysmart.com' +
              '?callback=updateSales' + // callback указывает, что при генерировании JS должна использоваться функция updateSales.
                                        // в силу чего веб-служба будет обертывать JSON-данные в вызов функции updateSales
              '&lastreporttime=' + lastReportTime +
              '&random=' + (new Date()).getTime(); //фиктивный параметр против кеширования
    var newScriptElement = document.createElement('script');
    newScriptElement.setAttribute('src', url);
    newScriptElement.setAttribute('id', 'jsonp');

    var oldScriptElement = document.getElementById('jsonp');
    var head = document.getElementsByTagName('head')[0];
    if (oldScriptElement == null) { // проверяем, есть ли элемент в head
        head.appendChild(newScriptElement); // добавляем элемент, если его не было
    }
    else {
        head.replaceChild(newScriptElement, oldScriptElement); // заменяем элемент, если он уже был в head
    }
}