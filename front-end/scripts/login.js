pwShowHide = document.querySelectorAll(".eye-icon");

const toast = (text, bgcolor = "green", textcolor = "white") => {
  var x = document.getElementById("toast");
  x.innerText = text;
  x.style.backgroundColor = bgcolor;
  x.style.color = textcolor;
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
};

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
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
const setCookie=(cname, cvalue, exdays)=> {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
document.getElementById("handleLogin").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  if (email !== "" && pass !== "") {
    if (pass.length >= 8) {
      let payload = {
        email: email,
        password: pass,
      };
      try {
        const login = await fetch(
          "https://energetic-pea-coat-dog.cyclic.app/login",
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const res = await login.json();

        if (res.administration) {
          toast("Welcome to admin");
          setTimeout(() => {
            window.location.href = "./admin.html";
          }, 3500);
        } else {
          toast(`Welcome ${res.displayName}`);
          setCookie("shopToken",`br ${res.token}`,30)
          setTimeout(() => {
            window.location.href = "./index.html";
          }, 3500);
        }
      } catch (error) {
        toast("Wrong E-mail / Password", "red");
      }
    } else {
      toast("Password should be more than 8 Character", "red");
    }
  } else {
    toast("Fill all fields", "red");
  }
});
