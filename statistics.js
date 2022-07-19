const table = document.getElementById("table2");
const body = document.getElementById("body");
let AllFood = [];
let ID = 1000 ; 
function getData(){
    let retrevdData=localStorage.getItem("food")
    AllFood=JSON.parse(retrevdData);
 }
getData();
console.log(AllFood);
/*
let arr = [ {name : 'hassan' , age : 20},{name : 'ahmad'},{name : 'laith'},{name : 'alla'} ];
console.log(typeof arr[0].age);
*/
// Objec . 
// arr []
function render(food) {
    let trE = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    let tdType = document.createElement("td");
    let tdPrice = document.createElement("td");
    tdId.textContent = food.foodID;
    tdName.textContent = food.foodName;
    tdType.textContent = food.foodtype;
    tdPrice.textContent = food.price;
    
    trE.appendChild(tdId);
    trE.appendChild(tdName);
    trE.appendChild(tdType);
    trE.appendChild(tdPrice);  
  
    body.appendChild(trE);
  }
//console.log(2/0);
for (let index = 0; index < AllFood.length; index++) {
render(AllFood[index]); 
}