let result = '84bf9ef55688e32ff76e55cae779d317a08e7d13a9e6998fef9f9ea70000f38603aa86247bc40655a4fcb53ee9ada704952ced416d2b39e572339f2f6ce17e7d1111bbbb000022223333444455559999aaaabbbbccccffffffffeeeefffff0f0'
let abc = 'd7bb7bbd0251a7aa805da2e665a152dc30892207432a9c5b3833a7b13e675341538ff1e7e8de03aca320c4652bb3f3f1628a5ad2cff4cd2e896b55d48e37fff7'
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

{
    name: 'learn-react',
    upvotes: '0',
    comments: '[]',
}, {
    name: 'learn-node',
    upvotes: '5',
    comments: '[]',
}, {
    name: 'my-thoughts-on-resumes',
    upvotes: '0',
    comments: '[]',
},