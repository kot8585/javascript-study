/* 드림코딩 - 타입스크립트 프토토타입 데모 코드 */
/*
- 프로토타입은 상속과 재사용을 위해 사용된다.
- es6 이후 class문법을 이용할 수 있고, 또 타입스크립트에서는 class+interface를 이용할 수 있기 때문에 prototype을 직접 이용해서 상속/객체지향을 구현할 일은 별로 없다 
*/
const x = {};
const y = {};
console.log(x); //[[proto]]:Object
console.log(y); //[[proto]]:Object => 모든 객체는 프로토타입을 상속받는다. 
console.log(x.toString()); //[[proto]]를 상속받기 때문에 __proto__에서 제공하는 toString()을 사용할 수 있다. 
console.log(x.__proto__ === y.__proto__); //true => 같은 프로토타입을 상속받기 때문


const array = [];
console.log(array); //[[proto]]: Array //[[proto]]: Object도 상속받음 => Array proto는 Object의 proto를 상속받는다. 

function CoffeeMachine(beans) {
  this.beans = beans;

  /* //Instance member level
  this.makeCoffee = shot => {
    console.log('making... ☕️')
  }; */
}

//Prototype member level
//프로토타입에 함수를 정의함으로써 메서드를 한번만 정의할 수 있다
 CoffeeMachine.prototype.makeCoffee = shots => {
  console.log('making... ☕️');
} 

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

// LatteMachine이 CoffeeMachine을 상속하도록 했다. 
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

// 이제 latteMachine에서 makeCoffee()를 사용할 수 있음
const latteMachine = new LatteMachine(123);
latteMachine.makeCoffee();
