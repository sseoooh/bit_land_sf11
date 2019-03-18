var $$ = $$ || {}
$$ = {
		div : (x)=>{
			return $('<div id='+x.id+'/>');//함수리터럴
		},
		a : (x)=>{
			return $('<a href="'+x.url+'" id='+x.id+'/>');
		},
		li : (x)=>{
			return $('<li id='+x.id+'/>');
		},
		o : (x)=>{
			return $('<h2 id='+x.id+'/>');
		}
		
		
}