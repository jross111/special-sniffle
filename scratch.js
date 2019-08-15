let result = '84bf9ef55688e32ff76e55cae779d317a08e7d13a9e6998fef9f9ea70000f38603aa86247bc40655a4fcb53ee9ada704952ced416d2b39e572339f2f6ce17e7d1111bbbb000022223333444455559999aaaabbbbccccffffffffeeeefffff0f0'
let abc = '9eac8fa152225c8121a09347f1bf09b603a3d5c411c0d47d6f3d496161861da8b038f183c2002522945ac9a4723bd34995563f48ab34cb979f0b843e033ebf1c'
let split = result.split( /(?<=^(?:.{4})+)(?!$)/ )
let split1 = abc.split( /(?<=^(?:.{4})+)(?!$)/ )
// console.log(split)

function hex2bi(hex){
    return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}






function convert(arr){
    let neww = []
    arr.forEach(element => {
        let bin = hex2bi(element) + ',' + [element]
        neww.push(bin)
    });
    return neww
}


console.log(convert(split))
console.log(convert(split1))