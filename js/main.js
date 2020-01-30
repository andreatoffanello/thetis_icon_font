$(document).ready( function() {

// side menu open

	$(".menu_item").click( function() {

	});

	$(".menu_trigger").click( function() {

		$(".side_menu").toggleClass("th_hide");

	});

// tabs

	function activeCheck() {

		var tabActiveData = $('.tabs').find(".active").data("tab");

		$(".tab_content").each(function () {

	        if($(this).data("tab") == tabActiveData) {

	            $(".tab_content").hide();

	            $(this).show();

	            return;
	        }
	    });

	};

	activeCheck();



	$(".tab").click( function() {

		$(".tab.active").removeClass("active");

        $(this).addClass("active");

		activeCheck();

	});



	$("[data-tab-close]").click( function() {

		$(this).parent().remove();

		var tabClose = $(this).parent().data("tab");

		$(".tab_content").each(function () {

	        if($(this).data("tab") == tabClose) {

	            $(this).remove();

	            return;
	        }
	    });

	    var activeNumber = $('.tab.active').length;

	    if( activeNumber <= 0) {

	    	$('.tab:nth-child(1)').addClass("active");

	    }


	    var tabsNumber = $('.tab').length;

	    if( tabsNumber <= 1) {

	    	$('.tab').addClass("active");

	    }

	    activeCheck();
	});




	function statusUpdate() {

		var sum = 0;

		$(".status_list").each(function() {


			var getChild = $(this).children();

			sum += parseInt(getChild.data('number'));

			console.log(sum);

		});


	};

	statusUpdate();




});
