window.onload = function(){
function prev(){

$('.slide li:last').prependTo('.slide');

$('.slide').css('margin-left',-1200); 

$('.slide').stop().animate({marginLeft:0},1300);

}


function next(){

$('.slide').stop().animate({marginLeft:-1200}, function(){

$('.slide li:first').appendTo('.slide');

$('.slide').css({marginLeft:0});


});

}


function slide(){

$('.slide').stop().animate({marginLeft:-1200}, function(){

$('.slide li:first').appendTo('.slide');

$('.slide').css({marginLeft:0});

});

}


$('.prev').click(function(){

prev();

});

$('.next').click(function(){

next();

});
 }