
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
$('.stages-9').height($('.stages-9 .right-side').height() + $('.stages-9 .left-side').height());

// dev
window.onresize = function(){
    
    if(window.innerWidth < 991){
        $('.stages-9').height($('.stages-9 .right-side').height() + 450);
    } else{
        $('.stages-9').height('1600');
    }
}
// dev