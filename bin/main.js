const n = process.argv[2];

const squareRootN = Math.ceil(Math.sqrt(n));

console.log(`testing ${n} primality`);
console.log(`testing candidates dividors until ${squareRootN}`);
console.log(`test space is ${(squareRootN / n) * 100}% of n`);

function canDivideN(i) {
  return n % i === 0;
}

function testPrimality(n) {
  if (n % 2 === 0 || n % 3 === 0) {
    console.log("n not prime");
    console.log("can be divided by 2 or 3");
    return;
  }

  for (let i = 6; i <= squareRootN; i += 6) {
    if (canDivideN(i - 1)) {
      console.log(i - 1);
      console.log("n not prime");
      console.log(`${n} / ${i - 1} = ${n / (i - 1)}`);
      return;
    }
    if (canDivideN(i + 1)) {
      console.log(i + 1);
      console.log("n not prime");
      console.log(`${n} / ${i + 1} = ${n / (i + 1)}`);
      return;
    }
  }
  console.log(0);
  console.log("n is prime");
}

console.time();
testPrimality(n);
console.timeLog();
