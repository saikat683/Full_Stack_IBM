
const products=[
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "category": "Electronics",
      "price": 49.99,
      "rating": 4.5,
      "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/9/t/1/b235-bt-super-sound-neckband-jvmart-original-imagncvg9yqpvgvk.jpeg?q=90&crop=false"
    },
    {
      "id": 2,
      "name": "Gaming Mouse",
      "category": "Electronics",
      "price": 29.99,
      "rating": 4.2,
      "image": "https://www.mytrendyphone.co.uk/images/6D-4-Speed-DPI-RGB-Gaming-Mouse-G5-Black-05042021-01-p.webp"
    },
    {
      "id": 3,
      "name": "Mechanical Keyboard",
      "category": "Electronics",
      "price": 79.99,
      "rating": 4.7,
      "image": "https://m.media-amazon.com/images/I/71LBvbVa95L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "id": 4,
      "name": "Smartwatch",
      "category": "Wearable",
      "price": 199.99,
      "rating": 4.8,
      "image": "https://m.media-amazon.com/images/I/611KpNJPr4L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "id": 5,
      "name": "Running Shoes",
      "category": "Fashion",
      "price": 59.99,
      "rating": 4.3,
      "image": "https://s3.amazonaws.com/www.irunfar.com/wp-content/uploads/2024/07/25053122/Best-Trail-Running-Shoes-Hoka-Speedgoat-6.jpg"
    },
    {
      "id": 6,
      "name": "Leather Wallet",
      "category": "Fashion",
      "price": 19.99,
      "rating": 4.0,
      "image": "https://i.etsystatic.com/9134755/r/il/f2e22e/1302844190/il_570xN.1302844190_gfb6.jpg"
    },
    {
      "id": 7,
      "name": "Digital Camera",
      "category": "Electronics",
      "price": 349.99,
      "rating": 4.6,
      "image": "https://in.canon/media/image/2018/11/19/b639ce271d2b450c974112ee3a7246ba_PowerShot-SX70-HS-Front-Slant.png"
    },
    {
      "id": 8,
      "name": "Backpack",
      "category": "Accessories",
      "price": 39.99,
      "rating": 4.4,
      "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/bag/z/j/z/48-stylish-backpack-boys-girls-office-college-travel-21-woons-35-original-imah9aghvzgqapfr.jpeg?q=90&crop=false"
    },
    {
      "id": 9,
      "name": "Sunglasses",
      "category": "Fashion",
      "price": 24.99,
      "rating": 4.1,
      "image": "https://media.istockphoto.com/id/1081398784/photo/sunglass-on-white-background.jpg?s=612x612&w=0&k=20&c=3gwUtbgJcRcjB3U60IpRhGNYFSNVYK6QfgrlhVVgK9w="
    },
    {
      "id": 10,
      "name": "Water Bottle",
      "category": "Home & Kitchen",
      "price": 14.99,
      "rating": 4.2,
      "image": "https://m.media-amazon.com/images/I/611eaAr2hQL.jpg"
    },
    {
      "id": 11,
      "name": "Bluetooth Speaker",
      "category": "Electronics",
      "price": 59.99,
      "rating": 4.5,
      "image": "https://cdn.shopify.com/s/files/1/0003/7719/2499/files/1.AVStore-JBL-PartyBox-Encore-Essential-Portable-Bluetooth-Speaker-With-Light-Display-Front-Angled-View-Hero_600x.jpg?v=1682414405"
    },
    {
      "id": 12,
      "name": "Electric Kettle",
      "category": "Home & Kitchen",
      "price": 34.99,
      "rating": 4.6,
      "image": "https://m.media-amazon.com/images/I/61RxcY0R52S.jpg"
    },
    {
      "id": 13,
      "name": "Portable Power Bank",
      "category": "Electronics",
      "price": 39.99,
      "rating": 4.3,
      "image": "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjMzYTljZjJkOTBiZTc1NWZlNzQ4YzA0LXVidXktb25saW5lLXNob3BwaW5nLmpwZw.jpg"
    },
    {
      "id": 14,
      "name": "Smart LED Bulb",
      "category": "Home & Kitchen",
      "price": 19.99,
      "rating": 4.7,
      "image": "https://www.crompton.co.in/cdn/shop/files/bulb1.png?v=1692612581"
    },
    {
      "id": 15,
      "name": "Noise Cancelling Earbuds",
      "category": "Electronics",
      "price": 89.99,
      "rating": 4.8,
      "image": "https://m.media-amazon.com/images/I/61wJe++oZCL.jpg"
    },
    {
      "id": 16,
      "name": "Travel Pillow",
      "category": "Accessories",
      "price": 22.99,
      "rating": 4.2,
      "image": "https://cdn.thewirecutter.com/wp-content/uploads/2018/02/Travel-Pillows-lowres-9709.jpg?auto=webp&quality=60&width=570"
    },
    {
      "id": 17,
      "name": "Yoga Mat",
      "category": "Fitness",
      "price": 29.99,
      "rating": 4.5,
      "image": "https://wiselife.in/cdn/shop/files/1_dbfc0216-dc2e-4bc8-b58f-a448e01c40c8.png?v=1706786907&width=533"
    },
    {
      "id": 18,
      "name": "Men's Wrist Watch",
      "category": "Fashion",
      "price": 129.99,
      "rating": 4.6,
      "image": "https://sc04.alicdn.com/kf/H5687bde9b1824b77a7ef0244717aaf97V.jpg"
    },
    {
      "id": 19,
      "name": "Wireless Charger",
      "category": "Electronics",
      "price": 27.99,
      "rating": 4.3,
      "image": "https://m.media-amazon.com/images/I/71O59aVg-cL.jpg"
    },
    {
      "id": 20,
      "name": "Graphic T-Shirt",
      "category": "Fashion",
      "price": 19.99,
      "rating": 4.1,
      "image": "https://assets.ajio.com/medias/sys_master/root/20230629/nDDs/649cd4e8a9b42d15c91c7cc3/-473Wx593H-466021226-black-MODEL.jpg"
    }
];

function showData(array2){

    array2.forEach((el,index)=>{
        let productBox=document.createElement("div");
        productBox.className="product-box";
         let heading=document.createElement("h3");
         heading.innerText=el.category;
    
         let img=document.createElement("img");
         img.src=`${el.image}`;
    
         let name=document.createElement("h3");
         name.innerText=el.name;
    
         let price=document.createElement("h3");
         price.innerText=el.price;
    
         let rating=document.createElement("h3");
         rating.innerText = `⭐ ${el.rating}`;
    
         let button=document.createElement("button");
         button.innerText="Add To cart";
         button.addEventListener("click",()=>{
             addToCart(el,index);
             alert("Item added to cart");
         });
         productBox.append(heading,img,name,price,rating,button);
         document.getElementById("products").append(productBox);
    });
    
}

showData(products);


let cart=[];
function addToCart(el,index){
 
  cart.push(el);
  localStorage.setItem("cartData",JSON.stringify(cart));
}
let cartButton=document.getElementById("cart");
cartButton.addEventListener("click",function(){
  window.location.href="cart.html";
});

//sorting of products
let select=document.getElementById("sort");
    sort.addEventListener("click",function(){
    const selected=select.options[select.selectedIndex].value;
    if(selected=="ascending"){
      products.sort((a,b)=>a.name.localeCompare(b.name));
    }
    if(selected=="descending"){
      products.sort((a,b)=>b.name.localeCompare(a.name));
    }
    showData(products);
    // products.sort((a,b)=>a.name.localeCompare(b.name));
    // console.log(products);
});