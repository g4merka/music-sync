const currentDate = new Date();

const name = "Yura";

const printMessage = (name) => {
    // exports.printMessage = function(name) { // экспорт функции 
    const hour = currentDate.getHours();
    if(hour > 16) 
    console.log("Добрый вечер,", name);
    else if(hour > 10) 
    console.log("Добрый день,", name);
    else
    console.log("Доброе утро,", name);
}
module.exports = {printMessage}