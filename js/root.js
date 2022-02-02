define(['jquery'], function($){


	const root = ()=>{

		let root = self.location.href;
		let page ="";

		if(root.includes("https://site-menu-activo.netlify.app/")){

			let buscarCadena = "app";
			let sizeCadena = buscarCadena.length;
			let posicionCadena = root.indexOf(buscarCadena);
			page = root.substring( 0 ,posicionCadena+sizeCadena);

		}else{

			let nombreProyecto = "menu_activo";
			let sizeNombreProyecto = nombreProyecto.length;
			let posicionNombreProyecto = root.indexOf(nombreProyecto);
			page = root.substring( 0 ,posicionNombreProyecto+sizeNombreProyecto);

		}

		return page;
	}


	return{
   
           root: root()
   	}


})