let data = JSON.parse(localStorage.getItem("user"));
console.log(data);
function showData(data) {
  let div = document.createElement("div");
  div.className = "eachUser";
  let name = document.createElement("h3");
  name.innerText = `Name: ${data[0].name.firstname.toUpperCase()} ` + `${data[0].name.lastname.toUpperCase()}`;
  let email = document.createElement("h3");
  email.innerText = `E-mail: ${data[0].email}`;
  let user=document.createElement("h3");
  user.innerText=`Username: ${data[0].username}`;
  let password=document.createElement("h3");
  password.innerText=`Password: ${data[0].password}`;
  let city = document.createElement("h3");
  city.innerText = `City: ${data[0].address.city}`;
  let address = document.createElement("h3");
  address.innerText = `Address: ${
    (data[0].address.number+" "+ data[0].address.street+" "+ data[0].address.zipcode)
  }`;
  let phone = document.createElement("h3");
  phone.innerText = `Phone: ${data[0].phone}`;

  let AllProducts = document.getElementById("singleProduct");
  div.append(name, email, user, password, city,address);
  AllProducts.append(div);
}

let AllUsers = document.getElementById("AllUsers");
AllUsers.addEventListener("click", function () {
  window.location.href = "user.html";
});
showData(data);
