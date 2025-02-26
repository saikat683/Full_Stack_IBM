// Problem 1: Create a Student Management System (Using Objects)
const student={
    name:"Saikat Bera",
    rollNumber:168,
    marks:{
        OperatingSystem:90,
        DBMS:95,
        ComputerNetwork:86,
        DSA:78,
        AI:89
    },
    getAverageMarks:function(){
        return (this.marks.OperatingSystem+this.marks.DBMS+this.marks.ComputerNetwork+this.marks.DSA+this.marks.AI)/Object.keys(student.marks).length;
    },
    // getAverageMarks:function(){
    //       let totalMarks=0;
    //       let totalSubjects=0;
    //       for(let sub in student.marks){
    //         totalMarks+=this.marks[sub];
    //         totalSubjects++;
    //       }
    //       return totalMarks/totalSubjects;
    // },
    checkPassOrFail:function(){
        if(this.getAverageMarks()>40){
            console.log("Passed");
        }else{
            console.log("failed");
        }
    }

}
console.log(student.getAverageMarks());//87.6
student.checkPassOrFail();//passed



// Problem 2: Library System (Nested Objects & Methods)
const library={
    books:{
        "Atomic Habits": { author: "James Clear", availableCopies: 3 },
        "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 },
        "Pride and Prejudice":{author:"Jane Austen",availableCopies:10},
        "The Name of the Wind ":{author:" Patrick Rothfuss",availableCopies:8},
    },
    borrowBook:function(bookName){
        if(!(bookName in this.books)){
           console.log("Sorry,this book is not available in library");
        }
         else if(this.books[bookName].availableCopies>1){
            console.log("Yes, the book is available and you can borrow it.");
            this.books[bookName].availableCopies-=1;
        }else{
            console.log("The book is not available for borrowing");
        }
    },
    returnBook:function(bookName){
        this.books[bookName].availableCopies+=1;
        console.log("Thanks for returning the book in time");
    },
}
library.borrowBook("Atomic Habits");//Yes, the book is available and you can borrow it.
console.log(library.books["Atomic Habits"].availableCopies);//3
library.borrowBook("Saikat Bera");//Sorry,this book is not available in library
library.returnBook("Atomic Habits");//Thanks for returning the book in time
console.log(library.books["Atomic Habits"].availableCopies);//3




// Problem 3: Generate Multiplication Table (For Loop)
function generateTable(num,limit){
    for(let i=1;i<=limit;i++){
        console.log(`${num}*${i}=${num*i}`);
    }
}
generateTable(2,6);


//Problem 4: FizzBuzz (If-Else Conditions)
let number=79;
if(number%3==0 && number%5==0){
    console.log("FizzBuzz");
}
else if(number%3==0){
    console.log("Fizz");
}else if(number%5==0){
    console.log("Buzz");
}else{
    console.log(number);
}
//79


//Problem 5: Reverse a String Without Using .reverse()
function reverseString(str){
    let result="";
    for(let i=str.length-1;i>=0;i--){
        result+=str[i];
    }
    console.log("After reversing the string becomes: "+result);
}
reverseString("Saikat");


//Problem 6: Remove Duplicates from an Array
let arr=[1,2,1,5,7,9,0,7,8,4,3,7,9,2];
function removeDuplicates(arr){
    let filteredArray=[];
    for(let i=0;i<arr.length;i++){
        if(! filteredArray.includes(arr[i])){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
console.log(removeDuplicates(arr));//[1,2,5,7,9,0,8,4,3]



//Problem 7: Find the Longest Word in a Sentence
function longestWord(sentence){
    let words=sentence.split(" ");
    let longest="";
    for(let word of words){
        if(word.length>longest.length){
            longest=word;
        }
    }
    console.log("The longest word is: "+longest);

}
longestWord("Coding is amazing and challenging");//challenging



// Problem 8: Custom Array Method (Creating Your Own .map())
let arr2=[1,2,3,4,5,6,7,8];
const callBack=(n)=>{
    return n*2;
}
function myMap(arr2,callBack){

     for(let i=0;i<arr2.length;i++){
        arr2[i]=callBack(arr2[i]);
     }
     return arr2;
}
console.log(myMap(arr2,callBack));//[2, 4, 6, 8, 10, 12, 14, 16]


//Problem 9: Find the First Non-Repeating Character in a String
let str2="aabbcddce";
function firstUniqueCharacter(str2){


     let count={};
    //counting the occurance of each letter in an object
    for(let i=0;i<str2.length;i++){
       if(!count[`${str2[i]}`]){
          count[`${str2[i]}`]=1;
        }else{
            count[`${str2[i]}`]+=1;
        }
   }
   for(let char of str2){
    if(count[char]==1){
        return char;
    }
   }
   return null;

}
console.log(firstUniqueCharacter(str2));//e



//Problem 10: Nested Loop Challenge – Find Pairs that Sum to a Target
function findPair(arr,target){
    let result=[];
    let store=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                result.push(arr[i]);
                result.push(arr[j]);
                store.push(result);
                result=[];
            }
        }
    }
    return store;

}
console.log(findPair([2, 4, 3, 5, 7, 8, 9],10));//[ [ 2, 8 ], [ 3, 7 ], [ 5, 5 ] ]


//Problem 11: Implement a Stack in JavaScript
class Stack{
    constructor(){
        this.items=[];
    }
    //push operation
    push(value){
        this.items.push(value);
    }
    //pop operation
    pop(){
        if(this.items.length===0){
            console.log("Stack is empty");
        }
        return this.items.pop();
    }
    peek(){
        if(this.items.length===0){
            console.log("Stack is empty");
        }
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0;
    }
}
let myStack=new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.pop()); // 20
console.log(myStack.peek()); // 10
console.log(myStack.isEmpty()); // false


//Question: - String Manipulation Challenge




//Question: - Find Most Frequent Element in an Array
let arr4=[1, 3, 2, 3, 4, 1, 3, 2, 3, 5];

function frequency(arr4){
    let count={};
    for(let el of arr4){
        if(! count[`${el}`]){
            count[`${el}`]=1;
        }else{
            count[`${el}`]+=1;
        }
    }
    let most=0;
    let char;
    for( el in count){
        if(count[el]>most){
            most=count[el];
            char=el;
        }
    }
    return char;
}
console.log(frequency(arr4));//3