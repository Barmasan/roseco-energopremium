
$('.navigation > .container > ul > li, .navigation > .container > ul > li > ul').hover(function(){
    $(' .navigation > .container > ul > li > ul', this).css('display', 'block');
}, function(){
    $(' .navigation > .container > ul > li > ul', this).css('display', 'none');
})

$('.navigation > .container > ul > li > ul > li').hover(function(){
    console.log(1);
    $('.navigation > .container > ul > li > ul > li > ul', this).css('display', 'block');
}, function(){
    $('.navigation > .container > ul > li > ul > li > ul', this).css('display', 'none');
})

/* mobile menu */
$(".mobile_menu").simpleMobileMenu();

/* $(".mobile_menu").slideMobileMenu({

    // Hamburger Id
    "hamburgerId"   : "sm_menu_ham", 
  
    // Menu Wrapper Class
    "wrapperClass"  : "sm_menu_outer", 
  
    // Submenu Class
    "submenuClass"  : "submenu", 
  
    // or 'accordion'
    "menuStyle": "slide",
  
    // Calls when menu loaded
    "onMenuLoad"    : function() { return true; }, 
  
    // Calls when menu open/close
    "onMenuToggle"  : function() { return true; } 
    
  }); */
/* mobile menu END */





/* height of card blocks */
if(window.innerWidth < 991)
$('.top-5').height($('.top-5 .right-side').height() + $('.top-5 .left-side').height());


console.log($('.types-of-work .bottom-block').height());

// dev
window.onresize = function(){
    
    if(window.innerWidth < 991){
        $('.top-5').height($('.top-5 .right-side').height() + 450);
    } else{
        $('.top-5').height('1300');
    }
}
// dev

if(window.innerWidth < 991)
$('.types-of-work').height($('.types-of-work .bottom-block').height() + 450); 
window.onresize = function(){
    
    if(window.innerWidth < 991){
        $('.types-of-work').height($('.types-of-work .bottom-block').height() + 450);
    } else{
        $('.types-of-work').height('1300');
    }
}


console.log($('.stages-9 .right-side').height() + $('.stages-9 .left-side').height());

if(window.innerWidth < 991)
$('.stages-9').height($('.stages-9 .right-side').height() + $('.stages-9 .left-side').height() + 250);

// dev
window.onresize = function(){
    
    if(window.innerWidth < 991){
        $('.stages-9').height($('.stages-9 .right-side').height() + 450);
    } else{
        $('.stages-9').height('1600');
    }
}
/* height of card blocks END */
