class Calculator{
    add(num1, num2) {
       return num1+num2;
      }
      subtract (num1, num2) {
        return num1-num2;
       }
       multiply(num1, num2) {
        return num1*num2;
       }
       divide(num1, num2) {
        return num1/num2;
       }
    }

class ScientificCalculator{
    square (num1) {
        return num1*num1;
       }
    cube (num1) {
    return num1*num1*num1;
    }
    power (num1,exp) {
        return num1^exp;
       }
       
       
}

const Calculator1= new ScientificCalculator()
// console.log(Calculator1.add(10,20))

console.log(Calculator.prototype.add.call(Calculator1,10,20))
console.log(Calculator.prototype.subtract.apply(Calculator1, [10, 5]))

const multiplyByTwo=Calculator.prototype.multiply.bind(Calculator1, 2)
console.log(multiplyByTwo(4))

const powerOfThree = ScientificCalculator.prototype.power.bind(Calculator1, 3);

// Optional: Call the "multiplyByTwo" method with argument 5 and print the returned result to the console
const result3 = multiplyByTwo(5);
console.log("Result of 'multiplyByTwo' method:", result3);

// Optional: Call the "powerOfThree" method with argument 2 and print the returned result to the console
const result4 = powerOfThree(2);
console.log("Result of 'powerOfThree' method:", result4);