var str = "hai how are you hai     how";
var e1 = /hai/gi;
console.log(str.match(e1));
console.log(str.match(e1).length);
// g - match all occurance
// i - ignore case

var s = "hai 123 how 1 are y1u";
var e2 = /\d+/g;
console.log(s.match(e2));

var e3 = /\s+/g;
console.log(str.match(e3));

var e4 = /\S+/g;
console.log(str.match(e4));