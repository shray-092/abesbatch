// const obj={
//     "name":"shray",
//     "rollno":163,
//     "name":"raj"
// };//dec;artion
// //keys in object should be string or no value can be of any type.
// console.log(obj);



// how to acces a value(.dot(operator)).
const obj={
"name":"shray",
"rollno":163,
            
};
const n=obj.name;
console.log(n);

// how to add a key value pair

obj.country="india";
console.log(obj);


// acess a key that is not present in the object


console.log(obj.adress);


// acess avalue dynamically


// const key=prompt("please enter the key");
// alert(obj[key]);



//update  a key

obj.name="yuvi";
console.log(obj.name);


//deletion the key value pair

delete obj.name;
console.log(obj);