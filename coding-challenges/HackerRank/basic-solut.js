function reverseList(arr) {
  let reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
}

// Input
const inputList = [19, 22, 3, 28, 26, 17, 18, 4, 28, 0];

// Reverse the list
const reversedList = reverseList(inputList);

// Output
console.log(reversedList);