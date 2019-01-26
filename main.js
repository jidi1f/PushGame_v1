$(document).ready(function() {
/*-------

  Slider  

--------*/
$("#owl-main").owlCarousel({
    items: 1,
    singleItem: true,
    loop: true,
    autoplay:true,
    animateOut: 'fadeOut',
    autoplayHoverPause:true,
    autoHeight:true,
    autoplayTimeout: 5000,
});
/*--------

   MENU

--------*/   
var count = 0;
$('#tools_menu').on('click', function(){
    $('.menu ul').slideToggle(400);
    if(count = 1) {
        $('.top-read').slideUp(300);
        $('.container-forum-right').slideUp(300);
    }
    count = 1;
});
$('#tools_top-read').on('click', function(){
    $('.top-read').slideToggle(400);
    if(count = 1) {
        $('.menu ul').slideUp(300);
    }
    count = 1;
    
});
$('#tools_chat').on('click', function(){
    $('.container-forum-right').slideToggle(400);
    if(count = 1) {
        $('.menu ul').slideUp(300);
    }
    count = 1;
});
    $(window).resize(function(){
        if($(window).width() > 1075 ){
            
            $('.menu ul').removeAttr('style');
            $('.top-read').removeAttr('style');
            $('.container-forum-right').removeAttr('style');
            
        }
    })

 /*---------

MESSAGE

----------*/   

$('.fly-block').mouseover(function() { 
  $('.message').addClass('active-message');
})
$('.fly-block').mouseout(function() { 
    $('.message').removeClass('active-message');
  })
 
 
    
 /*---------

Scroll

----------*/ 

var up = $('.GoUp');

function scroll (){
    var top = $(this).scrollTop() ;
    if(top  < 1000) {
    up.removeClass('active-arrow');
    }
    else up.addClass('active-arrow');
}

up.on('click' , function(){
    $('html, body').animate({
        scrollTop: 0
    }, 300);
})

$(document).on('scroll',scroll);

   scroll();

   up.on('click' , function(){
    $('html, body').animate({
        scrollTop: 0
    }, 300);
})   

/*---------

POPUP

----------*/

  var p1 = new Popup({
      modal: '.Popup',
      overlay: '.Overlay-popup'
  })
 
  var p2 = new Popup({
      modal: '.container-form',
      overlay: '.Overlay-popup'
  })

  var p3 = new Popup({
      modal: '.pre-reg',
      overlay: '.Overlay-popup',

  })

  $('.callback').on('click', function(){    
      p1.Open();    
  })
 
  $('#LOGIN').on('click', function(e){  
       e.preventDefault();
       p2.Open();    
  })

  $('.new-topic').on('click', function(){    
      p3.Open();    
})
 /*-----

 FORM

 ------*/

 var SHOW_CLASS = 'show',
     HIDE_CLASS = 'hide',
     ACTIVE_CLASS = 'active';

$('.tabs').on('click', 'li a', function(e) {
    e.preventDefault();

    var $tab = $(this), href = $tab.attr('href');

    $('.active').removeClass(ACTIVE_CLASS);
    $tab.addClass(ACTIVE_CLASS);
    $('.show').removeClass(SHOW_CLASS).addClass(HIDE_CLASS).hide();
    $(href).removeClass(HIDE_CLASS).addClass(SHOW_CLASS).hide().fadeIn(620);
});

$.validator.setDefaults({
    errorClass: "help-block",
    highlight: function(element) {
       $(element).closest(".item-form input").addClass("has-error");
   },
   unhighlight: function(element) {
    $(element).closest(".item-form input").removeClass("has-error");
}
});
 /* SING UP FORM

 --------------------------*/
$("#reg_log_form_up").validate({
    rules: {
        name: {
            required:true,
            minlength: 2
        }, 
        password: {
            required:true,
            minlength: 6
        },
        confirm_password: {
            required:true,
            minlength: 6,
            equalTo: "#password-for"
        },
        email: {
            required:true,
            email: true
        }
    },
    messages: {
        name: {
            required: "Пусто",
            minlength: "Минимум 2 символа"
        },
        password: {
            required: "Пусто",
            minlength: "Минимум 6 символов"
        },
        confirm_password: {
            required: "Пусто",
            minlength: "Минимум 6 символов",
            equalTo: "Не совпадает, введите правельный"
        },
        email: {
            required: "Пусто",
            email: "Не существует"
        }
    }
})

/* SING IN FORM

 --------------------------*/

$("#reg_log_form_in").validate({
    rules: {
        name: {
            required:true,
            minlength: 2
        }, 
        password: {
            required:true,
            minlength: 6
        }
    },
    messages: {
        name: {
            required: "Пусто",
            minlength: "Минимум 2 символа"
        },
        password: {
            required: "Пусто",
            minlength: "Минимум 6 символов"
        }
    }
});

/* SEND FORM

 --------------------------*/

$("#reg_send_form").validate({
    rules: {
        email: {
            required:true,
            email: true
        }
    },
    messages: {
        email: {
            required: "Пусто",
            email: "Не существует"
        }
     } 
    })

/* FOR-GAMES

 -------------------------*/
var block = function(){
    var items = $(".game-item");
    for(var i = 0; i <= 6; i++) {
     items.eq(i).css({"display":"block"});
     }
}

var removeActive = function(){
   var items = $(".content-items nav ul li");
   for(var i = 0; i <= 6; i++) {
    items.eq(i).removeClass("active_for_game");
    }
}

var allP = $(".content-items nav ul #allP").on('click', function(){
    removeActive();
    allP.addClass("active_for_game");
    block();
});

var PC = $(".content-items nav ul #PC").on('click', function(){
    removeActive();
    PC.addClass("active_for_game");
    block();
    var	id =  this.id;
    $(".game-item[data-pc!='#"+id+"']").css({"display":"none"});
});

var XONE = $(".content-items nav ul #XONE").on('click', function(){
    removeActive();
    XONE.addClass("active_for_game");
    block();
	var	id =  this.id;
  $(".game-item[data-xone!='#"+id+"']").css({"display":"none"});
});

var PS4 = $(".content-items nav ul #PS4").on('click', function(){
    removeActive();
    PS4.addClass("active_for_game");
    block();
	var	id =  this.id;
  $(".game-item[data-ps4!='#"+id+"']").css({"display":"none"});
});

var NSW = $(".content-items nav ul #NSW").on('click', function(){
    removeActive();
    NSW.addClass("active_for_game");
    block();
	var	id =  this.id;
  $(".game-item[data-nsw!='#"+id+"']").css({"display":"none"});
});


});
 
/*----------

CLASS POPUP

*----------*/
function Popup(options) {
    var main = $('.Forblur');
    this.modal = $(options.modal);
	this.overlay =  $(options.overlay);
    var popup = this;
    
    this.Open = function(content) {
       main.addClass('blur');
       popup.modal.show();
       popup.overlay.show();
       popup.modal.html(content);
     }

     this.Close = function() {
       main.removeClass('blur');
       popup.modal.hide();
       popup.overlay.hide();
     }

     this.overlay.on('click' , this.Close);
    } 


   
