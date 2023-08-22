

    async function getApi() {
        try {
            const response = await fetch('https://cafe-de-altura.vercel.app/api/products');

            const data = await response.json();

            console.log(data)


            // const productsArray = data.products;
  
            // productsArray.forEach(product => {

            //     // console.log(product)

            //     const img = document.createElement('img');

            //     img.src = product.img_url;

            //     document.body.appendChild(img);
            // })              

        
        } catch (error) {
            console.log(error);
        }
    }
    
    getApi();
    // --------------------------------------
    // Verificar si hay una imagen de producto en el almacenamiento local
const imagenProducto = localStorage.getItem('imagenProducto');

if (imagenProducto) {
  // Si la imagen existe en el almacenamiento local, dibujarla normalmente
  const img = document.createElement('img');

  img.src = imagenProducto;
  document.body.appendChild(img);
} else {
  // Si la imagen no existe en el almacenamiento local, dibujar una imagen bloqueada en color gris y transparencia baja
  const img = document.createElement('img');
  img.src = 'ruta-de-la-imagen-bloqueada.png';
  img.style.opacity = '0.5'; // Establecer una opacidad baja para simular bloqueo
  img.style.filter = 'grayscale(100%)'; // Convertir la imagen a escala de grises
  img.disabled = true; // Deshabilitar la imagen para evitar acciones sobre ella
  document.body.appendChild(img);
}



    let count = 1;
    let productsElement = {}
    
    function buyCoffee(){
        
        let addNumber = document.querySelector(".addNumber");
        addNumber.textContent = count;
        addNumber.style.backgroundColor =  "#515051";
        // console.log("🚀 ~ file: script.js:228 ~ addNumber:", addNumber)

    count++

    productsElement = {
        // name: 
    }

    

    

}



