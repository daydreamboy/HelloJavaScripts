function cube(x) {
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

var graph = {
  options: {
    color: "white",
    thickness: "2px"
  },
  draw: function() {
    console.log(`From graph draw function with color ${this.options.color}, thickness ${this.options.thickness}`);
  }
};

// Note: named export
export { cube, foo, graph };
