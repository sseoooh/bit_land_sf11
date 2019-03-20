var algorithm =  algorithm || {};
		algorithm =(()=>{
			let init=(x)=>{
				algorithm.$.init(x);
			};
			let onCreate=()=>{
				
				setContentView();
			};
			let setContentView=()=>{
				$.getScript($.js()+'/compo.js',()=>{
				nav();
				remove();
				question('등차수열의 합계');
				$('#right_content').prepend($$.div({id:'right_start'}));
				$('#leave_a_comment').before('<div id="right_end"/>')
				$('#right_start').nextUntil('#right_end')
					.wrapAll('<div id="new_div"></div>');
				var str = $('#new_div').html();
				$('#new_div').remove();
				$('#right_end').remove();
				let arr = [
					{id:'a' , val:'등차수열의 합계'},
					{id:'b' , val:'등비수열의 합계'},
					{id:'c' , val:'팩토리얼수열의 합계'},
					{id:'d' , val:'피보나치수열의 합계'},
					];
				$.each(arr, (i,j)=>{
						$('#right_start').append(str);
						$('#question').attr('id','question_'+j.id);
						$('#question_'+j.id).text(j.val);
					
						
				/*$.each([1,2,3],(i,j)=>{
					$('#right_start').append(str);*/
				});
				})
			};//get script끝
			
			let nav=()=>{
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
			};
			
			let question=(x)=>{
				
				$('#question').text(x);
				inputForm();
				
				$('#answer_btn_1').text('결과').addClass('cursor').click(()=>{
					$.ajax({
						url : $.ctx()+'/algo/seq/1',
						type : 'post',
						data : JSON.stringify({
							start: $('#aa').val(),
							end: $('#bb').val(),
							diff: $('#cc').val()}),//리턴하기 전
						dataType : 'json',
						contentType: "application/json",
						success : (d)=>{
							alert('넘어온 문제번호 :'+d.result);//d는 데이터를 뜻함
							$('#passion').html($$.h({id:'h_res',num:'2'}).text('결과값:'+d.result))
						}, //리턴한 후
						error : (e)=>{
							alert('AJAX 실패');
						}
					});
				});
				$('#reset_btn_1').text('리셋').addClass('cursor').click(()=>{
					inputForm();
				});
			};	
			
			let remove=()=>{
				/*$('body').html($$.div({id: 'test', clazz:'clazz'}))
				})*/				
			
				$('#que_1').text('등차수열의 합계');
				/*$('#que_2').text('등비수열의 합계');*/
				$('#que_2').remove();
				/*$('#que_2').before('<div id="que_start/>');
				$('#que_3').after('<div id="que_end/>');
				$('que_start').nextUntil('que_end').wrap().remove();*/
			};
			
		
		
		let inputForm = ()=>{
			$('#passion').html($$.form({id:'form'})
					.append($$.div({id:'s'})
					.append($$.label({name:'b'}).text('시작값')).append($$.input({type:'text', id:'aa'}))
					.append($$.br()))					
					.append($$.div({id:'ss'})
					.append($$.label({name:'b'}).text('마지막값')).append($$.input({type:'text', id:'bb'}))
					.append($$.br()))					
					.append($$.div({id:'sss'})
					.append($$.label({name:'b'}).text('등차수열')).append($$.input({type:'text', id:'cc'}))));
		};
			return {init:init,
				onCreate:onCreate};
		})();
		
		
		
	
	algorithm.$={
			init : (x)=>{
				$.getScript(x+'/resources/js/router.js',()=>{
					$.extend(new Session(x));
					algorithm.onCreate();
				})
			}
		};

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	