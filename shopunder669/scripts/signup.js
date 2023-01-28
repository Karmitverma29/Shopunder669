let pwShowHide = document.querySelectorAll(".eye-icon");
let pwdShowHide = document.querySelectorAll(".ceye-icon");

const toast=(text,bgcolor="green",textcolor="white")=>{
    var x = document.getElementById("toast");
    x.innerText=text;
    x.style.backgroundColor=bgcolor;
    x.style.color=textcolor;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      console.log(password);
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});
pwdShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".cpassword");

    pwFields.forEach((password) => {
      console.log(password);
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

document.getElementById("handleSignup").addEventListener("click", async() => {
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const pass=document.getElementById("pass").value;
    const cpass=document.getElementById("cpass").value;
    if(name!="" && email!=="" && pass!=="" && cpass!==""){
        if(pass==cpass){
            if(pass.length>=8){
                let payload={
                    name:name,
                    email:email,
                    password:pass,
                    administration:false
                }
                await fetch("https://energetic-pea-coat-dog.cyclic.app/signup",{
                    method:'POST',
                    body:JSON.stringify(payload),
                    headers:{
                        "Content-Type": "application/json" 
                    }
                })
                .then(()=>{
                    toast("Signup Completed");
                    setTimeout(()=>{
                        window.location.href="./login.html";
                    },3100)
                    
                })
                .catch((e)=>{
                    toast("Something went wrong !","red")
                })
            }
            else{
                toast("Password should be more than 8 Character","red")
            }
        }
        else{
            toast("Password Incorrect","orange");
        }
    }
    else{
        toast("Fill all fields","red");
    }
});
