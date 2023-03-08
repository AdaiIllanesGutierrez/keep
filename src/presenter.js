let submit=document.querySelector(".submit");
let notesElem=document.querySelector('.notes');
let title=document.querySelector("#text");
let desc=document.querySelector('#desc');

let notes=JSON.parse(localStorage.getItem("notes"));
if(notes){
    notes.forEach(element => {
        addNotes(element)
    });
}
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    addNotes()
})
function addNotes(obj) {
    let card=document.createElement("div");
    card.classList.add("card");
    let titleval=title.value;
    let descVal=desc.value;
    if(obj){
        titleval=obj.title;
        descVal=obj.desc;
    }
    if(titleval){
        card.innerHTML=`<h3>${titleval}</h3>
                                    <p class="ptag">${descVal}</p>
                             <button class="del">Borrar</button>`;
        notesElem.appendChild(card);
        updateLs()
    }
    let del=card.querySelector(".del");
    del.addEventListener('click', ()=>{
        card.remove();
        updateLs();
    })
}
function updateLs() {
    let card=document.querySelectorAll(".card");
    let arr=[];
    card.forEach(element => {
        arr.push({
            title:element.children[0].innerText,
            desc:element.children[1].innerText
        })
    });
    localStorage.setItem("notes", JSON.stringify(arr));
}




// const formBuscar = document.querySelector("#form-buscar");
// const tituloBuscar = document.getElementById("titulo-buscar");
// const divBuscar = document.querySelector("#div-buscado");
// const formulario = document.querySelector("#formulario");
// const tituloInput = document.querySelector("#titulo");
// const textoInput = document.querySelector("#texto");
// const divNotas = document.querySelector(".div-notas");

// const objNota = {
//   fecha: "",
//   titulo: "",
//   texto: "",
// };

// let listaNotas = [];
// let editando = true;

// formBuscar.addEventListener("submit", (event) => {
//   event.preventDefault();
//   buscarNota(tituloBuscar.value)
// });

// formulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e) {
//   e.preventDefault();

//   if (tituloInput.value === "" || textoInput.value === "") {
//     alert("Todos los campos se deben llenar");
//     return;
//   }
//   if (editando) {
//     editarNota();
//     editando = false;
//   } else {
//     objNota.fecha = Date.now();
//     objNota.titulo = tituloInput.value;
//     objNota.texto = textoInput.value;
//     crearNota();
//   }
// }


// function crearNota() {
//   listaNotas.push({ ...objNota });
//   mostrarNotas();
//   formulario.reset();
//   limpiarObjeto();
// }

// function mostrarNotas() {
//   refrescarHTML();
//   const divNotas = document.querySelector(".div-notas");

//   listaNotas.forEach((nota) => {
//     const { fecha, titulo, texto } = nota;
    
//     const parrafo = document.createElement("p");
//     parrafo.textContent = `${titulo} - ${texto} `;
//     parrafo.dataset.id = fecha;

//     // const editarBoton = document.createElement("button");
//     // editarBoton.onclick = () => cargarNota(nota);
//     // editarBoton.textContent = "Editar";
//     // editarBoton.classList.add("btn", "btn-success");
//     // parrafo.append(editarBoton);

//     const eliminarBoton = document.createElement("button");
//     eliminarBoton.onclick = () => eliminarNota(fecha);
//     eliminarBoton.textContent = "Eliminar";
//     eliminarBoton.classList.add("btn", "btn-danger");
//     parrafo.append(eliminarBoton);

//     const hr = document.createElement("hr");
//     divNotas.appendChild(parrafo);
//     divNotas.appendChild(hr);
//   });
// }

// function limpiarObjeto() {
//   objNota.fecha = "";
//   objNota.titulo = "";
//   objNota.texto = "";
// }

// function buscarNota(titulo) {
//   listaNotas = listaNotas.filter((nota) => nota.titulo === titulo);
//   //refrescarHTML();
//   mostrarNotas();
// }
// function eliminarNota(fecha) {
//   listaNotas = listaNotas.filter((nota) => nota.fecha !== fecha);
//   refrescarHTML();
//   mostrarNotas();
// }

// function refrescarHTML() {
//   const divNotas = document.querySelector(".div-notas");
//   while (divNotas.firstChild) {
//     divNotas.removeChild(divNotas.firstChild);
//   }
// }

// function cargarNota(nota) {
//   const { fecha, titulo, texto } = nota;

//   tituloInput.value = titulo;
//   textoInput.value = texto;

//   objNota.fecha = fecha;

//   formulario.querySelector('button[type="submit"]').textContent = "Actualizar";

//   editando = true;
// }


// function editarNota() {
//   objNota.titulo = tituloInput.value;
//   objNota.texto = textoInput.value;

//   listaNotas.map((nota) => {
//     if (nota.fecha === objNota.fecha) {
//       nota.fecha = objNota.fecha;
//       nota.texto = objNota.texto;
//       nota.titulo = objNota.titulo;
//     }
//   });

//   refrescarHTML();
//   mostrarNotas();
//   formulario.reset();

//   formulario.querySelector('button[type="submit"]').textContent = "Agregar";

//   editando = false;
// }