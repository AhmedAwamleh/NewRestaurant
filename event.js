const formID = document.getElementById("foodForm");
const perentEl = document.getElementById("foodTable");

const AllFood = [];
let ID = 1000
const parentEl = document.getElementById("foood");

function Food(foodID,foodName,foodtype,price,){
 
  this.foodID=ID++;
  
  this.foodName=foodName;
    
  this.foodtype=foodtype;

  this.price=price;

  AllFood.push(this);
}





// method to print the name drink and the price
Food.prototype.printFood = function () {
    // 1. create Element
    const pEl = document.createElement("p");
    // 2. add content or attributes 
    pEl.textContent = `${this.foodID} : ${this.price} JD`;
    // 3. append to the DOM
    parentEl.appendChild(pEl);


    
}

for (let i = 0; i < AllFood.length; i++){
    AllFood[i].printFood();
}

const formEl=document.getElementById("formID");
formEl.addEventListener("submit",handlelSubmit);

function id(){
   
    var result= Math.floor(Math.random() * 10) + 1;
    console.log(result);
    document.write(result);

}


function handlelSubmit(event){

const typeOfFood=event.target.foodid.value
const namefood=event.target.nameFood.value
const pricee=event.target.price.value

console.log(typeOfFood,namefood,pricee,);


event.preventDefault();
const newFood=new Food (this.foodID,namefood,typeOfFood,pricee)
newFood.render();
}

Food.prototype.render = function () {
    let trEl = document.createElement("tr");
  
    trEl.innerHTML =`
      <td>${this.foodID}</td>
      <td>${this.foodName}</td>
      <td>${this.foodtype}</td>
      <td>$${this.price}</td>`;
  
    perentEl.appendChild(trEl)
   
  };
