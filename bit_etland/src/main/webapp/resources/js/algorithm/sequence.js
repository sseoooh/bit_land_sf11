function sequence(){
	_sequence.nav();
	_sequence.remove();
	_sequence.question('등차수열의 합계');
			$('#right_content').prepend($$.div({id:'right_start'}));
			$('#leave_a_comment').before('<div id="right_end"/>')
			$('#right_start').nextUntil('#right_end')
			.wrapAll('<div id="new_div"></div>');
		let str = $('#new_div').html();
			$('#new_div').remove();
			$('#right_end').remove();
		let arr = [
			{id:'a' , val:'등차수열의 합계'},
			{id:'b' , val:'등비수열의 합계'},
			{id:'c' , val:'팩토리얼수열의 합계'},
			{id:'d' , val:'피보나치수열의 합계'},
			];
		$.each(arr, (i,j)=>{
			//$('#right_start').append(str);
			$(str).appendTo('#right_start')
			$('#question').attr('id','question_'+j.id);
			$('#question_'+j.id).text(j.val);
			$('.buttons').empty();
			$('<span class="label label-danger"></span>').
			text('결과').addClass('cursor').appendTo('.buttons').click(()=>{
				let data = {
						start: $('#aa').val(),
						end: $('#bb').val(),
						diff: $('#cc').val()};
				alert($('#aa').val());
				$.ajax({
					url : $.ctx()+'/algo/seq/1',
					type : 'post',
					data : JSON.stringify(data),//리턴하기 전
					dataType : 'json',
					contentType: "application/json",
					success : (d)=>{
							alert('넘어온 문제번호 :'+d.result);//d는 데이터를 뜻함
							$('#passion').html($$.h({id:'h_res',num:'2'}).text('결과값:'+d.result))
							}, 
						error : (e)=>{
						alert('AJAX 실패');
						}
				});//$.ajaxEND
			});//$('#answer_btn_1')END
		$('<span class="label label-warning style="margin-left: 20px"></span>')
		.text('리셋').addClass('cursor').appendTo('.buttons').click(()=>{
			_sequence.inputForm();
			
		});
		
			
		
		});//$.eachEND

}//sequenceEND

var _sequence = {
		remove:()=>{
			/*$('body').html($$.div({id: 'test', clazz:'clazz'}))
			})*/				
		
			$('#que_1').text('등차수열의 합계');
			/*$('#que_2').text('등비수열의 합계');*/
			$('#que_2').remove();
			/*$('#que_2').before('<div id="que_start/>');
			$('#que_3').after('<div id="que_end/>');
			$('que_start').nextUntil('que_end').wrap().remove();*/
			
			
		},
		
		nav:()=>{
			$('#nav').children().eq(0)
			.html($$.a({id: 'seq', url: '#'}).text('수열'))
			$('#nav').children().eq(1)
			.html($$.a({id: 'math', url: '#'}).text('수학'))
			$('#nav').children().eq(2)
			.html($$.a({id: 'array', url: '#'}).text('배열'))
			$('#nav').children().eq(3)
			.html($$.a({id: 'colla', url: '#'}).text('자료구조'))
			$('#nav').append($$.li({id:''}));
			$('#nav').children().eq(4)
			.html($$.a({id: 'app'}).text('응용'));
		},
		
		inputForm : ()=>{
			$('#passion').html($$.form({id:'form'})
					.append($$.div({id:'s'})
					.append($$.label({name:'b'}).text('시작값')).append($$.input({type:'text', id:'aa'}))
					.append($$.br()))					
					.append($$.div({id:'ss'})
					.append($$.label({name:'b'}).text('마지막값')).append($$.input({type:'text', id:'bb'}))
					.append($$.br()))					
					.append($$.div({id:'sss'})
					.append($$.label({name:'b'}).text('등차수열')).append($$.input({type:'text', id:'cc'}))));
		
		},
	
		
		question:(x)=>{
					
					$('#question').text(x);
					_sequence.inputForm();
					$('#reset_btn_1').text('리셋').addClass('cursor').click(()=>{
						_sequence.inputForm();
					});
					
					
					
					
		},
		
	
};
