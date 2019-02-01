function PizzaJoint() {
  this.base = "",
  this.toppings = [],
}

PizzaJoint.prototype.getPrice =
function (){
  var basePrice = 10;
  var toppingPrice = 1;
  return basePrice + this.toppings.length*toppingPrice;
}

fucntion PizzaOrder() {
  this.pizzas = [],
  this.total = 0
}

PizzaOrder.prototype.addPizza =
function (pizza) {
  this.pizzas.push(pizza);
}

PizzaOrder.protoype.getTotal =
function (){
  this.pizzas.forEach(function(pizza){
    this.total += pizza.getPrice();
  });
}

var createPizza = function(){

  pizza = new PizzaJoint()
  var pizzaBase = $("input:radio[name=pizza-base]:checked").val();
  console.log(pizzaBase);
  pizza.base = pizzaBase

  var pizzaToppings = $("input:checkbox[name=toppings]:checked").each(function(index){
    console.log(index+' checkbox has value ' +$(this).val());
    pizza.toppings.push($(this).val())
  });

  pizza.setPrice()
  return pizza
}

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    pizza = createPizza();
    console.log(pizza);


  })
})
