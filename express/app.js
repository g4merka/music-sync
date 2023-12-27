const express = require("express") //подключение Express.JS
const fs = require("fs")
const app = express() //создаем объект приложения

const urlencodedParser = express.urlencoded({extended: false}) // создали парсер данных application/x-www-form-urlencoded для получения отправленных данных
                                                        //↑ объект - результат парсинга будет представлять набор пар ключ-значение, а каждое значение может быть представлено в виде строки или массива
app.get("/", function(_, res){
    res.sendFile(__dirname + "/index.html") // открывает index.html на главной /
})
app.post("/", urlencodedParser, function(req, res){ // 1 парам. "/" можно было не писать, т. к. по умолчанию данные из index.html отправляются по тому же адресу, где находится стр. - /
    if(!req.body) return res.sendStatus(400)
    console.log(req.body)
    res.send(`${req.body.userName} - ${req.body.userAge}`)
})
app.listen(3000, () => console.log("Сервер запущен...")) //прослушиваем подключения на 3000 порту
//↑ метод для запуска сервера
