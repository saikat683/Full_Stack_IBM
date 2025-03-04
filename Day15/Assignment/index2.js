function getData() {
    let data = JSON.parse(localStorage.getItem("cartData"));
    if (data.length == 0) {
      let cartContent = document.getElementById("cartContent");
      let div=document.createElement("div");
      div.className="emptyCart";
      let text=document.createElement("h1");
      text.innerText="Your Cart is Empty! ";
      div.append(text);
      cartContent.append(div);
    } else {
      data.forEach((el, index) => {
        let div = document.createElement("div");
        div.className = "EachProduct";
  
        let heading = document.createElement("h3");
        heading.innerText = el.name;
        let image = document.createElement("img");
        image.src = `${el.image}`;
        let category = document.createElement("h3");
        category.innerText = el.category;
        let rating = document.createElement("h3");
        rating.innerText = `⭐ ${el.rating}`;
        let price = document.createElement("h3");
        price.innerText = `$${el.price}`;
        let button = document.createElement("button");
        button.innerText = "Purchase";
        button.addEventListener("click", function () {
          window.location.href = "checkout.html";
        });
        let button2 = document.createElement("button");
        button2.innerText = "Remove";
        button2.addEventListener("click", function () {
          removeFromCart(el, index);
          // console.log(el,index);
        });
        let cartContent = document.getElementById("cartContent");
        div.append(heading, image, category, rating, price, button, button2);
        cartContent.append(div);
      });
    }
  }
  getData();
  
  //redirecting to checkout page
  let purchaseAll = document.getElementById("purchaseAll");
  purchaseAll.addEventListener("click", function () {
    window.location.href = "checkout.html";
  });
  //redirecting to home page
  let home=document.getElementById("home");
  home.addEventListener("click",function(){
    window.location.href="index.html";
  });
  //Remove from cart function
  let cartDisplay = document.getElementById("cartContent");
  function removeFromCart(el, index) {
    let data = JSON.parse(localStorage.getItem("cartData"));
    data.splice(index, 1);
    data = localStorage.setItem("cartData", JSON.stringify(data));
    cartDisplay.innerHTML = "";
    getData();
  }
  