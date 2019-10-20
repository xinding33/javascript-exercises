const removeFromArray = function(...args) {
    if (args.length < 2) {
        return args[0];
    }
    else {
        for (itemToRemove = 1; itemToRemove < args.length; itemToRemove++) {
            for (index = 0; index < args[0].length; index++) {
                if (args[0][index] === args[itemToRemove]) {
                    args[0].splice(index, 1)
                }
            }
        }
    }
    return args[0];

// Method 2
    // let array = args[0];
    // return array.filter(value => !args.includes(value));

// Method 3
    // let array = args[0];
    // let newArray = [];

    // array.forEach(element => {
    //     if (!args.includes(element)) {
    //         newArray.push(element);
    //     }
    // });

    // return newArray;
}

module.exports = removeFromArray
