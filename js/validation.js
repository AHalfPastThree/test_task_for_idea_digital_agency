$(document).ready(function() {
	var form = $(".form-to-validate");

	$(form).submit(function(){
		var email = $(".email").val();
		var tel = $(".tel").val();
		if ($(this).find("input").val() == '' || $(this).find("input").val() == ' ') {
			$(this).find("input").each(function(index, e){
				if ($(e).val() == '') {
					$(e).addClass('wrong-field');
					$(e).attr("placeholder", "Поле обязательно для заполнения");
					alert($(email).typeof());
				}
			});

			return false;
		}else{

			if (tel.indexOf("+380") != -1) {
				if (email.indexOf("@") != -1) {
					
					return true;


				}else{
					$(".email").addClass('wrong-field');
					$(".email").attr("placeholder", "Неверный e-mail");

					return false;
				}
			}else{
				$(".tel").addClass('wrong-field');
				$(".tel").attr("placeholder", "Телефон должен начинаться с +380...");

				return false;
			}
		}
	});
});