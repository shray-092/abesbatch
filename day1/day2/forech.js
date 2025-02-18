
//using for each

const arr=[10,20,30];

// arr.forEach((ele,id)=>{
//     arr[id]=arr[id]*2;

//     console.log(ele);

// })
// using map 
// const d=arr.map((ar)=>{
//     return ar*2;

// })
// console.log(d);
// console.log(arr);
// arr.reduce((ele,index,c,r)=>{
    
//     console.log(ele,index,c,r);
//     return 0;

// },0)

arr.reduce((ele,index,c,r)=>{
    
    console.log(ele,index,c,r);
    return r;

})