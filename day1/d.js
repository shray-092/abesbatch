const u=prompt("enter the name");
const o=parseInt(prompt("enter the subjects"));
const obj={};
for(i=0;i<o;i++){
    const key=prompt("enter the subject name");
    const value=parseInt(prompt("enter the marks"));
    obj[key]=value;


}
let sum=0;
let maxi=0;
for(let key in obj){
    sum=sum+obj[key];

    maxi=Math.max(maxi,obj[key]);


}
console.log(sum/(o));
console.log(maxi);
