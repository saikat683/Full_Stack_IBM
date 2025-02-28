function getData(){
    let parseData=JSON.parse(localStorage.getItem("cartData"));
    console.log(parseData);
    let cart=document.getElementById("fullCart");
    parseData.forEach((el,index)=>{
        let div=document.createElement("div");
        div.className="cartItem";
    
        let heading=document.createElement("h3");
        heading.innerText=el.category;
    
        let img=document.createElement("img");
        img.src=`${el.image}`;
        
        let name=document.createElement("h3");
        name.innerText=el.name;
    
        let rating=document.createElement("h3");
        rating.innerText=el.rating;
    
        let price=document.createElement("h3");
        price.innerText=el.price;
    
        let button=document.createElement("button");
        button.innerText="purchase";
        button.addEventListener("click",function(){
            alert("Item purchased successfully!");
            // removeElement(el);
        });
        div.append(heading,img,name,rating,price,button);
        cart.append(div);
    });

}
getData();
let home=document.getElementById("home");
home.addEventListener("click",function(){
   window.location.href="index.html";
});
function removeElement(el){
    console.log(el);
}

