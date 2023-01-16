const createButton = document.getElementById("create-button");
const readButton = document.getElementById("read-button");
const updateButton = document.getElementById("update-button");
const deleteButton = document.getElementById("delete-button");

createButton.addEventListener("click", function () {
  const id = document.getElementById("create-id").value;
  const image = document.getElementById("create-image").value;
  const name = document.getElementById("create-name").value;
  const description = document.getElementById("create-description").value;
  const price = document.getElementById("create-price").value;
  const offerPrice = document.getElementById("create-offer-price").value;

  fetch("http://localhost:3000/clothes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, image, name, description, price, offerPrice }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Item created successfully");
    })
    .catch((error) => {
      alert("Error: " + error);
    });
});



updateButton.addEventListener("click", function () {
  const id = document.getElementById("update-id").value;
  const image = document.getElementById("update-image").value;
  const name = document.getElementById("update-name").value;
  const description = document.getElementById("update-description").value;
  const price = document.getElementById("update-price").value;
  const offerPrice = document.getElementById("update-offer-price").value;

  const item = {};
  if (image != "") {
    item.image = image;
  }
  if (name != "") {
    item.name = name;
  }
  if (description != "") {
    item.description = description;
  }
  if (price != "") {
    item.price = price;
  }
  if (offerPrice != "") {
    item.offerPrice = offerPrice;
  }
  fetch(`http://localhost:3000/clothes/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error updating item");
      }
      console.log(response)
    })
    .then((data) => {
      alert("Item updated successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error updating item");
    });
});

deleteButton.addEventListener("click", function () {
  const id = document.getElementById("delete-id").value;

  fetch(`http://localhost:3000/clothes/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Item deleted successfully");
    })
    .catch((error) => {
      alert("Error: " + error);
    });
});
