(()=>{
    console.log("este es un mensaje por consola");})();
    function saludar(nombre){
        console.log(`hola ${nombre}`);
    }
    saludar("oscar");




// ------------------------------------------------------------------------------------------>
// ------------------------------------------------------------------------------------------>

const formulario = document.getElementById("formulary");
console.log("🚀 ~ file: script.js:89 ~ formulario:", formulario);

const buttonSubmit = document.querySelector('#buttonselect7');

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("Nombre").value.trim();    
    const email = document.getElementById("correo").value.trim();
    const telefono = document.querySelector(".numero3").value.trim();
    const comentario = document.getElementById("comentarios").value.trim();
    
    const formUser = {
      name: nombre,
      email: email,
      phone: telefono,
      message: comentario
    };
    localStorage.setItem('userForm', JSON.stringify(formUser));

    console.log(comentario);
    console.log(nombre, email, telefono);

    const terminos = document.querySelector("#terminos").checked;
    console.log("🚀 ~ file: script.js:140 ~ terminos:", terminos);
  
    const camposVacios = (nombre === "" || telefono === "");
    const emailVacio = (email === "");
  
    if (camposVacios) {

      alert("Por favor, complete todos los campos del formulario.");
      return;

    }
  
    if (emailVacio) {
      alert ("El correo no puede estar vacío.")
      // alert("Por favor, complete el campo de correo electrónico.");
      return;
    }

    if (!terminos) {

      const confirmacion = confirm("Por favor, acepte los términos y condiciones antes de enviar el formulario.");

      formulario.submit();
    window.location.reload();


      if (confirmacion) {

        if(checkbox == checked){

          const checkbox = document.querySelector("#terminos");
          console.log(checkbox);
          formulario.submit()
        // window.location.reload();



        }



        formulario.submit();
    window.location.reload();


      } else {

        return;
      }
    }
  
    window.location.reload();
});
// -----------[Segunda validacion]-------------------------------------------------------------->
// const formulario = document.getElementById("formulary");
// const buttonSubmit = document.querySelector('#buttonselect7');

// formulario.addEventListener("submit", function(event) {
//   event.preventDefault();

//   const nombre = document.getElementById("Nombre").value.trim();
//   const email = document.getElementById("correo").value.trim();
//   const telefono = document.querySelector(".numero3").value.trim();
//   const comentario = document.getElementById("comentarios").value.trim();

//   const terminos = document.querySelector("#terminos").checked;

//   if (nombre === "" || telefono === "") {
//     alert("Por favor, complete todos los campos del formulario.");
//     return;
//   }

//   if (email === "") {
//     alert("El correo no puede estar vacío.");
//     return;
//   }

//   if (!terminos) {
//     const confirmacion = confirm("Por favor, acepte los términos y condiciones antes de enviar el formulario.");
//     if (!confirmacion) {
//       return;
//     }
//   }

//   const formUser = {
//     name: nombre,
//     email: email,
//     phone: telefono,
//     message: comentario
//   };
//   localStorage.setItem('userForm', JSON.stringify(formUser));

//   alert("Formulario enviado correctamente.");

//   formulario.reset();
// });

// // -------------------------------------------------------------------------->
// // ---------[r o t a r    imagen]----------------------------------------------------------------->


const img = document.getElementById("imgRotate");
console.log(img);

let rotate = false;

img.addEventListener("click", rotateImage);

const line = document.querySelector(".line")

function rotateImage() {


  if (!rotate) {
    img.style.transform = "rotate(180deg)";
    img.style.transition = "1s";
    toggleText();
    rotate = true;
  } else {
    img.style.transform = "rotate(0deg)";
    rotate = false;
    toggleText();
  }
}
function toggleText() {
  const textHidden = document.querySelector(".textoFAQ");

  if (textHidden.style.display === "none") {
    textHidden.style.display = "block";

    
  } else {
    textHidden.style.display = "none";

  
    
  }
}


