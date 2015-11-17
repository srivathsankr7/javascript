var obj = {"name":"sriv", "age" : 1, "val" : [1,2,3,"x"]};
console.log(obj);

console.log("\nupdating json:::");
obj.name = "srivathsan";
console.log(obj);

obj["name"] = "KR";
console.log(obj);

console.log("\nadd json:::");
obj.place = "bangalore";
console.log(obj);

console.log("\ndel json:::");
delete obj.place;
console.log(obj);

console.log("\nobject copy json:::");
newobj = obj;
newobj.age = 2;
console.log(obj);



