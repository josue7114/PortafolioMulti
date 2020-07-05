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