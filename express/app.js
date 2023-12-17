const express = require("express"); //подключение Express.JS
const app = express(); //создаем объект приложения
app.get("/", function(request, response){ //определяем обработчик для маршрута "/"
      // ↑ маршрут, ↑ обработчик
    response.send("<h2>Привет Express.JS!</h2>"); //отправляем ответ
});
app.get("/about", function(req, res){
    res.send("<h1>О сайте</h1>");
});
app.get("/contact", function(req, res){
    res.send("Контакты");
})
app.listen(3000); //прослушиваем подключения на 3000 порту
//↑ метод для запуска сервера