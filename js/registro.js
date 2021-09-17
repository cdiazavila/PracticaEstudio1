const nombre = document.getElementById('nombre');
const apellido = document.getElementById('ape');
const correo = document.getElementById('correo');
const btnRegistrar = document.getElementById('registrar');
const tabla = document.getElementById('tabla');

var cont=1;
// evento click 

btnRegistrar.addEventListener('click',(e)=>{
    e.preventDefault();
  capturaDatos();
   cont++;
})

function capturaDatos(){
   let tbody= document.createElement('tbody');
  
   tbody.innerHTML=`  <tr>
              <th scope="row">${cont}</th>
              <td>${nombre.value}</td>
              <td>${apellido.value}</td>
              <td>${correo.value}</td>
           </tr>`;
        tabla.appendChild(tbody);
       console.log(cont)

}

function validarFormulario(){

}