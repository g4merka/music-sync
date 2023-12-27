const express = require("express") //подключение Express.JS
const fs = require("fs")
const app = express() //создаем объект приложения

const urlencodedParser = express.urlencoded({extended: false}) // создали парсер данных application/x-www-form-urlencoded для получения отправленных данных
                                                        //↑ объект - результат парсинга будет представлять набор пар ключ-значение, а каждое значение может быть представлено в виде строки или массива
app.get("/users/:userId", function(req, res){
    res.send("userId: " + req.params["userId"]) // значение указывается в конце маршрута ../users/<int>
})

app.get("/type/:media.:ext", function(req, res){ // запрос: ../type/<media>.<ext>
    const media = req.params["media"]
    const ext = req.params['ext']
    res.send(`Полное имя файла: ${media}.${ext}`)
})
app.get("/type/:media/extension:ext", function(req, res){ // запрос: ../type/<media>/extension/<ext>
    const media = req.params["media"]
    const ext = req.params['ext']
    res.send(`Тип: ${media} Расширение: ${ext}`)
})

app.listen(3000, () => console.log("Сервер запущен...")) //прослушиваем подключения на 3000 порту
//↑ метод для запуска сервера
