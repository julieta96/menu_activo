
let pages = $('#opciones li > .page');

const root = ()=>{

	let root= self.location.href;
	let page = root.substring(0, 37);

	return page;
}

let idPages="";

pages.click((e)=>{

	 let page= "";
	 
	 a = $(e.target);
	 idPages= e.target.id;
	 let li = e.currentTarget;
	 
	 if(idPages=='index'){

	 	page=root()+idPages+".html";

	 }else{
	 	page=root()+"pages/"+idPages+".html";
	 }

	 a.attr("href", page);
	 
});

let li = $("#opciones li");

 li.click((e)=>{

	 let ev= "";
	 
	 ev= $(e.target);
	 ev.siblings().removeClass("active");
	 ev.addClass("active");
	 
});




















































