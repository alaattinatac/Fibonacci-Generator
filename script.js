function fibonacciGen(num) {

    let output = [0, 1];
    if (num === 1) {
        output = [0];
    }
    else {
        for (let i = 2; i < num; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output
}

num = 10

console.log(fibonacciGen(num));



function fibonacciFinder(num) {
    const goldenRatio = 1.618034;
    return Math.round((Math.pow(goldenRatio, (num - 1)) - Math.pow((1 - goldenRatio), (num - 1))) / Math.sqrt(5));
}

console.log(fibonacciFinder(num));

