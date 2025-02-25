let string="SV University";
console.log(string.length);
console.log(string.length-1);
console.log(string[2]);
console.log(string[string.length-1]);
let str2=string.replace("S","V");
console.log(str2);
let arr=[1,2,3,4,"Rishita",1.22,undefined];"Devraj"
console.log(arr)
arr.push("Kritika");
console.log(arr);
arr.pop();
console.log(arr);
arr.pop("Rishita");
console.log(arr);
let obj={
    dipankar:{className:"B.Tech",rn:195,subjects:["NM","DBMS","DSA","RM"]},
    iman:{className:"B.Tech",rn:196,subjects:["NM","DBMS","DSA","RM"]},
    1:undefined
}
console.log(obj)
console.log(obj.dipankar)
console.log(obj["dipankar"])
console.log(obj.dipankar.subjects[1]);
obj.iman="My name";
console.log(obj);
delete obj.iman;
console.log(obj);
obj.sohon={rn:123,hobbies:["Drawing","Painting","Cricket"]};
console.log(obj);
//object literals
let name="Amar Mahato";
let Class="b.Tech";
let hobbies=["Games","Singing"];
let newObj={
    name,Class,hobbies
}
console.log(newObj);
let ans=[1,2,3,[9,4,6,[5,1,9]]];

console.log(ans[3][3][0]);
let superHeroes={
    One: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age:13}
      }

   
}
// console.log(superHeroes["One"].villans[0].health);
console.log(superHeroes.One.metadata.age);
superHeroes.three={
    name:"Hanuman",
    designation:"God",
    power:"Infinity"
};
console.log(superHeroes);