// // Two separate functions



// // const u=(a,b)=>{
// //     const ans=a+b;
// //     return ans;
// // }
// // const pp=(txt)=>{
// //     console.log("................");
// //     console.log(txt);
// //     console.log("...............................")
// // // }

// // // const res=u(20,30);
// // // pp(res);




// // const u=(a,b)=>{
// //     const ans=a+b;
// //     return ans;
// // }
// // const pp=(txt)=>{
// //     console.log("................");
// //     console.log(txt);
// //     console.log("...............................")
// // }

// // pp(u(20,30));// this not a call back function 


// const u=(a,b,c)=>{
//     const ans=a+b;
//     c(ans);
// }
// const pp=(txt)=>{
//     console.log("................");
//     console.log(txt);
//     console.log("...............................")
// }

// u(20,30,pp);
// //pp is the call back functyom
// // //u is the hof
// // decoupled code
// tempalte literals${in}
const getmetadata=()=>{
    const name=prompt("pls enter ur name");
    console.log("hello",name)
    const count=parseInt(prompt("pls enter the no of subjects"));
    return count;

}

const num =getmetadata();

const getsubjects=(num)=>{
    const record={};
    for(let i=0;i<num;i++){
        const subname=prompt(`enter sub name ${i+1}`);
        const marks=prompt(`ls enter marks for ${subname}`);
        const submarks=parseInt(marks);
        record[subname]=submarks;
    }
    return (record);
}


const getpercentage=(obj)=>{
    const a=[];
    let sum=0;
    let c=0;
    let d=0;
    for(let key in obj){
        a.push(obj[key]);

    }
    // a.forEach((ele)=>){
    //     sum=sum+ele;
    //     c=c+1;

    // }
    // const s=sum/c;
    // return s;
    for(let i=0;i<a.length;i++){
        sum=sum+a[i];
        
        
    }
    return (sum/(a.length*100))*100;


}
const getmaxmarks=(obj)=>{
    const a=[];
    const b=[];
    const e=[];
    let sum=0;
    let c=0;
    let d=0;
    for(let key in obj){
        a.push(obj[key]);

    }
    for(let key in obj){
        b.push(key);

    }

    for(let i=0;i<a.length;i++){
        d=Math.max(a[i],d);

    }
    for(let i=0;i<a.length;i++){
        if(a[i]==d){
            e.push(b[i]);
        }

    }
    return {subname:e,maxmarks:d};




}
const getgrade=(percentage)=>{
    const g=[
        [90,"A"],
        [80,"B"],
        [70,"c"],
        [60,"D"],
        [50,"E"],
    ]
    let grade="F";
    g.forEach((arr)=>{
        if(percentage>=arr[0]){
            grade=arr[1];
            
        }
    }
    )
    return grade;
}
const record =getsubjects(num);
const percentage=getpercentage(record);
const maxmarks=getmaxmarks(record);
const grade=getgrade(percentage);

console.log(percentage);
console.log(maxmarks);
console.log(`grades ${grade}`);