import Navbar from "../Nav.js";

let nav=document.getElementById("navbar");
nav.innerHTML=Navbar();
let results=document.getElementById("search-results");

document.getElementById("search-btn").addEventListener("click", function(e) {
    e.preventDefault();
    var searchTerm = document.getElementById("search-input").value;
    fetch('https://dummyjson.com/products/category/'+searchTerm)
      .then(response => response.json())
      .then(data => {
        var dataString = JSON.stringify(data);
        // var dataBase64 = btoa(dataString);
        var enc = new TextEncoder();
        var dataArrayBuffer = enc.encode(dataString);
        var dataUriEncoded = base64UrlEncode(dataArrayBuffer);
        window.location = "search.html?data="+dataUriEncoded;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });
  
  function base64UrlEncode(arrayBuffer) {
    let base64 = '';
    const encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    const bytes = new Uint8Array(arrayBuffer);
    const byteLength = bytes.byteLength;
    const byteRemainder = byteLength % 3;
    const mainLength = byteLength - byteRemainder;
    let a, b, c, d;
    let chunk;
    for (let i = 0; i < mainLength; i += 3) {
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
      a = (chunk & 16515072) >> 18;
      b = (chunk & 258048) >> 12;
      c = (chunk & 4032) >> 6;
      d = chunk & 63;
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }
    if (byteRemainder === 1) {
      chunk = bytes[mainLength];
      a = (chunk & 252) >> 2;
      b = (chunk & 3) << 4;
      base64 += encodings[a] + encodings[b] + '==';
    } if (byteRemainder === 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
      a = (chunk & 64512) >> 10;
      b = (chunk & 1008) >> 4;
      c = (chunk & 15) << 2;
      base64 += encodings[a] + encodings[b] + encodings[c] + '=';
    }
    return base64;
  }

  
  