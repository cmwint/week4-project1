$(document).ready(function(){
	// Question #1
	$("#hover").on({
	    mouseenter: function() {
			$(this).css('background-color','red').css('transition','300ms');
	    },
	    mouseleave: function() {
			$(this).css('background-color','blue').css('transition','300ms');
	    },
	    click: function() {
		    $(this).toggleClass('green');
	    }
	});
	// Question #2
	$('.hideMe').on('click', function(){
		var $this = $(this);
		$this.hide();
	});
	// Question #3
	$('.changeColor').on('click', function(){
		$('li:nth-child(3)').css('color','blue');
	});
	// Question #4
	$('#removeLi').on('click', function(){
		$('li:nth-child(2)').remove();
	});
	// Question #5
	$('li:nth-child(4)').on('click', function(){
		$(this).append($("<li>Another beneath it!</li>"));
	});
	// Question #6
	$('li:nth-child(5)').on('click', function(){
		$(this).css('font-size','40px');
		$('li').not(this).remove();
	});
	// Question #7
	$('.cute').on('click', function(){
		var n = 20;
		for(var i = 0; i < n; i++){
		    $(this).clone().appendTo('.clones');
		}
	});
	// Question #8
	$('html').dblclick(function() {
		$('#makeSquare').css('border-radius','0px');
	});
	// Question #9
	$('#dontClick').on('click', function(){
		alert('Why did you do that?!');
	});
	// Question #10
	$('.swatch').on('click', function(){
		
	});
});