$(document).ready(function(){

	
	$('#modalForm').submit(function(e){
		e.preventDefault();
		$.ajax({
			url:'https://formspree.io/o.v.smirnova1987@gmail.com',
			type:'post',
			data:$('#modalForm').serialize(),
			success:function(){
				// $('.result-form').empty();
				$('.result-form').find("p").empty();
				$(this).append('<span class="success">Данные успешно отправлены!</span>').fadeIn(3000);
				$(this).find(".success").fadeOut(3000);
			},
			error: function(){

			}
		});
	});

	
});