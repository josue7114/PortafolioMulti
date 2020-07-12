$(function(){
    //header oculto
    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();

    var ancho = $(window).width(),
        links = $('#container__link'),
        btnmenu = $('#btn-menu'), 
        icono = $('#btn-menu .icono');

        if(ancho < 900){
            links.hide();
            icono.addClass('fa-bars');
        }

        btnmenu.on('click', function(e){
            links.slideToggle();
            icono.toggleClass('fa-bars');
            icono.toggleClass('fa-times');
        });

        $(window).on('resize', function(){
            if($(this).width() > 900){
                links.show();
                icono.addClass('fa-times');
                icono.removeClass('fa-bars');
            }else{
                links.hide();
                icono.addClass('fa-bars');
                icono.removeClass('fa-times');
            }
        });
});

$(window).scroll(function(){				 
	$('.section__experience .paragraph--timeline').each(function(){
    	var scrollTop     = $(window).scrollTop(),
        	elementOffset = $(this).offset().top,
       		distance      = (elementOffset - scrollTop),
			    windowHeight  = $(window).height(),
			    breakPoint    = windowHeight*0.9;

			if(distance > breakPoint) {
				$(this).addClass("more-padding");	
			}  if(distance < breakPoint) {
				$(this).removeClass("more-padding");	
			}
	});
});

const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});