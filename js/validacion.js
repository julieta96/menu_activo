const validacionClaseActiva = ()=>{

/*const elementos= document.querySelector("#opciones li a");
elementos.addEventListener("click", activarClase);*/
activarClase()


}


function pageHref(){

		var rutaAbsoluta = self.location.href;   
		var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
		var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
		return rutaRelativa;  
	}


const activarClase= ()=>{

//let i =0;
const elementoLi=document.querySelector("#opciones li");
//let URLactual = window. location; //alert(location.href);


	switch(pageHref()){

		case "index.html":
		elementoLi.classList.toggle("active");
		break;

		case "page1.html":
		elementoLi.classList.toggle("active");
		break;

		case "page2.html":
		elementoLi.classList.toggle("active");
		break;

		case "page3.html":
		elementoLi.classList.toggle("active");
		break;

		case "page4.html":
		elementoLi.classList.toggle("active");
		break;


	}
	

}

addEventListener("load", validacionClaseActiva);







