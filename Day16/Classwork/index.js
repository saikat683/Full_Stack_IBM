//setTimout,setInternal .......................macrotasks
//promise,queMicrotask.......................microtasks
// let name="synchronous";

// console.log(name);
// setTimeout(()=>{
//     console.log("ASynchronously syncing");
//   });
// let surname="code";
// console.log(surname);
// setTimeout(()=>{
//   console.log("ASynchronously syncing:1");
// },2000);
// queueMicrotask(()=>console.log("Microtask Syncing"));

// // console.log(name,surname);
// setTimeout(()=>{
//     console.log("ASynchronously syncing:2")
// });
// for(var i=0;i<5;i++){
//     console.log(i);
//     setTimeout(()=>{
//       console.log(i);
//     },1000);
// }
// console.log(name,surname);
// let myPromise=new Promise((resolve,reject)=>{
//     let flag=true;
//     if(flag){
//         resolve("Promise is resolved with green flag");
//     }else{
//         reject("Promise is rejected with red flag");
//     }
// });
// console.log(myPromise);
async function fetchData() {
  try {
    let data = await fetch("https://fakestoreapi.com/products");
    let ans = await data.json();
    console.log(ans);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
