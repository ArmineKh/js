// 3) Turn an array of voter objects into a count of how many
// people voted
function totalVotes(arr) {
   // your code here
   return arr.reduce(function(count, current) {
     if (current.voted === true) {
       ++count;
     }
     return count;
   },0);
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

/*Note: You don't necessarily have to use reduce for this,
so try to think of multiple ways you could solve this.
*/
