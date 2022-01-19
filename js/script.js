console.clear();
var typelist = [
	{
		name: "typeA",
		icon: "<i class='fa fa-automobile fa-fw'></i>"
	},
	{
		name: "typeB",
		icon: "<i class='fa fa-bus fa-fw'></i>"
	},
	{
		name: "typeC",
		icon: "<i class='fa fa-cab fa-fw'></i>"
	},
	{
		name: "typeD",
		icon: "<i class='fa fa-motorcycle fa-fw'></i>"
	},
	{
		name: "typeE",
		icon: "<i class='fa fa-subway fa-fw'></i>"
	}
];
console.log(typelist);

var swiper = new Swiper(".swiper-container", {
	slidesPerView: 3,
	autoplay:true,
	spaceBetween: 20,
	autoplay: {delay:3000},
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