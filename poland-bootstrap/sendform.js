$(document).ready(function(){

	$('#myForm').submit(function(e){
		e.preventDefault();
		$.ajax({
			url:'https://formspree.io/koshechka_ma@mail.ru',
			type:'post',
			data:$('#myForm').serialize(),
			success:function(){
			}
		});
	});


});