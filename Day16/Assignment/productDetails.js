let data = JSON.parse(localStorage.getItem("cart"));
console.log(data);
function showData(data) {
  let div = document.createElement("div");
  div.className = "product";
  let image = document.createElement("img");
  image.src = data[0].image;
  let name = document.createElement("h3");
  name.innerText = data[0].title;
  let price = document.createElement("h3");
  price.innerText = `Price: $${data[0].price}`;
  let category = document.createElement("h3");
  category.innerText = `Category: ${data[0].category}`;
  let rating = document.createElement("h3");
  rating.innerText = `Rating: ⭐${data[0].rating.rate}, Count:${data[0].rating.count}`;
  let button1 = document.createElement("button");
  button1.innerText = "View Details";
  let description=document.createElement("h3");
  description.innerText=`Description: ${data[0].description}`

  let AllProducts = document.getElementById("singleProduct");
  div.append(image, name, price, category, rating, description);
  AllProducts.append(div);
}
showData(data);
let move=document.getElementById("AllProducts");
move.addEventListener("click",function(){
    window.location.href="index.html";
});
