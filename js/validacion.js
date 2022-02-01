
let pages = $('#opciones li > .page');

const root = ()=>{

	let root= self.location.href;
	let page = root.substring(0, 37);

	return page;
}

let idPages="";

pages.click((e)=>{

	 let page= "";

	 idPages= e.target.id;

	 if(idPages=='index'){

	 	page=root()+idPages+".html";

	 }else{
	 	page=root()+"pages/"+idPages+".html";
	 }

	 e.setAttribute('href', page);

});















































