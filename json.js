const user = {id:1,name:'Gorib Amir',job:'actor'};
//JSON=JavaScript Object Notation
const stringified= JSON.stringify(user);
console.log(user);
console.log(stringified);
const object = JSON.parse(stringified);
console.log(object);