document.getElementById("admin_dash").addEventListener("click", () => {
  window.location.href = "./admin.html";
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
let token = getCookie("shopToken");
const displayData = (data) => {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = null;
  data.map(({ _id, name, email, address, administration }) => {
    let tr = document.createElement("tr");
    let uid = document.createElement("td");
    let uname = document.createElement("td");
    let uemail = document.createElement("td");
    let uaddress = document.createElement("td");
    let admin = document.createElement("td");
    let edt = document.createElement("td");
    let del = document.createElement("td");
    let editaccess = document.createElement("button");
    let deleteuser = document.createElement("button");
    uid.innerHTML = _id;
    uname.innerHTML = name;
    uemail.innerHTML = email;
    uaddress.innerHTML = address;
    admin.innerHTML = administration ? "Yes" : "No";
    editaccess.innerText = administration ? "Remove admin" : "Add admin";
    deleteuser.innerText = "Delete account";
    editaccess.addEventListener("click", async () => {
      let payload = {};
      if (administration) {
        payload.administration = false;
      } else {
        payload.administration = true;
      }
      await fetch(
        `https://energetic-pea-coat-dog.cyclic.app/user/update/${_id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json", authorization: token },
          body: JSON.stringify(payload),
        }
      );
      fetchData();
    });
    deleteuser.addEventListener("click", async () => {
      await fetch(
        `https://energetic-pea-coat-dog.cyclic.app/user/delete/${_id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json", authorization: token },
        }
      );
      fetchData();
    });
    edt.append(editaccess);
    del.append(deleteuser);
    tr.append(uid, uname, uemail, uaddress, admin, edt, del);
    tbody.append(tr);
  });
};
const fetchData = async () => {
  const data = await fetch(
    "https://energetic-pea-coat-dog.cyclic.app/user/allusr",
    {
      method: "POST",
      headers: { "Content-Type": "application/json", authorization: token },
    }
  );
  const res = await data.json();
  displayData(res);
};
fetchData();
