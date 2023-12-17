// console.log(1);
function loop(){
    setTimeout(() => {
        console.log(2);
        loop();
    }, 1000);
    
}
loop();