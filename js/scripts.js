function PizzaJoint() {
  this.base = "",
  this.toppings = [],
  this.size=""
}

PizzaJoint.prototype.cost =
function (){
  var basePrice = 10;
  if (this.size === "supper") {
    basePrice = 20;
  } else if (this.size === "large") {
    basePrice = 16;
  } else if (this.size === "medium") {
    basePrice = 12;
  }
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
    total += pizza.cost();
  });
  return total;
};



// Business Logic for Contacts ---------
var createPizza = function(){

  pizza = new PizzaJoint()
  var pizzaBase = $("input:radio[name=pizza-base]:checked").val();
  console.log(pizzaBase);
  pizza.base = pizzaBase
  $("input:radio[name=pizza-base]:checked").prop('checked', false)

  var pizzaToppings = $("input:checkbox[name=toppings]:checked").each(function(index){
    console.log(index+' checkbox has value ' +$(this).val());
    pizza.toppings.push($(this).val())
    $(this).prop('checked', false)
  });

  var pizzaSize = $("#pizzaSize").val()
  $("#pizzaSize").prop('selectedIndex', 0)
  pizza.size = pizzaSize;

  return pizza
}

var displayPizza = function(pizza){
  var htmlPizzaDetails = "";
  htmlPizzaDetails += "<h4>Base: " + pizza.base + " Size: " + pizza.size+ "</h4>";

  htmlPizzaDetails += "<ul>";
  pizza.toppings.forEach(function(topping){
    htmlPizzaDetails += "<li>" + topping + "</li>";
  });
  htmlPizzaDetails += "</ul>";

  htmlPizzaDetails += "<h5>Price: $" + pizza.cost() + "</h5>";
  return htmlPizzaDetails;
}

var displayOrder = function(){
  var orderDetails = $("#orderDetails");
  var htmlOrderDetails = ""

  htmlOrderDetails += "<h2>Your Order Detials</h2>";

  pizzaOrder.pizzas.forEach(function(pizza){
    htmlOrderDetails += displayPizza(pizza);
  });

  htmlOrderDetails += "<h3>Total: "+pizzaOrder.getTotal()+"</h3>";

  orderDetails.html(htmlOrderDetails)
}

var pizzaOrder = new PizzaOrder();
$(document).ready(function() {


  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    pizza = createPizza();
    pizzaOrder.addPizza(pizza)
    console.log(pizza);
    console.log(pizzaOrder, pizzaOrder.getTotal());
    displayOrder()
  });

  $("#place-order").click(function(event) {
    console.log("place order");
    $("#pizza-create").hide();
    displayOrder()
  });
})
