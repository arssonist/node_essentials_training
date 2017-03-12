//assertion engine
var expect = require("chai").expect;
//rewirse lets us inject test data into module.
var rewire = require("rewire")
//SUT- system under test
// var order = require("../lib/order");
//---load order with rewire
var order = rewire("../lib/order");
//moch describe
describe("Order Items", function(){
//callback is where tests actaully go

//add a beforeEach hook
//callback will execute b4 each test
  beforeEach(function
//create some random test data
  (){
    this.testData = [
      {sku: "AAA", qty: 10},
      {sku: "BBB", qty: 0},
      {sku: "CCC", qty: 3},
    ]
//setting this with require
    order.__set__("inventoryData", this.testData)
  });


//stub the test
  it("order an item when there are enough in stock", function(done){

    order.orderItem("CCC", 3, function(){
      done(); 
    });

  });

})
