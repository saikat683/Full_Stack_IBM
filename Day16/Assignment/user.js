async function getUser(){
    let data= await fetch("https://fakestoreapi.com/users");
    let data2=await data.json();
    console.log(data2);

    function showData(data2){
        data2.forEach((el, index) => {
            let div = document.createElement("div");
            div.className = "eachUser";
            let name = document.createElement("h3");
            name.innerText= `Name: ${el.name.firstname.toUpperCase()} `+`${el.name.lastname.toUpperCase()}`;
            let email = document.createElement("h3");
            email.innerText = `E-mail: ${el.email}`;
            let city = document.createElement("h3");
            city.innerText =`City: ${ el.address.city}`;
            let address = document.createElement("h3");
            address.innerText =`Address: ${el.address.number,el.address.street,el.address.zipcode}`;
            let phone = document.createElement("h3");
            phone.innerText = `Phone: ${el.phone}`;
            let button1 = document.createElement("button");
            button1.innerText = "View Details";
            button1.addEventListener("click", () => {
                saveToLocalStorage(el,index);
            });
    
            let AllProducts = document.getElementById("AllProducts");
            div.append( name, email, city, address,phone, button1);
            AllProducts.append(div);
          });
    }
    showData(data2);
}
getUser();
let products = document.getElementById("products");
products.addEventListener("click", function () {
  window.location.href = "index.html";
});
let user=[];
function saveToLocalStorage(el,index){
    user.push(el);
    localStorage.setItem("user",JSON.stringify(user));
    window.location.href="userDetails.html";
}
