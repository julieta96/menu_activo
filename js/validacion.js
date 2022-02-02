
let pages = $('#opciones li > .page');

const root = ()=>{

	let root= self.location.href;
	let page = root.substring(0, 37);

	return page;
}

pages.click((e)=>{

	 let page= "";
	 let idPages="";
	 let a = $(e.target);
	 let li = a.parent();

	 idPages= e.target.id;
	 
	 if(idPages=='index'){

	 	page=root()+idPages+".html";

	 }else{
	 	page=root()+"pages/"+idPages+".html";
	 }

	 a.attr("href", page);
	 li.toggleClass('active');
});
























































