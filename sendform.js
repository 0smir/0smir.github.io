$(document).ready(function(){

	$('#myForm').submit(function(e){
		e.preventDefault();
		$.ajax({
			url:'https://formspree.io',
			type:'post',
			data:$('#myForm').serialize(),
			success:function(){
			}
		});
	});


});