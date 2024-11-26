const add = function(...add) {
	result = [...add].reduce((acc, val) => acc + val, 0);
  return result;
};

const subtract = function(...sub) {
	result = [...sub].reduce((acc, val) => acc - val);
  return result;
};

const sum = function(sum) {
	result = sum.reduce((acc, val) => acc + val, 0);
  return result;
};

const multiply = function(multi) {
  result = multi.reduce((acc, val) => acc * val);
  return result;
};

const power = function(num, pow) {
	result = Math.pow(num, pow);
  return result;
};

const factorial = function(fac) {
  let f = [];
	if (fac == 0 || fac == 1) {
    return 1;
  } else if (f[fac] > 0) {
      return f[fac];
  }
  return f[fac] = factorial(fac-1) * fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
