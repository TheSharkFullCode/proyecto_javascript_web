
async function getApi() {
    try {
        const response = await fetch('https://cafe-de-altura.vercel.app/api/products');
        const data = await response.json();
        const productsArray = data.products;

        const mainDiv = document.createElement("div");
        // mainDiv.style.border = "blue solid"
        mainDiv.classList = "seccionCoffe2"

        mainDiv.style.display = "flex";
        // mainDiv.style.border = "red solid";
        // mainDiv.style.backgroundColor = " #F7F5F3";

        mainDiv.style.flexWrap = "wrap";
        mainDiv.style.width = "1250px";
        // mainDiv.style.gap = "2px"
        mainDiv.style. justifyContent ="space-around";   

        // const divSeccion4 = document.createElement('div');
        // divSeccion4.className = 'seccion4';
        // divSeccionCoffe2.appendChild(divSeccion4);


        let counter = 0; // Variable para contar los divs

        productsArray.forEach((product) => {
          const subDiv = document.createElement("div");
          subDiv.classList = "boxcaffes " + counter; // Agregar contador a la classlist
        //   subDiv.style.border = "1px solid black";
        //   subDiv.style.width = "100px"
          subDiv.style.height = "350px";
          subDiv.style.width = "220px";
          subDiv.style.marginTop = "30px";
        
          const img = document.createElement("img");
          img.src = product.img_url;
        
          const p = document.createElement("p");
          // p.textContent = 'Kenia Ndunduri';
        
          subDiv.appendChild(img);
          subDiv.appendChild(p);
          mainDiv.appendChild(subDiv);
          // mainDiv.appendChild(divSeccion4);
          document.body.appendChild(mainDiv);
        
          if (counter === 0) {
            subDiv.classList.add("selected"); // Agregar clase "selected" al primer div
            const textParagrap = document.createElement("span");
            const textPreice = document.createElement("span");
            const buttonAdd = document.createElement('button')


             textParagrap.textContent = "Costa Rica Tazarru";
             textParagrap.className = "coffeMoney"
             textPreice.textContent = "9,00€"
             buttonAdd.className = 'btonCoffe';
             buttonAdd.textContent = 'Añadir';
             buttonAdd.id = 'LaosAmacenecer';
             buttonAdd.onclick = buyCoffee2;


             subDiv.appendChild(textParagrap);
             subDiv.appendChild(textPreice);
             subDiv.appendChild(buttonAdd);


          } else if (counter === 1) {

            subDiv.classList.add("selectDiv2"); // Agregar clase "selectedrt" al segundo div
            // subDiv.style.backgroundColor = "pink";
            const textParagrap = document.createElement("span");
            const textPreice = document.createElement("span");
            const buttonAdd = document.createElement('button')


             textParagrap.textContent = "Colombia Los Naranjos";
             textParagrap.className = "coffeMoney"
             textPreice.textContent = "9,00€"
             buttonAdd.className = 'btonCoffe';
             buttonAdd.textContent = 'Añadir';
             buttonAdd.id = 'LaosAmacenecer';
             buttonAdd.onclick = buyCoffee5;


             subDiv.appendChild(textParagrap);
             subDiv.appendChild(textPreice);
             subDiv.appendChild(buttonAdd);         
            
                        
            // Cambiar el color de fondo del segundo div
          }

          else if(counter === 2){
          subDiv.classList.add("selectedDiv3"); // Agregar clase "selected" al primer div
            const textParagrap = document.createElement("span");
            const textPreice = document.createElement("span");
            const buttonAdd = document.createElement('button')


             textParagrap.textContent = "Laos Amacenecer";
             textParagrap.className = "coffeMoney"
             textPreice.textContent = "9,00€"
             buttonAdd.className = 'btonCoffe';
             buttonAdd.textContent = 'Añadir';
             buttonAdd.id = 'LaosAmacenecer';
             buttonAdd.onclick = buyCoffee4;


             subDiv.appendChild(textParagrap);
             subDiv.appendChild(textPreice);
             subDiv.appendChild(buttonAdd);

          }
          else if(counter === 3){
            subDiv.classList.add("selectDiv4");
            // subDiv.style.backgroundColor = "pink"
            const textParagrap = document.createElement("span");
            const textPreice = document.createElement("span");
            const buttonAdd = document.createElement('button')


             textParagrap.textContent = "Etiopía Yrgacheff";
             textParagrap.className = "coffeMoney"
             textPreice.textContent = "9,00€"
             buttonAdd.className = 'btonCoffe';
             buttonAdd.textContent = 'Añadir';
             buttonAdd.id = 'LaosAmacenecer';
             buttonAdd.onclick = buyCoffee;


             subDiv.appendChild(textParagrap);
             subDiv.appendChild(textPreice);
             subDiv.appendChild(buttonAdd);  

          }
          else if(counter === 4){
            subDiv.classList.add("selectDiv5");
            const textParagrap = document.createElement("span");
            const textPreice = document.createElement("span");
            const buttonAdd = document.createElement('button')


             textParagrap.textContent = "Kenia Ndunduri";
             textParagrap.className = "coffeMoney"
             textPreice.textContent = "15,00€"
             buttonAdd.className = 'btonCoffe';
             buttonAdd.textContent = 'Añadir';
             buttonAdd.id = 'LaosAmacenecer';
             buttonAdd.onclick = buyCoffee6;


             subDiv.appendChild(textParagrap);
             subDiv.appendChild(textPreice);
             subDiv.appendChild(buttonAdd);  
          }
          else if(counter === 5){
            subDiv.classList.add("selectDiv6");
            const textParagrap = document.createElement("span");
            const textPreice = document.createElement("span");
            const buttonAdd = document.createElement('button')


             textParagrap.textContent = "Etiopía Sídamo";
             textParagrap.className = "coffeMoney"
             textPreice.textContent = "17,00€"
             buttonAdd.className = 'btonCoffe';
             buttonAdd.textContent = 'Añadir';
             buttonAdd.id = 'LaosAmacenecer';
             buttonAdd.onclick = buyCoffee7;


             subDiv.appendChild(textParagrap);
             subDiv.appendChild(textPreice);
             subDiv.appendChild(buttonAdd);  
          }
          else if(counter === 6){
            subDiv.classList.add("selectDiv6");
            const textParagrap = document.createElement("span");
            const textPreice = document.createElement("span");
            const buttonAdd = document.createElement('button')


             textParagrap.textContent = "Costa Rica Monte Bello";
             textParagrap.className = "coffeMoney"
             textPreice.textContent = "12,00€"
             buttonAdd.className = 'btonCoffe';
             buttonAdd.textContent = 'Añadir';
             buttonAdd.id = 'LaosAmacenecer';
             buttonAdd.onclick = buyCoffee9;


             subDiv.appendChild(textParagrap);
             subDiv.appendChild(textPreice);
             subDiv.appendChild(buttonAdd);  

            
          }
          else if(counter === 7){
            subDiv.classList.add("selectDiv7");
            subDiv.style.backgroundColor = " #FFFFFF";
            subDiv.style.opacity = "50%"
            

            const textParagrap = document.createElement("span");
            const textPreice = document.createElement("span");
            const buttonAdd = document.createElement('button')


             textParagrap.textContent = "Colombia La Casita";
             textParagrap.className = "coffeMoney"
             textPreice.textContent = "9,00€"
             buttonAdd.className = 'btonCoffe1';
             buttonAdd.style.width = "65px"

             buttonAdd.textContent = 'Agotado';

             buttonAdd.id = 'LaosAmacenecer';
             buttonAdd.onclick = "buyCoff9";


             subDiv.appendChild(textParagrap);
             subDiv.appendChild(textPreice);
             subDiv.appendChild(buttonAdd);  
          }

        
          counter++;
        });

// ---------------------------------------------------------------------------->

// ---------------------------------------------------------------------------->

// ---------------------------------------------------------------------------->
// ---------------------------------------------------------------------------->
// ---------------------------------------------------------------------------->

const divmain = document.querySelector(".mainScript");
// divmain.style.border = "blue solid"
console.log("🚀 ~ file: novTienda.js:116 ~ divmain:", divmain);
const seccion3 = document.createElement('div');
seccion3.className = 'seccion3';
seccion3.style.marginTop = "30px"
const h2 = document.createElement('h2');
h2.textContent = 'Cafe con las mejores condiciones';
seccion3.appendChild(h2);

const gridLayout = document.createElement('div');
// gridLayout.style.border = "red solid"
gridLayout.className = 'gridLayout';
seccion3.appendChild(gridLayout);

const grid1 = document.createElement('div');
grid1.className = 'grid';
gridLayout.appendChild(grid1);

const checkbox1_1 = document.createElement('div');
checkbox1_1.className = 'checkbox1';
grid1.appendChild(checkbox1_1);

const img1 = document.createElement('img');
img1.src = './cafe_de_altura/check.png';
img1.alt = 'imgCar';
checkbox1_1.appendChild(img1);

const h3_1 = document.createElement('h3');
h3_1.textContent = 'Recibe tu pedido sin preocuparte';
grid1.appendChild(h3_1);

const textoContenido3_1 = document.createElement('p');
textoContenido3_1.className = 'textoContenido3';
textoContenido3_1.textContent = 'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana';
grid1.appendChild(textoContenido3_1);

const grid2 = document.createElement('div');
grid2.className = 'grid';
gridLayout.appendChild(grid2);

const checkbox1_2 = document.createElement('div');
checkbox1_2.className = 'checkbox1';
grid2.appendChild(checkbox1_2);

const img2 = document.createElement('img');
img2.src = './cafe_de_altura/imgCar.png';
img2.alt = 'imgCar';
checkbox1_2.appendChild(img2);

const h3_2 = document.createElement('h3');
h3_2.textContent = 'Envio en 24/48h';
grid2.appendChild(h3_2);

const textoContenido3_2 = document.createElement('p');
textoContenido3_2.className = 'textoContenido3';
textoContenido3_2.textContent = 'Pide tu café antes de las 12 y lo recibirás al día siguiente.';
grid2.appendChild(textoContenido3_2);

const grid3 = document.createElement('div');
grid3.className = 'grid';
gridLayout.appendChild(grid3);

const checkbox1_3 = document.createElement('div');
checkbox1_3.className = 'checkbox1';
grid3.appendChild(checkbox1_3);

const img3 = document.createElement('img');
img3.src = './cafe_de_altura/imgRegals.png';
img3.alt = 'imgCar';
checkbox1_3.appendChild(img3);

const h3_3 = document.createElement('h3');
h3_3.textContent = 'Descuentos y Beneficios';
grid3.appendChild(h3_3);

const textoContenido3_3 = document.createElement('p');
textoContenido3_3.className = 'textoContenido3';
textoContenido3_3.textContent = 'Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.';
grid3.appendChild(textoContenido3_3);

document.body.appendChild(seccion3);

// ---------------------------------------------------------------->

const divFootSeccion8 = document.createElement('div');
divFootSeccion8.className = 'footSeccion8';
// divFootSeccion8.style.border = "red solid"

const logCoffe = document.createElement('section');
logCoffe.className = 'logCoffe';
divFootSeccion8.appendChild(logCoffe);

const parrafoSec8 = document.createElement('p');
parrafoSec8.className = 'parrafoSec8';
parrafoSec8.textContent = 'cafedealtura.com';
logCoffe.appendChild(parrafoSec8);

const img = document.createElement('img');
img.src = './cafe_de_altura/cafecito.png';
img.alt = 'cafecito';
logCoffe.appendChild(img);

//------------------[Seccion FootContainer]----------------------->

const footContainer = document.createElement('section');
footContainer.className = 'footContainer';
divFootSeccion8.appendChild(footContainer);

const helpSave = document.createElement('section');
helpSave.className = 'helpSave';
footContainer.appendChild(helpSave);

const helpText = document.createElement('p');
helpText.className = 'parrafoSec8c';
helpText.textContent = 'Te ayudamos en';
helpSave.appendChild(helpText);

const buttonMailto1 = document.createElement('section');
buttonMailto1.className = 'buttonMailto1';
helpSave.appendChild(buttonMailto1);

const img8Telephone = document.createElement('section');
img8Telephone.className = 'img8Telephone';
buttonMailto1.appendChild(img8Telephone);

const imgTel = document.createElement('img');
imgTel.src = './cafe_de_altura/tlf - copia.png';
imgTel.alt = '';
img8Telephone.appendChild(imgTel);

const parrafoSec8b = document.createElement('p');
parrafoSec8b.className = 'parrafoSec8b';
parrafoSec8b.textContent = '+34 919 49 05 18';
img8Telephone.appendChild(parrafoSec8b);

const buttonMailto = document.createElement('section');
buttonMailto.className = 'buttonMailto';
helpSave.appendChild(buttonMailto);

const imgMail8 = document.createElement('section');
imgMail8.className = 'imgMail8';
buttonMailto.appendChild(imgMail8);

const imgMail = document.createElement('img');
imgMail.src = './cafe_de_altura/MailWhite.png';
imgMail.alt = '';
imgMail8.appendChild(imgMail);

const holaEmail = document.createElement('p');
holaEmail.textContent = 'hola@cafedealtura.com';
buttonMailto.appendChild(holaEmail);

const asideFootLinks = document.createElement('aside');
asideFootLinks.className = 'footLinks';
footContainer.appendChild(asideFootLinks);

const shopContact = document.createElement('section');
shopContact.className = 'shopContact';
asideFootLinks.appendChild(shopContact);

const linkTienda = document.createElement('a');
linkTienda.href = '/index.html';
linkTienda.className = 'hiperText';
shopContact.appendChild(linkTienda);

const textTienda = document.createElement('p');
textTienda.textContent = 'Tienda';
linkTienda.appendChild(textTienda);

//hiper Vinculos.----------------------->
const linkSuscripcion = document.createElement('a');
linkSuscripcion.href = '/enlaces/suscripcion.html';
linkSuscripcion.className = 'hiperText';
shopContact.appendChild(linkSuscripcion);

const textSuscripcion = document.createElement('p');
textSuscripcion.textContent = 'Suscripción';
linkSuscripcion.appendChild(textSuscripcion);
//hiper Vinculos.----------------------->

const linkParaEmpresas = document.createElement('a');
linkParaEmpresas.href = '/enlaces/paraEmpresa.html';
linkParaEmpresas.className = 'hiperText';
shopContact.appendChild(linkParaEmpresas);

const textParaEmpresas = document.createElement('p');
textParaEmpresas.textContent = 'Para empresas';
linkParaEmpresas.appendChild(textParaEmpresas);

//hiper Vinculos.----------------------->

const linkSobreNosotros = document.createElement('a');
linkSobreNosotros.href = '/enlaces/sobreNosotros.html';
linkSobreNosotros.className = 'hiperText';
shopContact.appendChild(linkSobreNosotros);

const textSobreNosotros = document.createElement('p');
textSobreNosotros.textContent = 'Sobre nosotros';
linkSobreNosotros.appendChild(textSobreNosotros);

//hiper Vinculos.----------------------->

const linkContacto = document.createElement('a');
linkContacto.href = '/enlaces/contactos.html';
linkContacto.className = 'hiperText';
shopContact.appendChild(linkContacto);

const textContacto = document.createElement('p');
textContacto.textContent = 'Contacto';
linkContacto.appendChild(textContacto);

//hiper Vinculos.----------------------->

const seguritySave = document.createElement('section');
seguritySave.className = 'seguritySave';
asideFootLinks.appendChild(seguritySave);

const linkPrivacidad = document.createElement('a');
linkPrivacidad.href = '/politicaPrivacida.html';
linkPrivacidad.className = 'hiperText';
seguritySave.appendChild(linkPrivacidad);

const textPrivacidad = document.createElement('p');
textPrivacidad.textContent = 'Política de privacidad';
linkPrivacidad.appendChild(textPrivacidad);

const linkCookies = document.createElement('a');
linkCookies.href = '/cokies.html';
linkCookies.className = 'hiperText';
seguritySave.appendChild(linkCookies);

const textCookies = document.createElement('p');
textCookies.textContent = 'Política de cookies';
linkCookies.appendChild(textCookies);

const linkTerminos = document.createElement('a');
linkTerminos.href = '/terminos.html';
linkTerminos.className = 'hiperText';
seguritySave.appendChild(linkTerminos);

const textTerminos = document.createElement('p');
textTerminos.textContent = 'Términos y condiciones';
linkTerminos.appendChild(textTerminos);

// const seccion3 = document.querySelector('#seccion3');
seccion3.parentNode.insertBefore(divFootSeccion8, seccion3.nextSibling);
// document.body.appendChild(divmain);
// --------------------------------------------------------------------------->


const div2 = document.createElement("div");
div2.classList.add("minifooter");
document.body.appendChild(div2);

const p13 = document.createElement("p");
p13.textContent = "Todos los derechos reservados - Café de Altura SL - 2022";

div2.appendChild(p13);


} catch (error) {
    console.log(error);
}


}
// -------------------------------------------------------->
// -------------------------------------------------------->
        
        // const selectdiv = document.querySelector("p");
        // selectdiv.textContent = "'Kenia Ndunduri';"

        let coffeBag = {};
        let count = 1;

function buyCoffee2() {
    coffeBag = {
      name: "Costa Rica Tazarru",
      precio: "9€",
      available: true,
      img:"/cafe_de_altura/coffe-bag.png"
    };
  
    localStorage.setItem("addBagCoffe", JSON.stringify(coffeBag));
  
    let addNumber = document.querySelector(".addNumber");
  
    addNumber.textContent = count;
  
    addNumber.style.backgroundColor = "#515051";
  
    count++;
  }
//   --------------------------------------------------------------------------->


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
//   seletButton.addEventListener("click",buyCoffee5);


// ------------------------------------------------------------------------->
// let coffeBag = {};
// let count2 = 1;

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
// console.log(laosAmanecer);

// laosAmanecer.addEventListener("click", buyCoffee4);

// ---------------------------------------------------------------------------->

// let count = 1;
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

// ---------------------------------------------------------------------------->

function buyCoffee6(){
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
  
  function buyCoffee7(){
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
// console.log(buyCoffee9);

// buyCoffee9()

// -------------------------------------------------------->


getApi();


