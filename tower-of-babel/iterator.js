const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let current = 1;

    return {
      next() {
        if (current > max) {
          return { done: true };
        }

        let result = "";

        if (current % 3 === 0) {
          result += "Fizz";
        }

        if (current % 5 === 0) {
          result += "Buzz";
        }

        if (result === "") {
          result = current;
        }

        current++;

        return { done: false, value: result };
      }
    }
  }
}
for (let value of FizzBuzz) {
  console.log(value);
}

