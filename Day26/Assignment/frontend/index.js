document.getElementById("registerForm")?.addEventListener("submit", async(event) => {
  event.preventDefault();
  const name=document.getElementById("name").value;
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;

  const res=await fetch("http://localhost:3000/api/auth/register",{
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({name,email,password})
  });
  let data=await res.json();
  console.log(data);
  alert(data.message);
  if(res.status==200){
    window.location.href="login.html";
  }

});
