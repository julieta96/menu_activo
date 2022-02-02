require(['jquery','root'], ($, r)=>{

 let pages = $('#menu li a');

 pages.click((e)=>{

	 let page= "";
	 let a = $(e.target);
	 let idPage= e.target.id;
	 
	 if(idPage=='index'){

	 	page=r.root+"/"+idPage+".html";

	 }else{
	 	page=r.root+"/pages/"+idPage+".html";
	 }

	 a.attr("href", page);
	 a.siblings().removeClass('active');
	 a.addClass('active');   
 });

})







