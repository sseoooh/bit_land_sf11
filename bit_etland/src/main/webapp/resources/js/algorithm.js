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
				/*$('body').html($$.div({id: 'test', clazz:'clazz'}))
				})*/
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
				
				$('#que_1').text('등차수열의 합계');
				$('#que_2').text('등비수열의 합계');
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
	
			})//get script끝
				
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

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	