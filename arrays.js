var ar = ["hai", 1.2];
console.log(ar);
console.log(" array[1] :"+ar[1]);

var nestedarray = ["abc", [1,2]];
console.log(nestedarray);
console.log("nestedarray[1][1] :" + nestedarray[1][1]);

var newarray = [1,2];
console.log("\n\nmodifying arrays :::" + newarray);
newarray[1] = 3;
console.log("after modifying : " +newarray);

var num = [1,2,3,4,5];
console.log("\n\npop:::");
console.log(num);
console.log("\npop :" + num.pop() + "\nafter pop :" + num);

console.log("\n\npush:::");
console.log(num);
console.log("\npush (count):" + num.push(10) + "\nafter push :" + num);

console.log("\n\nshift:::");
console.log(num);
console.log("\nshift:" + num.shift() + "\nafter shift :" + num);

console.log("\n\nunshift:::");
console.log(num);
console.log("\nunshift (count):" + num.unshift("abc") + "\nafter unshift :" + num);

