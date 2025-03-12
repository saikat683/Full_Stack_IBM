let parent=document.getElementById("parent");

async function getData(){
    let data= await fetch(`http://localhost:3000/posts`);
    let res=await data.json();
    showData(res);
    console.log(res);
}
getData();
async function showData(arr){
    // parent.innerHTML=null;
    arr.forEach(ele =>{
        let box=document.createElement("div");
        box.className="box";

        let id=document.createElement("h3");
        id.innerText=ele.id;

        let title=document.createElement("h3");
        title.innerText=ele.title;

        let views=document.createElement("h3");
        views.innerText=ele.views;

        let button=document.createElement("button");
        button.innerText="Click";
        box.append(id,title,views,button);
        parent.append(box);
    });
}
let button=document.getElementById("btn");
button.addEventListener("click",async ()=>{
    let value=document.getElementById("input").value;

    let obj={
        title:value,
        views: Math.floor(Math.random() * (1000 - 100) + 100)
    }
    let res=await fetch(`http://localhost:3000/posts`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    });
    let response=await res.json();
    if(response){
        getData();
        alert("Data Saved Successfully");
    }
    console.log(response);
});