const express = require("express") //подключение Express.JS
const fs = require("fs")
const app = express() //создаем объект приложения

const fileRouter = express.Router(); //определяем роутер

app.use("/about", function (_, res){
    res.sendFile(__dirname + "/public/about.html")
})
//определяем маршруты и обработчики внутри роутера
fileRouter.use("/add", function(req, res){
    res.send("Добавление файла")
})
fileRouter.use("/:id", function(req, res){
    res.send(`Файл ${req.params.id}`)
})
fileRouter.use("/", function(req, res){
    res.send("Список файлов")
})

app.use("/album", fileRouter) //сопоставляем роутер с конченой точкой /album

app.use("/", function(req, res){
    res.send("Главная")
})

app.listen(3000, () => console.log("Сервер запущен...")) //прослушиваем подключения на 3000 порту
//↑ метод для запуска сервера
