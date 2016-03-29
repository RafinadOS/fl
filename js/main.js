$(function(){

    $("#phone").mask("+7 (999) 999-99-99");
    $("#captcha").mask("999");






    $('label').click(function(){

    	var atr 	= $(this).attr('for');
    	var chk1 	= $('#chk-left-1').attr('checked');
    	var chk2 	= $('#chk-right-1').attr('checked');

		$(setTimeout(function(){
			var chk12 	= $('#chk-left-2').attr('checked');
    		var chk13 	= $('#chk-left-3').attr('checked');
			if (chk12 == 'checked' && chk13 == 'checked') {
	    		$('#chk-left-1').attr('checked','checked');
	    	}
	    	else {
	    		$('#chk-left-1').removeAttr('checked');
	    	}

	    	var chk22 	= $('#chk-right-2').attr('checked');
    		var chk23 	= $('#chk-right-3').attr('checked');
			if (chk22 == 'checked' && chk23 == 'checked') {
	    		$('#chk-right-1').attr('checked','checked');
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


    	$(setTimeout(function(){

    		var chk1s 	= $('#chk-left-1').attr('checked');
    		var chk2s	= $('#chk-right-1').attr('checked');

    		console.log(chk1s,chk2s);

    		if (chk1s == 'undefined' && chk2s == 'undefined') {
    			$('.bottom .total-2').css({
    				display: 'block',
    			});
    			$('.bottom .total').removeClass('total-show');
    		}
    		else 
    		{
    			$('.bottom .total-2').css({
    				display: 'none',
    			});
    			$('.bottom .total').addClass('total-show');
    		}


    		if (chk1s == 'checked' && chk2s == 'checked') {
    			$('.bottom .total-2').css({
    				display: 'block',
    			});
    			$('.bottom .total').removeClass('total-show');
    		}
    		else 
    		{
    			$('.bottom .total-2').css({
    				display: 'none',
    			});
    			$('.bottom .total').addClass('total-show');
    		}
    	}),500);

    	$(setTimeout(function(){
			filters = [];
			$('input.val[type=\'checkbox\']:checked').each(function(element) {
				filters.push(this.value);
			});
			var arrr = filter;
			var summ = 0;
			for(var i=0;i<arrr.length;i++){
			    summ = summ + parseInt(arrr[i]);
			}

			if (summ == '3100') {
				var cont = $('input.val[type=\'checkbox\']:checked+label td:nth-child(2) span').text();
				$('.bottom__big').text(cont);

				var contm = $('input.val[type=\'checkbox\']:checked+label td:nth-child(2) b').text();
				$('.bottom__small').text(contm);
			}
			else {
				$('.bottom__big').text('ВАШ ЗАКАЗ');
				$('.bottom__small').text('');
			}
		}), 600);
    });

	$('.send').click(function(e){
		var chek1 = $('.inp').attr('value');
		var chek2 = $('.inp-2').attr('value');
		var chek3 = $('.inp-3').attr('value');

		if (chek1 == '') {
			$('.inp').css({
				border: '1px solid red',
				background: '#fbb1b1'
			});
		}
		else {
			$('.inp').css({
				border: 'none',
				background: '#ffffff'
			});
		}

		if (chek2 == '') {
			$('.inp-2').css({
				border: '1px solid red',
				background: '#fbb1b1'
			});
		}
		else {
			$('.inp-2').css({
				border: 'none',
				background: '#ffffff'
			});
		}

		if (chek3 == '') {
			$('.inp-3').css({
				border: '1px solid red',
				background: '#fbb1b1'
			});
			$('.form .captcha img').css('border-color', 'red');
		}
		else {
			$('.inp-3').css({
				border: 'none',
				background: '#ffffff'
			});
			$('.form .captcha img').css('border-color', '#907b3c');
		}
		return false;
	});
});

