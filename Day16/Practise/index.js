// let arr=[1,2,3,4,5,6,7,8,9,10];
// //for each function
// arr.forEach((el,index)=>{
//     console.log(`${el} is present at index: ${index}`);
// });
// //map function
// let newArr=arr.map((el,index)=>{
//     return el*2;
// });
// console.log(newArr);
// //filter function
// let even=arr.filter((el,index)=>{
//     return el%2==0;
// });
// console.log(even);
// //every function
// let newArr2=arr.every((el,index)=>{
//     return el%1==0;
// });
// console.log(newArr2);
// //some function
// let newArr3=arr.some((el,index)=>{
//     return el%12==0;
// });
// console.log(newArr3);
// //reduce function
// let value=arr.reduce((acc,el)=>{
//     return acc+el;
// },0);
// console.log(value);
// //finding minimum using reduce function
// let min=arr.reduce((acc,el)=>{
//     if(el<acc){
//         return el;
//     }else{
//         return acc;
//     }
// });
// console.log(min);

//call back hell
let h1 = document.querySelector("h1");
function changeColor(color, delay, nextChangeColor) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextChangeColor) {
      nextChangeColor();
    }
  }, delay);
}
changeColor("red", 1000, () => {
  changeColor("green", 1000, () => {
    changeColor("blue", 1000, () => {
      changeColor("aqua", 1000, () => {
        changeColor("purple", 1000, () => {
          changeColor("violet", 1000);
        });
      });
    });
  });
});

function saveToDb(data, success, failure) {
  let internetSpeed = Math.random() * 10 + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

saveToDb(
  "apna College",
  () => {
    console.log("Success 1: Data saved successfully");
    saveToDb(
      "Hellow World",
      () => {
        console.log("Success 2: Data saved successfully");
        saveToDb(
          "Good Morning",
          () => {
            console.log("Success 3: Data saved successfully");
          },
          () => {
            console.log("Failure 3: Data saving failed");
          }
        );
      },
      () => {
        console.log("Failure 2: Data saving failed");
      }
    );
  },
  () => {
    console.log("Failure 1: Data saving failed");
  }
);
