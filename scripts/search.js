var dataUriEncoded = new URL(window.location).searchParams.get("data");
const dec = new TextDecoder();
const dataArrayBuffer = base64UrlDecode(dataUriEncoded);
const dataString = dec.decode(dataArrayBuffer);
var data = JSON.parse(dataString);

let results=document.getElementById("search-results");
results.innerHTML=null;
let actual_data=data.products;
console.log(actual_data)

 const appendData=(data)=>{
         if(Array.isArray(data)){
           data.forEach((elem)=>{
               let div=document.createElement("div");
         let img=document.createElement("img");
           img.src=elem.images[0];
         let title=document.createElement("h2");
         title.innerText=elem.title
         let category=document.createElement("h3");
            category.innerText=elem.category;
           let brand=document.createElement("p");
             brand.innerText=elem.brand;
           let price=document.createElement("p");
            price.innerText=elem.price;
           let btn=document.createElement("button");
           btn.innerText="Add to cart";
           btn.addEventListener("click",()=>{
    
               let obj={
               image:elem.images[0],
                   brand:elem.brand,
                   category:elem.category,
                    price:elem.price,
                id:Date.now(),
               }
               let arrydata=JSON.parse(localStorage.getItem("products"))||[];
               arrydata.push(obj);
               localStorage.setItem("products",JSON.stringify(arrydata));
           })
           div.append(img,title,brand,category,price,btn);
           results.append(div)
           })
    }
       else{
           if(data.length == 0) {
              document.getElementById("search-results").innerHTML = '<p>No Results Found</p>';
       }
       }
     }
    appendData(actual_data)
    
    function base64UrlDecode(base64Url) {
      var padding = '='.repeat((4 - base64Url.length % 4) % 4);
      var base64 = (base64Url + padding)
          .replace(/-/g, '+')
          .replace(/_/g, '/');
  
      var rawData = window.atob(base64);
      var outputArray = new Uint8Array(rawData.length);
  
      for (var i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
  }