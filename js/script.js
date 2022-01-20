console.clear();
var typelist = [
	{
		name: "typeA",
		icon: "<i class='far fa-circle'></i>"
	},
	{
		name: "typeB",
		icon: "<i class='far fa-circle'></i>"
	},
	{
		name: "typeC",
		icon: "<i class='far fa-circle'></i>"
	},
	{
		name: "typeD",
		icon: "<i class='far fa-circle'></i>"
	},
	{
		name: "typeE",
		icon: "<i class='far fa-circle'></i>"
	},
	{
		name: "typeF",
		icon: "<i class='far fa-circle'></i>"
	},
	{
		name: "typeG",
		icon: "<i class='far fa-circle'></i>"
	},
	{
		name: "typeH",
		icon: "<i class='far fa-circle'></i>"
	}
	
];
console.log(typelist);

var swiper = new Swiper(".swiper-container", {
	slidesPerView: 3,
	autoplay:true,
	spaceBetween: 20,
    
	centeredSlides: true,
	parallax: true,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,		
		renderBullet: function(index, className) {
			return (
				'<div class="' +
				className +
				'">' +
				typelist[index].icon +'<span class="typeName">' +	typelist[index].name +"</span></div>"
			);
		},
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	breakpoints: {
		991: {
			pagination: {
        
      }
	  
		}
	}
});