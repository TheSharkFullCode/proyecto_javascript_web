(()=>{  console.log("hello  world ");})()

let getBagCoffe = JSON.parse(localStorage.getItem('addBagCoffe'));
console.log(getBagCoffe);

getBagCoffe.forEach((item) => {

  const { name, precio } = item;

  const mainDiv = document.querySelector(".productos");
  mainDiv.style.display = "flex"
  mainDiv.style.justifyContent = 'space-around';
  // mainDiv.style.border = "solid blakc"

  const div = document.createElement("div");
  div.classList.add('btonCoffe3')
  // div.style.border = "solid red"
  div.style.display = "flex"
  div.style.flexDirection = "column"
  // div.style.width = "200px";
  // div.style.width = "500px"

  // div.style.flexWrap = "wrap";
  div.style.gap = "5px"

  const img = document.createElement("img");

  img.src = item.img_url;

  div.appendChild(img);

  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;
  div.appendChild(nameSpan);

  const priceSpan = document.createElement("span");
  priceSpan.textContent = precio;
  div.appendChild(priceSpan);

  mainDiv.appendChild(div);
});