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

      if (confirmacion) {

        const checkbox = document.querySelector("#terminos");

        console.log(checkbox);

        formulario.submit();

      } else {

        return;
      }
    }
  
    window.location.reload();
});



// // -------------------------------------------------------------------------->
// // ---------[r o t a r    imagen]----------------------------------------------------------------->

// const img = document.getElementById("imgRotate");
// console.log(img);
// // img.style.transform = "rotate(180deg)";



// let rotate = false;
// img.addEventListener("click",rotateImage);
// // -webkit-transform:rotate(90deg); 

// function rotateImage(){
//     if(rotate){
        
//         img.style.transform = "rotate(180deg)"
//         img.style.transition = "1s"
//         rotate = false;
//         togglesText()
        
//     }
//     else{
//         img.style.transform = "rotate(0deg)";
//         rotate =  true;
//         togglesText();
//     }

// }


const img = document.getElementById("imgRotate");
console.log(img);

let rotate = false;

img.addEventListener("click", () => {

  rotateImage();

});
// --------------------------------------------------------------

function rotateImage() {
  const img = document.querySelector("#imgRotate");  

  if (rotate) {
    img.style.transform = "rotate(180deg)";
    img.style.transition = "1s";
    // togglesText();
    rotate = false;
  } else {
    img.style.transform = "rotate(0deg)";
    img.style.transition = "1s";
    // togglesText();
    rotate = true;
  }
}

      




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
// // --------------------------------------------------------------------------------->
// // ---------------------------------------------------------->

const textoFAQ2 = document.querySelector("#imgDropDowns");
console.log("🚀 ~ file: script.js:157 ~ textoFAQ2:", textoFAQ2)


let dropDowns = false

textoFAQ2.addEventListener('click', ()=>{

    if(dropDowns){
        textoFAQ2.style.transform = "rotate(180deg)";
        textoFAQ2.style.imgTransition = "1s"
        dropDowns = false;
        

        // textInBlock();

    } else {

        textoFAQ2.style.transform = "rotate(0deg)";
        textoFAQ2.style.transition = "1s  ";
        dropDowns = true;
        // textInBlock();
    }
});

function textInBlock(){
    const textSpan = document.querySelector(".textoFAQ2");
    console.log("🚀 ~ file: script.js:184 ~ textInBlock ~ textSpan:", textSpan)
    
    if(textSpan){
        if(textSpan.style.display === "none"){
            textSpan.style.display = "inline";
        } else {
            textSpan.style.display = "none";
        }
    }
}
// // -------------------------------------------------------------------------------------------->

const textBlock = document.querySelector(".textInBlock");

const imgTransform = document.getElementById("imgTraslate");
imgTransform.style.transform = 'rotate(180deg)';

// console.log("🚀 ~ file: script.js:200 ~ imgTransform:", imgTransform)
// imgTransform.style.transform = "rotate(180deg)";

// imgTransform.addEventListener("click", imgTrnaslate);

// let imgDrops = false;

// function imgTrnaslate() {

//     if (imgDrops) {

//        imgTransform.style.transform = "rotate(180deg)";
//        imgDrops = false;
//        displayTextNone()

//     } else {
//         imgTransform.style.transform = "rotate(0deg)";
//         imgDrops = true;
//         displayTextNone()

//     }
// }

   
    
const imgTransition = document.querySelector("#imgTraslate");

let textSpan = document.querySelector(".textInBlock span");

imgTransition.addEventListener("click", () => {

  if (textSpan) {

    textSpan.remove();
    textSpan = null;

  } else {

    const lineDiv = document.createElement("div");
    lineDiv.id = "line"
    textSpan = document.createElement("span");
    textSpan.textContent = "Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar";
    const selecDiv = document.querySelector(".textInBlock");
    selecDiv.appendChild(lineDiv);
    selecDiv.appendChild(textSpan);
    
  }
});

// ------------------------------------------------------------------>
// const button = document.querySelector(".btonCoffe");
// let count = 1;



    let count = 1;
    
    function buyCoffee(){
        
        let addNumber = document.querySelector(".addNumber");
        addNumber.textContent = count;
        addNumber.style.backgroundColor =  "#515051";
        // console.log("🚀 ~ file: script.js:228 ~ addNumber:", addNumber)
    count++

}

// ----------------------------------------------------------------


const elemento = document.querySelector('#imgTraslate'); // Selecciona el elemento que deseas animar

elemento.style.transition = 'transform 0.6s ease-in-out'; // Establece la duración y el efecto de la transición

let girado = false; // Variable para rastrear el estado de la animación

elemento.addEventListener('click', () => {

  if (!girado) {

    elemento.style.transform = 'rotate(180deg)'; // Gira el elemento 180 grados
    girado = true;

  } else {
    elemento.style.transform = 'rotate(0)'; // Restablece la rotación del elemento a 0 grados
    girado = false;
  }
});

