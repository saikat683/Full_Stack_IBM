let form1=document.getElementById("indexForm");

form1.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name");
    let description=document.getElementById("description");
    let year=document.getElementById("year");
    let rating=document.getElementById("rating");
    let genere=document.getElementById("genere");
    let poster=document.getElementById("poster");
    console.log(name,description,year,rating,genere,poster);
});
