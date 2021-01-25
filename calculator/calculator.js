function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (numArray) {
	const reducer = (sum, curValue) => sum + curValue;
	return numArray.reduce(reducer, 0);
}

function multiply (numArray) {
	const reducer = (product, curValue) => product * curValue;
	return numArray.reduce(reducer, 1)
}

function power(a, b) {
	return Math.pow(a, b)
}

function factorial(a) {
	if (a <= 1) {
		return 1;
	}
	else {
		return factorial(a - 1) * a;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}