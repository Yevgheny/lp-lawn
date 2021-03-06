$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(document).ready(function() {
 
    $("#main-slider").owlCarousel();    
 
});
$("#main-slider").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      pagination : true,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
$(document).ready(function() {
 
  var sync1 = $("#examples-slider");
  var sync2 = $("#sync2");  
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,    
    navigation: true,
    pagination:true,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
    autoHeight : false,
  });
 
  sync2.owlCarousel({
    items : 5,
    itemsDesktop      : [1199,4],
    itemsDesktopSmall : [979,4],
    itemsTablet       : [768,3],
    itemsMobile       : [479,2],
    pagination        :false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });    
 
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = $("#sync2").data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        $("#sync2").trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        $("#sync2").trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      $("#sync2").trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      $("#sync2").trigger("owl.goTo", num-1)
    }
    
  }
 
});

 $(".main-menu-btn").click(function () {
      $(".mobile-menu").slideToggle();
    });


document.querySelector( "#showtop" )
.addEventListener( "click", function() {
    this.classList.toggle( "active" );
});