let form=document.getElementById("userForm");
console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mobile").value;
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirmPassword").value;
    let obj={
        name,email,mobile,password,confirmPassword
    }
    if(obj.password!==confirmPassword){
        return alert("Password Mismatch");
    }
    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerText=obj.name;

    let td2=document.createElement("td");
    td2.innerText=obj.email;

    let td3=document.createElement("td");
    td3.innerText=obj.mobile;

    let td4=document.createElement("td");
    td4.innerText=obj.password;

    let td5=document.createElement("td");
    td5.innerText=obj.confirmPassword;

    tr.append(td1,td2,td3,td4,td5);
    let tbody=document.getElementById("tbody");
    tbody.append(tr);
    // document.getElementById("name").value;
    // document.getElementById("email").value;
    // document.getElementById("mobile").value;
    // document.getElementById("password").value;
    // document.getElementById("confirmPassword").value;
    form.reset();

});
