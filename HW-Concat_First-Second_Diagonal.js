function concatFirstDiagonal(twoDimArray) {
    // your code goes here
    // index of array I'm in matches the index of the string I need
    let newArr = []
    for(i=0;i < twoDimArray.length; i++){
      newArr.push(twoDimArray[i][i])
  //FIRST ATTEMPT: return came too soon, syntax off
  //   let newArr = []
  // for(i=0;i < twoDimArray.length; i++){
  //   if(i === twoDimArray[i][i]){
  //     return newArr.push();
    }
    return newArr.join('');
};
  

const someArr1 = [
  ['L','z','x','C','v','B'],
  ['t','i','I','p','e','7'],
  ['w','y','s','r','m','x'],
  ['q','U','l','b','k','H'],
  ['A','i','G','Y','o','L'],
  ['n','f','d','W','z','n']
]

// solution:
console.log(concatFirstDiagonal(someArr1));
// ==> "Lisbon"

//=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+

function concatSecondDiagonal(twoDimArray) {
  // your code goes here
   let newArr = []
   let x = twoDimArray.length-1
for(let i=0; i < twoDimArray.length; i++){
  newArr.push(twoDimArray[i][x])
  // console.log(i,x)
  x--
}
return newArr.join('');
}

const someArr2 = [
['L','z','x','C','v','B'],
['t','i','I','p','e','7'],
['w','y','s','r','m','x'],
['q','U','l','b','k','H'],
['A','i','G','Y','o','L'],
['n','f','d','W','z','n']
];

// solution:
console.log(concatSecondDiagonal(someArr2));
// ==> "Berlin"