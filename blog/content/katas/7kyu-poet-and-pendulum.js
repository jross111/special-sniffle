// https://www.codewars.com/kata/the-poet-and-the-pendulum/train/javascript 


// function sorted (points){
//     return points.sort((a, b) => a - b );
// }


function pendulum(values) {

    // a place to store the pendulum array (solution)


    // sort values 
    let sortedValues = values.sort((a, b) => a - b );
    // boolean, right or left
    let results = sortedValues[0];
    let isLeft = false;
    //iterate over sorted array
    for (let i = 0; i < sortedValues.length; i++) {
        const value = sortedValues[i];
        if (isLeft) {
            results.push(value);
            
        } else {
            // results.unShift(value);
            results.unshift(value)
        }
        isLeft = !isLeft
    }
        // if it's the first value
            // insert it to the array
        // if should go on right
            // push into array
            // change boolean
        // if should go on left
            // unshift into array
            // change boolean

    // return pendulum
    return sortedValues
};






console.log(pendulum([49,40,41,41,39,43,40,46,30,47,46,40], [47,46,41,40,40,30,39,40,41,43,46,49]))
console.log(pendulum([48,41,38,35,50,46,38,42,37,49,44,32,37], [50,48,44,41,38,37,32,35,37,38,42,46,49]))
console.log(pendulum([49,30,39,30,40,44,43,48,47,50,42,48,33], [50,48,47,43,40,33,30,30,39,42,44,48,49]))
console.log(pendulum([-19,-9,-5,-6,-15,-16,-5,-12], [-5,-9,-15,-19,-16,-12,-6,-5]))
console.log(pendulum([-18,-2,-11,-10,-6,-7,-7,-12,-16], [-2,-7,-10,-12,-18,-16,-11,-7,-6]))
console.log(pendulum([-10,-10,-12,-13,-5,-10,-4,-17,-5,-12], [-5,-10,-10,-12,-17,-13,-12,-10,-5,-4]))
console.log(pendulum([9,4,6,4,10,5], [9,5,4,4,6,10]))
console.log(pendulum([10,5,6,10], [10,5,6,10]))
console.log(pendulum([4,6,8,7,5], [8,6,4,5,7]))


let x = [49,40,41,41,39,43,40,46,30,47,46,40]


