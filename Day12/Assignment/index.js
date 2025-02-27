let form =document.getElementById("indexForm");
console.log(form);
form.addEventListener("submit",(e)=>{
   e.preventDefault();
   let name=document.getElementById("name").value;
   let description=document.getElementById("description").value;
   let year=document.getElementById("year").value;
   let rating=document.getElementById("rating").value;
   let genre=document.getElementById("genere").value;
   let poster=document.getElementById("poster").value;
   let movie={
    name,description,year,rating,genre,poster
   }

   let movies = JSON.parse(localStorage.getItem("movies")) || [];
   movies.push(movie);
   localStorage.setItem("movies", JSON.stringify(movies));

   alert("Movie Added Successfully");
   form.reset();
//    let tr=document.createElement("tr");

//    let td1=document.createElement("td");
//    td1.innerText=obj.name;

//    let td2=document.createElement("td");
//    td2.innerText=obj.description;
//    let td3=document.createElement("td");
//    td3.innerText=obj.year;
//    let td4=document.createElement("td");
//    td4.innerText=obj.rating;
//    let td5=document.createElement("td");
//    td5.innerText=obj.genere;
//    let td6=document.createElement("td");
//    td6.innerText=obj.poster;
//    tr.append(td1,td2,td3,td4,td5,td6);
//    let tbody=document.getElementById("tbody");
//    tbody.append(tr);
   
   

});
