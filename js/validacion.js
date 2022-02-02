
let pages = $('#opciones li > .page');

const root = ()=>{

	let root = self.location.href;
	let page ="";

	if(root=="https://site-menu-activo.netlify.app/"){

		let buscarCadena = ".app/";
		let sizeCadena = buscarCadena.length;
		let posicionCadena = root.indexOf(buscarCadena);
		page = root.substring( 0 ,posicionCadena+sizeCadena);

	}

	let nombreProyecto = "menu_activo";
	let sizeNombreProyecto = nombreProyecto.length;
	let posicionNombreProyecto = root.indexOf(nombreProyecto);
	page = root.substring( 0 ,posicionNombreProyecto+sizeNombreProyecto);

	return page;
}

pages.click((e)=>{

	 let page= "";
	 let idPages="";
	 let a = $(e.target);
	 let li = a.parent();

	 idPages= e.target.id;
	 
	 if(idPages=='index'){

	 	page=root()+"/"+idPages+".html";

	 }else{
	 	page=root()+"/pages/"+idPages+".html";
	 }

	 a.attr("href", page);
	 li.toggleClass('active');
});
























































