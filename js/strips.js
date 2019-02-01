function PizzaJoint(base, toppings) {
  this.base = base;
  this.toppings = toppings;
}

PizzaJoint.prototype.getPrice = function (){
  var basePrice = 10;
  var toppingPrice = 1;
  return basePrice + this.toppings.length*toppingPrice;
}
