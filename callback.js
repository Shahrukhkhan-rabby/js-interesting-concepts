function welcomeMessage(name, greetHandler) {
    greetHandler(name);
}
// const names =['Tom Hanks', 'Tom Brady', 'Tom Cruise']
// const myObj = { name: 'Tom Chinku', age: 11 };
function greetMorning(name) {
  console.log("Good morning", name);
}
function greetAfternoon(name) {
    console.log("Good afternoon", name);
}
function greetEvening(name) {
  console.log("Good Evening", name);
}
welcomeMessage('Tom Hanks',greetMorning);
welcomeMessage("Bappa Hanks", greetEvening);
welcomeMessage('Sakib Hanks', greetAfternoon);


function handleClick() {
    console.log('button is clicked');
}
document.getElementById("my-btn").addEventListener("click", handleClick);

document.getElementById('btn').addEventListener('click', function () {
    console.log('button is clicked');
})
