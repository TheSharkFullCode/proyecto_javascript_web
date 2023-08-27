

    // async function getApi() {
    //     try {
    //         const response = await fetch('https://cafe-de-altura.vercel.app/api/products');

    //         const data = await response.json();

    //         console.log(data)


    //         const productsArray = data.products;
  
    //         productsArray.forEach(product => {


    //             // console.log(product)

    //             const img = document.createElement('img');

    //             img.src = product.img_url;

    //             document.body.appendChild(img);
    //         })              

        
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    
    // getApi();


//     const boxCaffes = document.createElement('div');
// boxCaffes.className = 'boxcaffes';

// const imgEtiopia = document.createElement('div');
// imgEtiopia.className = 'imgEtiopia';

// const img = document.createElement('img');
// img.src = './cafe_de_altura/Coffee bag (3).png';
// img.alt = 'coffeebag';

// imgEtiopia.appendChild(img);
// boxCaffes.appendChild(imgEtiopia);

// const coffeMoney = document.createElement('div');
// coffeMoney.className = 'coffeMoney';

// const p = document.createElement('p');
// p.textContent = 'Etiopía Yrgacheff';

// coffeMoney.appendChild(p);
// boxCaffes.appendChild(coffeMoney);

// const price = document.createElement('p');
// price.textContent = '9,00€';

// boxCaffes.appendChild(price);

// const button = document.createElement('button');
// button.className = 'btonCoffe';
// button.textContent = 'Añadir';
// button.onclick = buyCoffee;

// boxCaffes.appendChild(button);

// // Append the boxCaffes element to the DOM
// document.body.appendChild(boxCaffes);





    // --------------------------------------
    // Verificar si hay una imagen de producto en el almacenamiento local
const imagenProducto = localStorage.getItem('imagenProducto');

if (imagenProducto) {
  // Si la imagen existe en el almacenamiento local, dibujarla normalmente
  const img = document.createElement('img');

  img.src = imagenProducto;
//   document.body.appendChild(img);
} else {
  // Si la imagen no existe en el almacenamiento local, dibujar una imagen bloqueada en color gris y transparencia baja
  const img = document.createElement('img');
  img.src = 'ruta-de-la-imagen-bloqueada.png';
  img.style.opacity = '0.5'; // Establecer una opacidad baja para simular bloqueo
  img.style.filter = 'grayscale(100%)'; // Convertir la imagen a escala de grises
  img.disabled = true; // Deshabilitar la imagen para evitar acciones sobre ella
//   document.body.appendChild(img);
}



//     let count = 1;
//     let productsElement = {}
    
//     function buyCoffee(){
        
//         let addNumber = document.querySelector(".addNumber");
//         addNumber.textContent = count;
//         addNumber.style.backgroundColor =  "#515051";
//         // console.log("🚀 ~ file: script.js:228 ~ addNumber:", addNumber)

//     count++

//     productsElement = {
//         // name: 
//     }

    

    

// }

// ---------------------------------------------------------------------->


let count = 1;
function buyCoffee(){

  const coffeBag = {

    name: "Etiopía Yrgacheff",
    precio: "9€",
    available: true
  };

  localStorage.setItem("addBagCoffe", JSON.stringify(coffeBag));

    let addNumber = document.querySelector(".addNumber");

    addNumber.textContent = count;

    addNumber.style.backgroundColor =  "#515051";

    // console.log("🚀 ~ file: script.js:228 ~ addNumber:", addNumber)
    count++


}


// -------------------------------------------------------------------
// let coffeBag = {};
// // let count1 = 1;

function buyCoffee4() {
  coffeBag = {
    name: "Laos Amanecer",
    precio: "9€",
    available: true
  };

  localStorage.setItem("addBagCoffe", JSON.stringify(coffeBag));

  let addNumber = document.querySelector(".addNumber");

  addNumber.textContent = count;

  addNumber.style.backgroundColor = "#515051";

  count++;
}

// const laosAmanecer = document.querySelector("#LaosAmacenecer");
// console.log("🚀 ~ file: tienda.js:171 ~ laosAmanecer:", laosAmanecer)


// laosAmanecer.addEventListener("click", buyCoffee4);

// ---------------------------------------------------------------->




function buyCoffee5(){
  coffeBag ={
    name: "Colombia los naranjos",
    precio: "9€",
    available: true

  }
  localStorage.setItem("addBagCoffe",JSON.stringify(coffeBag));

  let addNumber = document.querySelector(".addNumber");
  addNumber.textContent = count;

  addNumber.style.backgroundColor = "#515051";
  count++;


}

const seletButton = document.querySelector("#losNAranjos")
// seletButton.addEventListener("click",buyCoffee5);

// ---------------------------------------------------------------->



function buyCoffee6(){
  coffeBag ={
    name: "Costa Rica Tazarru",
    precio: "9€",
    available: true

  }
  localStorage.setItem("addBagCoffe",JSON.stringify(coffeBag));

  let addNumber = document.querySelector(".addNumber");
  addNumber.textContent = count;

  addNumber.style.backgroundColor = "#515051";
  count++;


}

// const buttonTzaru = document.querySelector("#CostaRica")
// buttonTzaru.addEventListener("click",buyCoffee6);




function buyCoffee7(){
    coffeBag ={
      name: "Kenia Ndunduri",
      precio: "15€",
      available: true
  
    }
    localStorage.setItem("addBagCoffe",JSON.stringify(coffeBag));
  
    let addNumber = document.querySelector(".addNumber");
    addNumber.textContent = count;
  
    addNumber.style.backgroundColor = "#515051";
    count++;
  
  
  }
  
  function buyCoffee8(){
    coffeBag ={
      name: "Etiopía Sídamo",
      precio: "17€",
      available: true
  
    }
    localStorage.setItem("addBagCoffe",JSON.stringify(coffeBag));
  
    let addNumber = document.querySelector(".addNumber");
    addNumber.textContent = count;
  
    addNumber.style.backgroundColor = "#515051";
    count++;
  
  
  }
  
  function buyCoffee9(){
    coffeBag ={
      name: "Costa Rica Monte Bello",
      precio: "12€",
      available: true
  
    }
    localStorage.setItem("addBagCoffe",JSON.stringify(coffeBag));
  
    let addNumber = document.querySelector(".addNumber");
    addNumber.textContent = count;
  
    addNumber.style.backgroundColor = "#515051";
    count++;
  
  
  }

