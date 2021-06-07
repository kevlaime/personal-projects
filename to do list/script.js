let tarea = document.querySelector(".input");
let agregar = document.querySelector(".boton-agregar");
let contenedor = document.querySelector(".container")


//    Creamos la clase Item

class Item {
  constructor (nuevaTarea){
    this.crearDiv(nuevaTarea)
  }

  //    Método crearDiv
  crearDiv(){
    let inputItem = document.createElement("input");
    inputItem.type = "text";
    inputItem.disabled = true;
    inputItem.classList.add("item-input");
    inputItem.value = tarea.value;

    let newDiv = document.createElement("div")
    newDiv.classList.add("item")


    //    Botón editar
    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
    botonEditar.classList.add("boton-editar");


    //    Botón remover
    let botonRemover = document.createElement("button");
    botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
    botonRemover.classList.add("boton-remover");

    //    Agregamos elementos a la lista
    newDiv.appendChild(inputItem);
    newDiv.appendChild(botonEditar);
    newDiv.appendChild(botonRemover);

    contenedor.appendChild(newDiv);

    //    Funcionalidad al boton editar
    botonEditar.addEventListener("click", ()=> {
      if (!(inputItem.disabled === true)){
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        inputItem.disabled = true
      }
      else{
        botonEditar.innerHTML ="<i class='fas fa-lock-open'></i>";
        inputItem.disabled = false
      }
    });

    //    Funcionalidad al boton remover
    botonRemover.addEventListener("click", ()=> {
      contenedor.removeChild(newDiv)
    })
  }

}

//    Funcion para verificar el input
function chequearInput() {
  if (tarea !== ""){
    new Item (tarea.value)
    tarea.value = ""
  }
};

//    Botón que llama a la función chequearInput
agregar.addEventListener("click", function(){
  if (tarea.value !== ""){
    chequearInput();
  }
  else{
    console.log("Ingrese tarea")
  }
});
