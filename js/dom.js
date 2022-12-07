// Añadir dos elementos <li> a un <ul>, y unirlos al DOM de tu página HTML
// 	Usar:
// 	- innerHTML
// 	- appendChild()
// 	- createElement()
// 	- createAttribute()
// 	- createTextNode()


const contenedor = document.getElementById('milista');
const lista = document.createElement('ul');

// creo los li 
const fruta1 =document.createElement('li');
const fruta2 =document.createElement('li');

//relaciono los li con el ul
lista.appendChild(fruta1);
lista.appendChild(fruta2);

//creo los textos para las li
const textoFruta1 = document.createTextNode('guanabana');
const textoFruta2 = document.createTextNode('pera');

//asigno cada fruta a cada li
fruta1.appendChild(textoFruta1);
fruta2.appendChild(textoFruta2);

console.log(fruta1);
console.log(fruta2);
console.log(lista);



//asigno cada li al texto de la ul
// lista.insertAdjacentElement('beforebegin',fruta1);

/* lista.appendChild(fruta1);
lista.appendChild(fruta2);
 */

/* 
lista.insertBefore(fruta1, lista.children[0]);
lista.insertBefore(fruta2, lista.children[1]); */

// Hacer un boton que esconda/enseñe el texto de un parrafo cada vez que se pulsa el mismo boton. Por defecto, el párrafo debe estar visible. Dar estilos a los elementos afectados
/*  */
// Hacer un boton que esconda/enseñe el texto de un parrafo cada vez que se pulsa el mismo boton. Por
//  defecto, el párrafo debe estar visible. Dar estilos a los elementos afectados
// Hacer que con onmouseover, se muestre un parrafo escondido, cuando pases el raton sobre el otro 
// parrafo. Dar estilos a los elementos afectados