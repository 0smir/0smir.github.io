$(document).ready(function(){

	$('#myForm').submit(function(event){
		event.preventDefault();

		$.ajax({
			url:'https://formspree.io/o.v.smirnova1987@gmail.com',
			type:'post',
			data:$('#myForm').serialize(),
			success: function(data, status, jqXHR) {
				$('.result-form').find('span').addClass('success');
			},
			error:  function(xhr, str){
				alert('Возникла ошибка: ' + xhr.responseCode);
			}
		});

	});


});