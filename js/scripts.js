$(function(){
	//Aqui vai código de javascript.
	$('nav.mobile').click(function(){
		//Quando clicarmos na nav.mobile!
		var listaMenu = $('nav.mobile ul');
		//abrir mnu fadein
		/*
		if(listaMenu.is(':hidden') == true)
		listaMenu.fadeIn();
		else
		    listaMenu.fadeIn();
		*/
		listaMenu.slideToggle();


	})
})