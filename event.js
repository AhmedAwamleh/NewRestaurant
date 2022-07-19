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




const formEl=document.getElementById("formID");
formEl.addEventListener("submit",handlelSubmit);



function handlelSubmit(event){

const typeOfFood=event.target.foodid.value
const namefood=event.target.nameFood.value
const pricee=event.target.price.value




event.preventDefault();
const newFood=new Food (this.foodID,namefood,typeOfFood,pricee)
newFood.render();
saveData();
console.log(ID,namefood,typeOfFood,pricee)
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


  //save my data to local storage
function saveData(){
  let strifyeData=JSON.stringify(AllFood)
  localStorage.setItem("food",strifyeData)
}



