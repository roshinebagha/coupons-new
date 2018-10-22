$(document).ready(function() {
	$(".accordion").click(function() {
		event.preventDefault();
		var accordion = $(this).parent();
		accordion.toggleClass("accordion-closed");
	});



	$(function() {
		 //Enable swiping...
		 $(".last-5-ctr").swipe( {
			 swipeStatus:function(event, phase, direction, distance, duration, fingers, fingerData) {
				 console.log(phase);
				 if(direction == 'left' && phase == 'move'){
				 	$('.last-5-ctr').addClass("out-left").removeClass('slide-in display');
					$('.h2h-ctr').addClass("slide-in display").removeClass('out-right');
					$('.bubble').toggleClass('active');
				}
			 },
		 });
		 $(".h2h-ctr").swipe( {
			 swipeStatus:function(event, phase, direction, distance, duration, fingers, fingerData) {
				 if(direction == 'right' && phase == 'move'){
					$('.h2h-ctr').addClass("out-right").removeClass('slide-in display');
					$('.last-5-ctr').addClass("slide-in display");
					$('.bubble').toggleClass('active');
				}
			 },
		 });
	 });


	$(".select-box-ctr").find("select").change(function() {
		var selectedValue = $(this).val();
		var accordions = $(document).find(".accordion-wrapper");
		accordions.each(function() {
			var accordion = $(this);

			// if (selectedValue === "all") {
			// 	accordion.removeClass("hidden");
			// 	return;
			// }

			if (accordion.data("market-type") !== selectedValue) {
				accordion.addClass("hidden");
			} else {
				accordion.removeClass("hidden");
			}
		});
	})

	$("a").click(function() {
		event.preventDefault();
	});

});

function resetStatsOverlayClasses() {
	$('.last-5-ctr').attr('class','last-5-ctr display');
	$('.h2h-ctr').attr('class','h2h-ctr out-right');
	$('.bubble').removeClass('active');
	$('.bubble.left').addClass('active');
}

// POPUP //
$(document).ready(function() {

	$(".stats-btn").click(function() {
		var parent = $(this).parent();
		var stats = $('.stats-overlay.global');
		$(parent).append(stats);

		if (!$(this).next('.stats-overlay').hasClass("hidden")) {
			$(this).next('.stats-overlay').addClass("hidden");
			return;
		}

		// sets all overlays be closed //
		$('.stats-overlay').addClass("hidden");
		resetStatsOverlayClasses();
		// show me this one //
		$(this).next('.stats-overlay').toggleClass("hidden");

		// $('html,body').animate({
    // scrollTop: $('.stats-overlay.global').offset().top - 250},
    // 300);

	});

	// close the open one //
	$(".stats-close").click(function() {
		$(this).parent().toggleClass("hidden");
		resetStatsOverlayClasses();

	})

});
