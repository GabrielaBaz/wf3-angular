//Example 1
// function add(a: number, b: number) {
//   return a + b;
// }
// console.log(add(4, 2));
//example to show an error
//console.log(add("4", "2"));
//Example 2 - creating a counter object
var Counter = /** @class */ (function () {
    //constructor
    function Counter(name, max) {
        this.value = 0;
        this.max = max;
        this.name = name;
    }
    //method
    Counter.prototype.getValue = function () {
        return this.value;
    };
    Counter.prototype.increment = function () {
        for (var i = 1; i <= this.max; i++) {
            console.log("Counter " + this.name + "'s value is now " + i);
        }
    };
    return Counter;
}());
var counter1 = new Counter("Counter #1", 5);
var counter2 = new Counter("Counter #2", 3);
counter1.increment();
counter2.increment();
