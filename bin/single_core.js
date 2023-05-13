const n = process.argv[2];

const squareRootN = Math.ceil(Math.sqrt(n));

const canDivideN = (i) => n % i === 0;

export const testPrimality = (n) => {
  if (n % 2 === 0 || n % 3 === 0) {
    return;
  }

  for (let i = 6; i <= squareRootN; i += 6) {
    if (canDivideN(i - 1)) {
      return;
    }
    if (canDivideN(i + 1)) {
      return;
    }
  }
};

console.time("singleCore");
testPrimality(n);
console.timeEnd("singleCore");
