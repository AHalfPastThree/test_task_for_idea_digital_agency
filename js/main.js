$(document).ready(function(){
	$(".feedback").hide();
	$(".header-callback").click(function () {
		$(".feedback").show();
		$(".feedback-form").addClass("shown");
		$(".feedback").animate({
			opacity : 1
		}, 1000);
	});

	
		$(document).mouseup(function (e) {
			if ($(".feedback-form").hasClass("shown")) {
				var container = $(".feedback-form");
				e.stopPropagation();
				if (!container.is(e.target) && container.has(e.target).length === 0 && !$(".header-callback").is(e.target) ){
					console.log(e.target);
					container.removeClass("shown");
					$(".feedback").animate({
							opacity : 0
					}, 1000, function(){
							$(".feedback").hide();
					});
				}
			}
		});
	

	$(".cross").click(function () {
		$(".feedback").animate({
			opacity : 0
		}, 1000, function(){
			$(".feedback").hide();
			$(".feedback-form").removeClass("shown");
		});
		
	});

	$(".parent-category").click(function(){
		$(this).parent().find("ul").toggle();
	});

	$("#nav-icon1").click(function(){
		$(".navigation-mob").animate({
			left : 0
		}, 300);
	});

	$(".close-mob-menu").click(function(){
		$(".navigation-mob").animate({
			left : -7000
		}, 300);
	});

	$(".telephones img").click(function(){
		$(".telephones-modal").animate({
			top : 140
		}, 300);
	});

	$(".telephones-modal .close").click(function(){
		$(".telephones-modal").animate({
			top : -7000
		}, 300);
	});

});

