//==================Exercise #1 ==========//

/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(dog_names) {
    for (let i = 0; i < dog_names.length; i++) {
        if (dog_string.includes(dog_names[i])) {
            console.log(`Matched ${dog_names[i]}`);
        } else {
            console.log("No Match");
        }
    }
}

findWords(dog_names);

//============Exercise #2 ============//

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr.splice(i, 1, "even index");
        }
    }
    console.log(arr);
}

replaceEvens(arr);

//CodeWar Problems//

/* Problem 1: Quarter of the year
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
Solution: */

const quarter = (month) => {
  if (month >= 1 && month <= 3)
  return 1;
else if (month >= 4 && month <= 6)
  return 2;
else if (month >= 7 && month <= 9)
  return 3;
else
  return 4;
}

console.log(quarter(3));
console.log(quarter(8));
console.log(quarter(11));

/* Problem 2: If you can't sleep, just count sheep!!
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
Solution: */

const countSheep = (num) => {
    let sheepCount = '';
    for (let i = 1; i <= num; i++) {
      sheepCount += `${i} sheep...`;
    }
    return sheepCount;
  }

  console.log(countSheep(0));
  console.log(countSheep(1));
  console.log(countSheep(2));
  console.log(countSheep(3));