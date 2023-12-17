const express = require("express"); //подключение Express.JS
const app = express(); //создаем объект приложения
app.get("/", function(request, response){ //определяем обработчик для маршрута "/"
      // ↑ маршрут, ↑ обработчик
    response.send("<h2>Привет Express.JS!</h2>"); //отправляем ответ
});
app.listen(3000); //прослушиваем подключения на 3000 порту
//↑ метод для запуска сервера