// console.log("🚀 ~ file: script.js:123 ~ lineDiv:", lineDiv)

// function addLine(){
//   // const divContainer = document.querySelector(".line")
//   document.body.append(line)
  
// }
// textHidden.style.visibility = "visible";

// -------------------------------------------------------------------


    // lineDiv.unshift();
    // line.remove();
            // const lineDiv = document.querySelector(".line")
    // document.body.append(lineDiv)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
// // --------------------------------------------------------------------------------->
// // ---------------------------------------------------------->

const imgDrops = document.querySelector("#imgDropDowns");
const textoFAQ2 = document.querySelector(".textoFAQ2");

let dropDowns = false;

imgDrops.addEventListener('click', () => {
  if (!dropDowns) {
    imgDrops.style.transform = "rotate(180deg)";
    imgDrops.style.transition = "1s";
    togglesText();
    dropDowns = true;
  } else {
    imgDrops.style.transform = "rotate(0deg)";
    imgDrops.style.transition = "1s";
    togglesText();
    dropDowns = false;
  }
});

function togglesText() {
  const textSpan = document.querySelector(".textoFAQ2");

  if (textSpan) {
    if (textSpan.style.display === "none") {
      textSpan.style.display = "block";
    } else {
      textSpan.style.display = "none";
    }
  }
}


// // -------------------------------------------------------------------------------------------->


// ------------------------------------------------------------------------------>



const imgTransition = document.querySelector('#imgTraslate');

const textContainer = document.querySelector('.textInBlock');

let textSpan = textContainer.querySelector('span');

imgTransition.addEventListener('click', () => {

  if (textSpan) {

    textSpan.remove();

    textSpan = null;

  } else {

    const lineDiv = document.createElement('div');
    lineDiv.id = 'line';

    textSpan = document.createElement('span');

    textSpan.textContent =
      'Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar';
      textSpan.style.fontFamily = "'Outfit'"
      textSpan.style.fontSize = "14px"

    textContainer.appendChild(lineDiv);
    textContainer.appendChild(textSpan);
  }
});

// ------------------------------------------------------------------>
// --------------------------------------------------------------->


const elemento = document.querySelector('#imgTraslate'); // Selecciona el elemento que deseas animar

elemento.style.transition = 'transform 0.6s ease-in-out'; // Establece la duración y el efecto de la transición

let girado = false; // Variable para rastrear el estado de la animación

elemento.addEventListener('click', () => {

  if (girado) {

    elemento.style.transform = 'rotate(180deg)'; // Gira el elemento 180 grados

    girado = false;

  } else {
    elemento.style.transform = 'rotate(0)'; // Restablece la rotación del elemento a 0 grados
    girado = true;
  }
});





// --------------------------------------------------------------------------->

// const coffeBag = {}

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
let coffeBag = {};
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

const laosAmanecer = document.querySelector("#LaosAmacenecer");

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
seletButton.addEventListener("click",buyCoffee5);

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

const buttonTzaru = document.querySelector("#CostaRica")
// buttonTzaru.addEventListener("click",buyCoffee6);




// ----------------------------------------------------------






// ------[-Este codigo si funciona, pero consigo el mismo efecto]---------------------------------------------



// const imgDrops = document.querySelector("#imgDropDowns");
// const textoFAQ2 = document.querySelector(".textoFAQ2");

// let dropDowns = false;

// imgDrops.addEventListener('click', () => {
//   if (!dropDowns) {
//     imgDrops.style.transform = "rotate(180deg)";
//     imgDrops.style.transition = "1s";
//     textoFAQ2.style.opacity = "1";
//     textoFAQ2.style.height = "70%";
//     dropDowns = true;
//   } else {
//     imgDrops.style.transform = "rotate(0deg)";
//     imgDrops.style.transition = "1s";
//     textoFAQ2.style.opacity = "0";
//     textoFAQ2.style.height = "0";
//     dropDowns = false;
//   }
// });
