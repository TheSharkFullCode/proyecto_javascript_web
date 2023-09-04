(()=>{  console.log("hello  world");})()


// Retrieve the data from local storage
let storedData = JSON.parse(localStorage.getItem('addBagCoffe'));
console.log(storedData);

localStorage.getItem("addBagCoffe")


// Obtener el objeto compartido del local storage
let sharedObject = JSON.parse(localStorage.getItem('sharedObject'));
console.log(sharedObject);

// Verificar si el objeto existe y utilizarlo
if (sharedObject) {
  console.log(sharedObject);
  // Aquí puedes hacer cualquier operación que necesites con el objeto
} else {
  console.log("El objeto compartido no está disponible");
}
