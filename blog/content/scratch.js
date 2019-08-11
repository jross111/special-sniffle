// // toggleVisibility(){
// //     if (this.state.visibility == true) {
// //         this.setState({
// //             visibility: false
// //         })} else {
// //         this.setState({
// //             visibility: true
// //         }),
// //     }
// // }

// // toggleVisibility() {
// //     if (this.state.visibility == true) {
// //     this.setState({
// //       visibility: false
// //     })} else {
// //       this.setState({
// //         visibility: true
// //       })
// //     }
// //   }


//   console.log("hi")

//   function findLongestWordLength(str) {
//     let words = str.split(' ')
//     let maxLength = 0

//     for (let i = 0; i < words.length; i++) {
//       if(words[i].length > maxLength){
//         maxLength = words[i].length
//       }
//     }
//     return maxLength
//   }

//   console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))


//   function largestOfFour(arr) {
//     let results = [];
//     for (i = 0; i < arr.length; i++){
//       let largestNumber = arr[i][0];
//       for (ii = 0; ii < arr[i].length; ii++){
//         if(arr[i][ii] > largestNumber){
//           largestNumber = arr[i][ii];
//         }
//       }
//       results[i] = largestNumber
//     }
//     return results
//   }
  

//   function largestOfFour(arr) {
//     var results = [];
//     for (var n = 0; n < arr.length; n++) {
//       var largestNumber = arr[n][0];
//       for (var sb = 1; sb < arr[n].length; sb++) {
//         if (arr[n][sb] > largestNumber) {
//           largestNumber = arr[n][sb];
//         }
//       }
  
//       results[n] = largestNumber;
//     }
  
//     return results;
//   }

//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//   let string = "hello my name is Jamie"
//   let regex = /jamie/i
//   string.match(regex)


//   let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/gi;

// console.log(twinkleStar.match(starRegex)); // returns ["Twinkle", "twinkle"]




// function incrementer(nums){
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = nums[i] + i + 1
//   }
//   return nums
// }




// let x = [1, 2, 3, 4]
// let solution = incrementer(x);
// solution
function generateHashtag (str) {
  //split the string into an array of words
  let words = str.split(' ')
  // capitalize each word
  for (let i = 0; i < words.length; i++) {
    words[i].charAt(0).toUpperCase();
  }
  return words + str


  // join the array of words back into a string
  // prepend a #
}

let x = " Hello welcome to my kata"
let solution = generateHashtag(x)
solution
