const formulario = document.getElementById('formulario');
const numero1=document.getElementById('num1');
const numero2 =document.getElementById('num2');
const opcion=document.getElementById('op');
const respuesta= document.getElementById('res');


formulario.addEventListener('submit',(e)=>{
   e.preventDefault();
    calcular();

})


function suma(){
  let res=parseInt(numero2.value) + parseInt(numero1.value);
  respuesta.innerHTML= `Realizo una Suma : ${res}`;
}

function Resta(){
    let res=parseInt(numero1.value) - parseInt(numero2.value);
    respuesta.textContent=`Realizo una Resta : ${res}`;
  }

  function multiplicacion(){
    let res=parseInt(numero2.value) * parseInt(numero1.value);
    respuesta.textContent=`Realizo una Multiplicacion: ${res}`;
  }

  function divicion(){
      if(numero2 !=0){
          let res=parseInt(numero1.value) /parseInt(numero2.value);
         respuesta.textContent=`Realizo una Divicion : ${res}`;;
          
      }else{
           alert('No se puede dividir entre 0');
      }
    
  
  }

  function calcular(){
      if(opcion.value=='suma'){
          suma();
      } else if(opcion.value=='resta'){
          Resta();
      }else if(opcion.value=='multiplicar'){
          multiplicacion();
      }else if(opcion.value=='dividir'){
          divicion();

      }else{
          alert('Elija una opcion');
      }
  }