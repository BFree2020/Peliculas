//CARGAR TARJETAS
import {data} from './data.js';


const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');

//addEventListener = escucha/controla eventos//
//DOMContentLoaded = garantiza que nos llame la funcion cargada, luego de que cargue el DOM 
document.addEventListener('DOMContentLoaded', () =>{
    cargarData(data);
})

//creamos una funcion para cargar la data
const cargarData = data =>{
    console.log(data);
    data.forEach(movie => {  //movie es un objeto
        //desestructuracion de objetos-trata propiedades de forma independiente
const{id,name,image} = movie;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src',image);


        //clonar el template
        const clone = templateCard.cloneNode(true);

        
        fragment.appendChild(clone);

    })

    items.appendChild(fragment);
}


//FORMULARIO
//almacenarLocalStorage nmbre de la funcion

form.addEventListener('submit', function AlmacenarLocalStorage(){

    //captura de datos y almacenamiento en variables
    let inputName = document.getElementById('inputName').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let msn = document.getElementById('msm').value;

    if(inputName==="" || email==="" || gender==="" || msn===""){
        alert('ingresar todos los campos');
    }else{

        localStorage.setItem('Nombre',inputName);
        localStorage.setItem('Email',email);
        localStorage.setItem('Genero',gender);
        localStorage.setItem('Mensaje',msn);
        ObtenerLocalStorage();

    }

})

function ObtenerLocalStorage(){

    let nombre = localStorage.getItem('Nombre');
    let email = localStorage.getItem('Email');
    let genero = localStorage.getItem('Genero');
    let mensaje = localStorage.getItem('Mensaje');
    alert(`La informacion almacenada es ${nombre}
    ${email}
    ${genero}
    ${mensaje}`);

}



items.addEventListener('click', e => {
    // console.log(e.target.dataset.id);
    let idTarget = e.target.dataset.id;
    
    /*recorremos de nuevo la data*/
    data.forEach(movie => {
        /*Desestructuramos*/
        const {id,name,image,descripcion,price} = movie;
        /*validamos si el id capturado de la imagen al hacer clic es igual
        a algún id dentro de la data*/
        if(id == idTarget){
            /*Creamos un objetos al cual a las propiedades le asignamos lo datos
            del heroe selecciones*/
            const objeto = {
                id: id,
                name: name,
                image: image,
                descripcion: descripcion,
                price: price,
            }
            
            /*Almacenamos en el local storage el heroe seleccionado*/
            /*si yo envío al local storage el objeto de la siguiente manera
            localStorage.setItem("Heroe",objeto); en el local storage vamos a ver un 
            [object Object], con el JSON.stringify le indicamos que nos almacene
            con una estructura JSON(formato)*/
            localStorage.setItem("Movie",JSON.stringify(objeto));
            getName();
            carrito.push(objeto);
            localStorage.setItem('Carrito',JSON.stringify(carrito));
            listarCarrito();
        }   
    })
    e.stopPropagation();
    e.preventDefault();
 })
 
 
 
 
 function getName(){
     detail.innerHTML = '';
     /*JSON.parse tomamos el string(cadena de carateres) que está trayendo
     del local storage y lo convierte en formato json*/
     heroe = JSON.parse(localStorage.getItem("Movie")); 
     /*desestructuración de objetos*/
     const {name,image,descripcion,price} = movie;
     /*pintamos a información desestructurada en una tabla*/
     detail.innerHTML = `
     <table border="2px" align="center">
     <tr>
         <td rowspan="3"><img src="${image}"  width="400" height="500"></td>
         <td align="center">
          <h2>${name}</h2>
          <h4>${descripcion}</h4>
          <h5>${price}</h5>
         
         </td>
     </tr>
 </table>
     `
 }
 
 
 const listarCarrito = () => {
     listaCompra.innerHTML = '';
     let total = 0;
     let totalInt = 0;
     carrito = JSON.parse(localStorage.getItem('Carrito'));
     carrito === null ? ( carrito = []) : (
         carrito.forEach(element => {
             totalInt += element.price;
             listaCompra.innerHTML += 
             `<br> <br>
          <div width="100" height="100" align="center">
          <span>${element.name}</span>
          <span>${element.price}</span>
          <span><button id="${element.id}">x</button></span><br>
          </div>`
          total = totalInt;
         })
     )
     getTotal(total);
 }
 
 
 function getTotal(total){
     listaTotal.innerHTML = '';
     listaTotal.innerHTML = `<h1 align="center">Total a pagar ${total}</h1>`
     localStorage.setItem('Total',total)
 }
 
 
 listaCompra.addEventListener('click', (e) =>{
     e.preventDefault();
 
 
    if(e.target.innerHTML == 'x'){
         let id = e.target.id;
         deleteMovie(id);
    }
 
 
 })
 
 
 
 
 function deleteMovie(idI){
     let indexArreglo;
 
 
     carrito.forEach((elemento,index) =>{
         if(elemento.id==idI)
         indexArreglo = index;
     })
     
     carrito.splice(indexArreglo,1);
     localStorage.setItem('Carrito',JSON.stringify(carrito));
     listarCarrito();

    }







       
    
