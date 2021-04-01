// var url = 'http://someserver.com/data.json'; //задаем url где браузеру искать данные
// var request = new XMLHttpRequest(); // создаем объект request
// request.open('GET', url); //осуществлениеверификации

// request.onload = function() {
//     // когда браузер получит ответ от удаленной 
//     // веб службы он вызовет данную функцию
//     if (request.status == 200) {
//         alert(request.responseText);
//     }
// }

// request.send(null); // говорим request чтобы он извлек данные, для чего воспользуемся send

function Movie(title, genre, rating, showtimes) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.showtimes = showtimes;
}

var plan9Movie = new Movie('Plan 9 from Outer Space', 'Cult Cult Classic', 2,
                            ['3:00pm', '7:00pm', '11:00pm']);

var jsonString = JSON.stringify(plan9Movie);
alert(jsonString)

var jsonMovieObject = JSON.parse(jsonString);
alert('JSON Movie is ' + jsonMovieObject.title)