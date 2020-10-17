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
		if(listaMenu.is(':hidden') == true){
		    //fa fa-times
			//fa fa-bars
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-bars');
            icone.addClass('fa-times');
		    listaMenu.slideToggle();

		}
		else{
			var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-times');
            icone.addClass('fa-bars');
		    listaMenu.slideToggle();
			


		}



	})
})