function PizzaJoint() {
  this.base = "",
  this.price = 0,
  this.toppings = []
}

PizzaJoint.prototype.addToppings =
function (topping) {
  this.toppings.push(base)
}

PizzaJoint.prototype.setPrice =
function (base){
  var basePrice = 10;
  var toppingPrice = 1;
  this.price = basePrice + this.toppings.length*toppingPrice;
}

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var pizzaBase = $("input:radio[name=pizza-base]:checked").val();
    console.log(pizzaBase);

    var pizzaToppings = $("input:checkbox[name=toppings]:checked").each(function(index){
      console.log(index+' checkbox has value ' +$(this).val());
    });

  })
})
