function add ( a,b){
 return a+b;
}

var toAdd = [1,4,3];
console.log(add(...toAdd));

var names = ['Mike','Ben'];
var final = ['Andrew', ...names];

final.forEach(function(name){
  console.log('Hi ' + name);

})
