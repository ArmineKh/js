// 6) Given an array of potential voters, return an object
// representing the results of the vote
// Include how many of the potential voters were in the ages 18-25,
// how many from 26-35, how many from 36-55,
// and how many of each of those age ranges actually voted.
// The resulting object containing this data should have 6 properties.
// See the example output at the bottom.

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

function voterResults(arr) {
  return arr.reduce((final,obj)=>{

    const selector = (obj,min,max,voted) => obj.age>min&&obj.age<max&&obj.voted===voted;

    final.youngVotes = selector(obj,17,26,true)?final.youngVotes+1:final.youngVotes||0;

    final.youth=(obj.age>17&&obj.age<26) ? final.youth + 1 : final.youth || 0,

    final.midVotes= selector(obj,25,36,true) ? final.midVotes + 1 : final.midVotes || 0,

    final.mids = (obj.age>25&&obj.age<36) ? final.mids + 1 : final.mids || 0,

    final.oldVotes=(obj.age>35&&obj.age<56&&obj.voted) ? final.oldVotes + 1 : final.oldVotes || 0,

    final.olds=(obj.age>35&&obj.age<56) ? final.olds + 1 : final.olds || 0

    return final;
  },{})
}


console.log(voterResults(voters));
// Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4
}
*/
