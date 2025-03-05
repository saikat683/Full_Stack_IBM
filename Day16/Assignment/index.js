async function fetchData() {
  try {
    let data = await fetch("https://fakestoreapi.com/products");
    let data2 = await data.json();
    function displayData(data2) {
      data2.forEach((el, index) => {
        let div = document.createElement("div");
        div.className = "product";
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("h3");
        name.innerText = el.title;
        let price = document.createElement("h3");
        price.innerText = `Price: $${el.price}`;
        let category = document.createElement("h3");
        category.innerText = `Category: ${el.category}`;
        let rating = document.createElement("h3");
        rating.innerText = `Rating: ⭐${el.rating.rate}, Count:${el.rating.count}`;
        let button1 = document.createElement("button");
        button1.innerText = "View Details";
        button1.addEventListener("click", () => {
          saveToLocalStorage(el, index);
        });

        let AllProducts = document.getElementById("AllProducts");
        div.append(image, name, price, category, rating, button1);
        AllProducts.append(div);
      });
    }
    displayData(data2);
    //Filtering products based on elements
    let filterByPrice = document.getElementById("filterByPrice");
    filterByPrice.addEventListener("change", function () {
      let filtered = [...data2];
      const selected = filterByPrice.options[filterByPrice.selectedIndex].value;
      if (selected == "low") {
        filtered = filtered.filter((el, index) => el.price <= 100);
        console.log("below 100 selected");
      }
      if (selected == "medium") {
        filtered = filtered.filter(
          (el, index) => el.price >= 100 && el.price <= 200
        );
        console.log("Above 100 selected");
      }
      if (selected == "high") {
        filtered = filtered.filter((el, index) => el.price > 200);
      }
      let AllContent = document.getElementById("AllProducts");
      AllContent.innerHTML = "";
      displayData(filtered);
    });
    //Filtering products based on category
    let filterByType = document.getElementById("filterBytype");
    filterByType.addEventListener("change", function () {
      let filtered = [...data2];
      const selected = filterByType.options[filterByType.selectedIndex].value;
      if (selected == "men's clothing") {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() == "men's clothing"
        );
      }
      if (selected == "women's clothing") {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() == "women's clothing"
        );
      }
      if (selected == "jewelery") {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() == "jewelery"
        );
      }
      if (selected == "electronics") {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() == "electronics"
        );
      }
      let AllContent = document.getElementById("AllProducts");
      AllContent.innerHTML = "";
      displayData(filtered);
    });

    //searching by debouncing method

    function getData() {
      // console.log(searchBar.value);
      let query = document.getElementById("searchBar").value.toLowerCase();
      let filtered = data2.filter((p) => p.title.toLowerCase().includes(query));
      let AllContent = document.getElementById("AllProducts");
      AllContent.innerHTML = "";
      displayData(filtered);
    }
    const debounce = function (fn, delay) {
      let timer;
      return function () {
        let context = this,
          args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(context, args);
        }, delay);
      };
    };
    const searchFunction = debounce(getData, 500);
    let searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("input", searchFunction);
  } catch (e) {
    console.log(e);
  }
}
fetchData();

let users=document.getElementById("users");
users.addEventListener("click",function(){
    window.location.href="user.html";
});
let cart = [];
function saveToLocalStorage(el, index) {
  cart.push(el);
  localStorage.setItem("cart",JSON.stringify(cart));
  // alert("dava saved to local storage");
  window.location.href="productDetails.html";
}
