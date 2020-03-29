
if(window.innerWidth < 991)
$('.top-5').height($('.top-5 .right-side').height() + $('.top-5 .left-side').height());


console.log($('.types-of-work .bottom-block').height());

// dev
window.onresize = function(){
    
    if(window.innerWidth < 991){
        $('.top-5').height($('.top-5 .right-side').height() + $('.top-5 .left-side').height());
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