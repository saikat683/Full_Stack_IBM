// console.log(this);
// let obj={
//     name:"Shanti",
//     class:"B.Tech in CSE",
//     myFunction:()=>{
//         console.log(this);
//        console.log("I am a method inside a object");
//     },
//     subjects:["DBMS","OS","AI","DL"],
//     newObj:{
//         1:80,
//         nestedFunction:function(){
//             console.log(this);
//             console.log("I am a nested method of objects");
//         },
//         nestedNewObj:{
//             myMethod:function(){
//                 console.log(this);
//                 console.log("Another nested function");
//             }
//         }
//     }
// }
// obj.myFunction();
// obj.newObj.nestedFunction();
// obj.newObj.nestedNewObj.myMethod();/
// let num1=10,num2=20;
// if(num1<num2){
//     console.log(`${num2} is greater then ${num1}`);
// }else if(num1==num2){
//     console.log(`${num2} is equal ${num1}`);
// }
// else{
//     console.log(`${num2} is less then ${num1}`);
// }
// let num=45;
// if(num%3==0 && num%5!=0){
//     console.log("Fizz");
// }else if(num%5==0 &&num%3!=0){
//     console.log("Buzz");
// }else if(num%3==0 && num%5==0){
//     console.log("Fizz Buzz");
// }
//For loop
// let num=30;
// for(let i=3;i<=num;i=i+3){
//     console.log(i);
// }
// let arr=[1,2,3,4,5,6,7];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i],i);
// }
// let str="Shanti Kumari";
// for(let i=0;i<str.length;i++){
//     console.log("a"+str[i])
// }
// let arr=["a","b","c","d","e","f","g","h"];
// for(let num of arr){
//     console.log(num);
// }


//while loop
// let num=5;
// while(num<10){
//    //logic
//    i++;
// }
let arr=[1,2,3,4,5,6,7,8,9,10];
for(let el of arr){
    if(el%2==0){
        console.log(`${el} is even number`);
    }else{
        console.log(`${el} is odd number`);
    }
}