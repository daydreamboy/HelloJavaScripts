var count = 1;

function increment() {
  count++;
}

function decrement() {
  count--;
}

module.exports = {
  count: count,
  increment: increment,
  decrement: decrement
};
