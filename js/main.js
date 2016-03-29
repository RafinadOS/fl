$(function(){

    $("#phone").mask("+7 (999) 999-99-99");
    $("#captcha").mask("999");






    $('label').click(function(){

    	$('.total-2').hide(0);
    	$('.total').addClass('total-show')

    	var atr 	= $(this).attr('for');
    	var chk1 	= $('#chk-left-1').attr('checked');
    	var chk2 	= $('#chk-right-1').attr('checked');

		$(setTimeout(function(){
			var chk12 	= $('#chk-left-2').attr('checked');
    		var chk13 	= $('#chk-left-3').attr('checked');
			if (chk12 == 'checked' && chk13 == 'checked') {
	    		$('#chk-left-1').attr('checked','checked');
	    		$('.bottom__small').text('программа');
	    		$('.bottom__big').text('сжигание жира');
	    	}
	    	else {
	    		$('#chk-left-1').removeAttr('checked');
	    	}


	    	var chk22 	= $('#chk-right-2').attr('checked');
    		var chk23 	= $('#chk-right-3').attr('checked');
			if (chk22 == 'checked' && chk23 == 'checked') {
	    		$('#chk-right-1').attr('checked','checked');
	    		$('.bottom__small').text('шаг 2');
	    		$('.bottom__big').text('моделирование фигуры');
	    	}
	    	else {
	    		$('#chk-right-1').removeAttr('checked');
	    	}

		}), 100);

    	$(setTimeout(function(){
			filter = [];
			$('input.val[type=\'checkbox\']:checked').each(function(element) {
				filter.push(this.value);
			});

			var arr = filter;
			var sum = 0;
			for(var i=0;i<arr.length;i++){
			    sum = sum + parseInt(arr[i]);
			}
			$('.total').text(sum);
		}), 100);

		if (atr == 'chk-left-1') {
			if (chk1 == 'checked') {
				$(function(){
					$('#chk-left-2').removeAttr('checked');
					$('#chk-left-3').removeAttr('checked');

					$(setTimeout(function(){
						filter = [];
						$('input.val[type=\'checkbox\']:checked').each(function(element) {
							filter.push(this.value);
						});
						var arr = filter;
						var sum = 0;
						for(var i=0;i<arr.length;i++){
						    sum = sum + parseInt(arr[i]);
						}
						$('.total').text(sum);
					}), 100);
				});
			}
			else {
				$(function(){
					$('#chk-left-2').attr('checked', 'checked');
					$('#chk-left-3').attr('checked', 'checked');
					$(setTimeout(function(){
						filter = [];
						$('input.val[type=\'checkbox\']:checked').each(function(element) {
							filter.push(this.value);
						});
						var arr = filter;
						var sum = 0;
						for(var i=0;i<arr.length;i++){
						    sum = sum + parseInt(arr[i]);
						}
						$('.total').text(sum);
					}), 100);
				});
			}
    	}

    	if (atr == 'chk-right-1') {
			if (chk2 == 'checked') {
				$(function(){
					$('#chk-right-2').removeAttr('checked');
					$('#chk-right-3').removeAttr('checked');
					$(setTimeout(function(){
						filter = [];
						$('input.val[type=\'checkbox\']:checked').each(function(element) {
							filter.push(this.value);
						});
						var arr = filter;
						var sum = 0;
						for(var i=0;i<arr.length;i++){
						    sum = sum + parseInt(arr[i]);
						}
						$('.total').text(sum);
					}), 100);
				});
			}
			else {
				$(function(){
					$('#chk-right-2').attr('checked', 'checked');
					$('#chk-right-3').attr('checked', 'checked');
					$(setTimeout(function(){
						filter = [];
						$('input.val[type=\'checkbox\']:checked').each(function(element) {
							filter.push(this.value);
						});
						var arr = filter;
						var sum = 0;
						for(var i=0;i<arr.length;i++){
						    sum = sum + parseInt(arr[i]);
						}
						$('.total').text(sum);
					}), 100);
				});
			}
    	}
    });


});

