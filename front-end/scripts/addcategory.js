let container = document.getElementById("categoryCont");
document.getElementById("addcategory").addEventListener("click", () => {
  container.innerHTML = null;

  let div = document.createElement("div");
  div.setAttribute("id", "categoryformadd");
  let image = document.createElement("input");
  image.placeholder = "Add image link";
  let category_name = document.createElement("input");
category_name.placeholder = "Add category name";

  let addbtn = document.createElement("button");
  addbtn.innerText = "Add Category";

  addbtn.addEventListener("click", () => {
    let addcategory = {
    CategoryName:category_name.value,
    CategoryImage:image.value,
    };
    console.log(addcategory)
    if (
      image.value !== "" &&
      category_name.value !== ""
    ) {
      fetch("https://energetic-pea-coat-dog.cyclic.app/category/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addcategory),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Category added successfully");
        })
        .catch((error) => {
          alert("Error: " + error);
        });
    }
  });
  div.append(image,category_name,addbtn);
  container.append(div);
});

document.getElementById("deletecategory").addEventListener("click", () => {
  container.innerHTML = null;

  fetch("https://energetic-pea-coat-dog.cyclic.app/category", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      data.map((el) => {
        let div = document.createElement("div");
        div.setAttribute("id", "deletebox");
        let p1 = document.createElement("p");
        p1.innerText = "Category:  " + el.CategoryName;
        let img=document.createElement("img");
        img.src=el.CategoryImage;
       let delbtn=document.createElement("button");
        delbtn.innerText = "Delete Category";
        div.append(img,p1,delbtn);
        container.append(div);
        delbtn.addEventListener("click", () => {
          fetch(
            `https://energetic-pea-coat-dog.cyclic.app/category/delete/${el._id}`,
            {
              method: "DELETE",
            }
          )
            .then((response) => response.json())
            .then((data) => {
              alert("Category deleted successfully");
            })
            .catch((error) => {
              alert("Error: " + error);
            });
        });
      });
    })
    .catch((error) => {
      alert("Error: " + error);
    });
});
