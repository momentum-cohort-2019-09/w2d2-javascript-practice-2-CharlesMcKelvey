// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// function remove(names, name) {          // Try for loop
//     let newNames = names.slice()        // New copy of array. Never manipulate original
//     let idx = students.indexOf(name)    // Checking to see if it's there and saving it's position (-1 if it isn't)
//     if (idx !== -1) {                   // Checking if it isn't there, because -1 is what is returned if you don't have the name
//         return newNames.splice(idx, 1)  // Removing the name from the list 
//     } else {
//         return newNames
//     }
// }

// function remove(names, name) {
//     let copyNames = names.slice()
//     console.log("copyNames:" + copyNames)
//     console.log("names:" + names)
//     console.log("name:" + name)
//     for (let i = 0; i < names.length; i++) {
//         console.log("names[i]:" + names[i])
//         if (names[i] === name) {
//             copyNames.splice(i, 1)
//             console.log("copyNames:" + copyNames)
//         } 
//     }
//     return copyNames
// }
// Is there a way to make this function work above? 
// Working version below 2.


// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

function remove(names, name) {
    let newNames = []
    for (let i = 0; i < names.length; i++) {
        if (names[i] !== name) {
            newNames.push(names[i])
        }
    }
    return newNames
}
// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(numbers) {
    let sum = 0
    let myNumbers = numbers.slice()
    for (let i = 0; i < numbers.length; i++) {
        sum += myNumbers.shift()
    }
    return sum
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
function average(numbers) {
    let sum = 0
    let myNumbers = numbers.slice()
    if (myNumbers.length === 0) {
        return 
    } else {
        for (let i = 0; i < numbers.length; i++) {
            sum += myNumbers.shift()
        }
    }
    let average = sum/numbers.length
    return average
}
// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
function minimum(numbers) {
    let min = null
    let myNumbers = numbers.slice()
    if (myNumbers.length === 0) {
        return
    } else {
        for (let i = 0; i < numbers.length; i++) {
            let placeholder = numbers[i]
            if (min === null) {
                min = placeholder
            } else {
                if (placeholder < min) {
                    min = placeholder
                }
            }
        }
    }
    return min
}
// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.
// function selectionSort(numbers) {
//     let myNumbers = numbers.slice()
//     let sorted = []
//     for (let i = 0; i < numbers.length; i++) {
//         if (sorted.length === 0) {
//             sorted.push(myNumbers[i])
//         } else {
//             for (let n = 0; n < sorted.length; n++) {
//                 if (myNumbers[i] < sorted[n]) {
//                     sorted.splice(n, 0, myNumbers[i])
//                 } else {

//                 }
//             }
//         }
//     }
// }

function selectionSort(numbers) {
    let myNumbers = numbers.slice()
    console.log("myNumbers: " + myNumbers)
    for (let i = 0; i < numbers.length; i++) {
        if (myNumbers.length === 0 || myNumbers.length === 1) {
            return myNumbers
        } else {
            for (let j = i + 1; j < numbers.length; j++) {
                console.log("myNumbers:" + myNumbers)
                console.log("j: " + j)
                if (myNumbers[i] > myNumbers[j]) {
                    let temp = myNumbers[j]
                    myNumbers[j] = myNumbers[i]
                    myNumbers[i] = temp
                } 
                console.log(myNumbers)
                // let num = minimum(myNumbers)
                // myNumbers.remove(myNumbers, num)
                // sorted.push(num)
            }
        }
        return myNumbers
    }
}

// function selectionSort(numbers) {
//     var len = array_length(numb);
//     for (var i = 0; i < len - 1; i = i + 1) {
//         var j_min = i;
//         for (var j = i + 1; j < len; j = j + 1) {
//             if (A[j] < A[j_min]) {
//                 j_min = j;
//             } else { }
//         }
//         if (j_min !== i) {
//             swap(A, i, j_min);
//         } else { }
//     }
// }

// function selectionSort(numbers) {
//     let myNumbers = numbers.slice()
//     let sorted = []
//     while (myNumbers.length > 0) {
//         if (myNumbers.length === 0 || myNumbers === undefined) {
//             return sorted
//         } else if (myNumbers.length === 1) {
//             return myNumbers
//         } else {
//             for (let i = 0; i < numbers; i++) {
//                 let num = minimum(myNumbers)
//                 myNumbers.remove(myNumbers, num)
//                 sorted.push(num)
//             }
//         }
//     }
//     return sorted
// }

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

function textList(strings) {
    let newStrings = ""
    newStrings = strings.join()
    return newStrings
}
