(()=>{    console.log("hello sushi");})()

// const arrayProductos = [];




// const divMain = document.querySelector(".productos");

// printApiIMG.forEach((product) => {
    
//   const { name, precio, img_url } = product;

//   const textParrafo = document.createElement("span");
//   const textPrice = document.createElement("span");
//   textPrice.textContent = precio;
//   textParrafo.textContent = name;

//   const img = document.createElement("img");
//   img.src = img_url;

//   divMain.appendChild(textParrafo);
//   divMain.appendChild(textPrice);
//   divMain.appendChild(img);
// });


        //   selectImg.forEach((imgUrl) => {

            // img.src = imgUrl;
            // divMain.appendChild(img);


          

// async function addImagesToBody() {
//     try {
//       const response = await fetch('https://cafe-de-altura.vercel.app/api/products');
//       const data = await response.json();
      
//       const arrayproduct = data.products;
//       console.log(arrayproduct);


//       const url = printApi.map(item => item.img);
//   const img = document.createElement("img");
//   img.src = item.img;
//   divMain.appendChild(img);
//  
// divMain.innerHTML = ""; // Limpiar contenido anterior

// printApi.forEach((item, index) => {

//   const textSpan = document.createElement("span");
//   textSpan.textContent = `${item.name} - ${item.precio}`;
//   divMain.appendChild(textSpan);

        
//       });





    //   arrayProductos.unshift(arrayproduct)
    //   console.log(arrayProductos);

        
    //   const maindiv = document.querySelector(".productos");
    //   maindiv.style.border = "solid black"

    //   const urls = arrayproduct.map((element) => element.img_url);
    //   console.log(urls);


    //   const img = document.createElement("img");
    //   img.src = urls[0];
    //   maindiv.appendChild(img)
        

    
    // -------------------------------------------->
    let getBagProduct = JSON.parse(localStorage.getItem('addBagCoffe'));
    console.log(getBagProduct);

    //   images.forEach((imageUrl) => {
//     //   });

// ç
//   addImagesToBody();

