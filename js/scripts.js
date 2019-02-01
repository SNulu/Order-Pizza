function PizzaJoint() {
  this.base = "";
  this.toppings = [];
  this.price = 0;
}

PizzaJoint.prototype.setPrice = function (){
  var basePrice = 10;
  var toppingPrice = 1;
  this.price = basePrice + this.toppings.length*toppingPrice;
}


$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

        var pizzaBase = $("input:radio[name=pizza-base]:checked").val();
        var pizzaToppings = $("input:checkbox[name=toppings]:checked").val();

        console.log(pizzaBase);
        console.log(pizzaToppings);
  })
})
