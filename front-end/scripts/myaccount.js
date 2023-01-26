document.getElementById("back-button").addEventListener("click", () => {
  window.location.href = "./index.html";
});
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
let data = getCookie("shopUserData");
data = JSON.parse(data);
document.getElementById("name").innerHTML = data.name;
document.getElementById("email").innerHTML = data.email;
if (data.profile_img == "") {
  document.getElementById("profile-picture").src = "https://i.ibb.co/52Hjr30/images.png";
} else {
  document.getElementById("profile-picture").src = data.profile_img;
}

document.getElementById("logout-button").addEventListener("click", () => {
  setCookie("shopToken", "", 0);
  setCookie("shopUserData", "", 0);
  window.location.href = "./login.html";
});
