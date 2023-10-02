//Fast, Normal or Slow?

const speed = 90;
const msg = speed >= 120 ? "Fast" : "Slow";
console.log(msg);

// or
// const msg = speed >= 120 ? "Fast" : (speed >= 90 ? "Normal" : "Slow");