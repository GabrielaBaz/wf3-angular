//Example 1
// function add(a: number, b: number) {
//   return a + b;
// }

// console.log(add(4, 2));

//example to show an error
//console.log(add("4", "2"));

//Example 2 - creating a counter object

class Counter {
  //Atributes:
  name: string;
  value = 0;
  max: number;

  //constructor
  constructor(name: string, max: number) {
    this.max = max;
    this.name = name;
  }

  //method
  getValue(): number {
    return this.value;
  }

  increment(): void {
    for (let i = 1; i <= this.max; i++) {
      console.log("Counter " + this.name + "'s value is now " + i);
    }
  }
}

const counter1 = new Counter("Counter #1", 5);
const counter2 = new Counter("Counter #2", 3);

counter1.increment();
counter2.increment();
