
let pages = $('#opciones li > .page');

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

pages.click((e)=>{

	 let page= "";
	 let a = $(e.target);
	 let li = a.parent();

	 let idPage= e.target.id;
	 
	 if(idPage=='index'){

	 	page=root()+"/"+idPage+".html";

	 }else{
	 	page=root()+"/pages/"+idPage+".html";
	 }

	 a.attr("href", page);
	 li.toggleClass('active');
});
























































