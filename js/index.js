$(document).ready(function(){
	$('.filter_item').click(function(){
		var filter = $(this).attr('id');
		
		if(filter == 'all'){
			$('.item').addClass('hide');
			setTimeout(function(){
				$('.item').removeClass('hide');	
			}, 300);
		} else {
			$('.item').addClass('hide');
			setTimeout(function(){
				$('.' + filter).removeClass('hide');	
			}, 300);
		}
	});
	
	$('.carousel').slick()

	$('form').submit(function(){
	var name = $.trim($('#eaddress').val());
	if(name === ''){
		alert('Please enter your email');
		return false;
	}
	var name = $.trim($('#level').val());
	if(name === ''){
		alert('Please chose the level');
		return false;
	}
	var name = $.trim($('#purpose').val());
	if(name === ''){
		alert('We need to know your goals. Pick some.');
		return false;
	}

});
	

});


