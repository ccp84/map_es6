  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [2, 4, 6, 8, 10]; 
let nums2 = [];
for(let i of nums) {
  nums2.push(i*2);
}
console.log(nums2);

// Using map()

const multiplyByTwo = function (num) {
  return num * 2;
}

const mapNums = nums.map(multiplyByTwo);
console.log(mapNums);

// Simplified w/ map()

const simpNums = nums.map(function (num) {return num * 2})
console.log(simpNums);

// Simplfied w/ map() + arrow function

const arwNums = nums.map(num => num *2)
console.log(arwNums);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

let mapStudents = students.map(student => [student.id, student.name]);
console.log(mapStudents);