function PizzaJoint() {
  this.base = "",
  this.toppings = []
}

PizzaJoint.prototype.getPrice =
function (){
  var basePrice = 10;
  var toppingPrice = 1;
  return basePrice + this.toppings.length*toppingPrice;
};

function PizzaOrder() {
  this.pizzas = []
}

PizzaOrder.prototype.addPizza =
function (pizza) {
  this.pizzas.push(pizza);
};

PizzaOrder.prototype.getTotal =
function (){
  var total = 0;
  this.pizzas.forEach(function(pizza){
    total += pizza.getPrice();
  });
  return total;
};

var createPizza = function(){

  pizza = new PizzaJoint()
  var pizzaBase = $("input:radio[name=pizza-base]:checked").val();
  console.log(pizzaBase);
  pizza.base = pizzaBase

  var pizzaToppings = $("input:checkbox[name=toppings]:checked").each(function(index){
    console.log(index+' checkbox has value ' +$(this).val());
    pizza.toppings.push($(this).val())
  });

  return pizza
}

var pizzaOrder = new PizzaOrder();
$(document).ready(function() {


  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    pizza = createPizza();
    pizzaOrder.addPizza(pizza)
    console.log(pizza);
    console.log(pizzaOrder, pizzaOrder.getTotal());


  })
})
