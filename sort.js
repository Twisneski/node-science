'use strict'

const chalk = require('chalk')
const util = require('util')

const arr = [6,5,3,1,8,7,2,4]

console.log('start', arr)
//swap sort function
// function swap (array, index1, index2) {
//   const temp = array[index1]

//   array[index1] = array[index2]
//   array[index2] = temp
// }

//Bubble sort function look at 1st number then compare second number
// function bubbleSort (array) {
//   for (let j = 1; j < array.length; j++) {
//     for (let i = 0; i < array.length - j; i++) {
//       if (array[i] > array[i + 1]) {
//         swap(array, i, i + 1)
//         console.log(chalk.red(util.inspect(array)))
//       }
//       console.log(chalk.dim(util.inspect(array)))
//     }
//   }

//   return array
// }

// console.log('bubbled', bubbleSort(arr))


//insertion sort
// look at first number then compare to second then take 3 number and compare to 2 then 1.look at 4th number then compare to 3rd then 2nd then 1st
// 1st iteration compare 1 and 2
// 2nd iteration compare 2 and 3
// 3rd iteration compare 3 to 2 then to 1

// function insertionSort(array) {
//   for(var i = 0; i < array.length; i++) {
//     var arr = array[i];

//     for(var j = i - 1; j >= 0 && (array[j] > tmp); j--) {
//       array[j+1] = array[j];
//     }

//     array[j+1] = arr;
//     console.log(chalk.red(util.inspect(array)))
//   }
//     return array
// }
//   console.log('insertionSort', insertionSort(arr))


//selection sort
// if (array[minimumIndex] > array[1]{

// })




function selectionSort(items) {
      var length = items.length;

      for (var i = 0; i < length-1; i++) { //Number of passes
        var min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
        for (var j = i+1; j < length; j++) { //Note that j = i + 1 as we only need to go through unsorted array
          if(items[j] < items[min]) { //Compare the numbers
            min = j; //Change the current min number position if a smaller num is found
          }
        }
        if(min != i) { //After each pass, if the current min num != initial min num, exchange the position.
          //Swap the numbers
          var tmp = items[i];
          items[i] = items[min];
          items[min] = tmp;
        }
      }
      return items
    }
  console.log('selectionSort', selectionSort(items))





