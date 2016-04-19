$(document).ready(function(){
	$("#hover").on({
	    mouseenter: function () {
			$(this).css('background-color','red').css('transition','300ms');
	    },
	    mouseleave: function () {
			$(this).css('background-color','blue').css('transition','300ms');
	    },
	    click: function() {
		    $(this).toggleClass('green');
	    }
	});
	$('.hideMe').on('click', function(){
		var $this = $(this);
		$this.hide();
	});
	$('.changeColor').on('click', function(){
		$('li:nth-child(3)').css('color','blue');
	});
});