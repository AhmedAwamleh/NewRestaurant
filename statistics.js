
const perentEl = document.getElementById("table2");

const AllFood = [];
let ID = 1000
const parentEl = document.getElementById("foood");

function Food(foodID, foodName, foodtype, price,) {

    this.foodID = ID++;

    this.foodName = foodName;

    this.foodtype = foodtype;

    this.price = price;

    AllFood.push(this);
}


function getData(){
    let retrevdData=localStorage.getItem("food")
    console.log(retrevdData);
    console.log(typeof retrevdData);
  //string to arry
  
  let parseData=JSON.parse(retrevdData)
  console.log(parseData);
  console.log(typeof parseData);
  if (parseData!="null"){
  for (i=0;i<parseData.length;i++){
    new Food(parseData[i].foodID,parseData[i].foodName,parseData[i].foodtype,parseData[i].price)
  
  }}
  
 }

getData();

Food.prototype.render = function () {
    document.getElementById("perentEl")
    let trE = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    let tdType = document.createElement("td");
    let tdPrice = document.createElement("td");
   
  
    tdId.textContent = this.foodID;
    tdName.textContent = this.foodName;
    tdType.textContent = this.foodtype;
    tdPrice.textContent = this.price;
  
    trE.appendChild(tdId);
    trE.appendChild(tdName);
    trE.appendChild(tdType);
    trE.appendChild(tdPrice);
  
    perentEl.appendChild(trE);
  }
