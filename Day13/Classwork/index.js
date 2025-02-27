//for Each
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,20,25,30,35];
// arr.forEach((el,index)=>{//firsr element then index if single argument than only element
//    console.log(el,index);//returns undefined
// });
// let ans=arr.forEach((el,i)=>{
//    return el;
// });
// console.log(ans);

// let ans=arr.map((el,i)=>{
//  return el;   returns new array
// });
// console.log(ans);


//filter
// let output=arr.filter((el,i)=>{
//  return typeof el=="string" || el%5==0; //return new array
  
// });
// console.log(output);

//reduce

// let output=arr.reduce((acc,el)=>{
//     return acc+el;//if accumulator is not defined array's first element will become accumulator and first element will array's second element

// },1)
// console.log(output);

// let output=arr.filter((el,i)=>{
//       return el%5==0;
// }).map((el,index)=>{
//     return el*2;
// }).filter((el,index)=>{
//     return el%10==0;
// }).reduce((acc,el)=>{
//      return acc+el;
// });
// console.log(output);

// let arr2=[3,5,2,89,67,56,34,32,1,90,45,67,32,45];
// let ans=arr2.sort((a,b)=>{ return a-b});
// console.log(ans);
let data=[
    {name:"watch",price:2000,desc:"Good Watch",rating:4},
    {name:"shoe",price:1200,desc:"Good shoe",rating:4.5},
    {name:"car",price:2000,desc:"Wonderful car",rating:4.9},
    {name:"phone",price:2000,desc:"Wow phone",rating:4},
    {name:"laptop",price:20000,desc:"Nice Laptop",rating:3},
    {name:"bottle",price:30,desc:"Good Bottle",rating:4.3},
];
// data.sort((a,b)=>{return a.price-b.price})
data.sort((a,b)=>{
    let nameA=a.name.toUpperCase();
    let nameB=b.name.toUpperCase();
    if(nameA<nameB){
        return -1;
    }
    if(nameA>nameB){
        return 1;
    }
});
console.log(data);

