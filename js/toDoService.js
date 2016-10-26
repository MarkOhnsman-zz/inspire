function TodoService(){
	this.getTodos =  function(){
		var t = localStorage.getItem('inspireTodo');
		if(t){
			console.log('Todo Data:', JSON.parse(t))
			return JSON.parse(t)
		}
		console.log('Todo Data:', [])
		return [];
	}
	
	this.saveTodos =  function(todos){
				//^^^ Less typical but todos should always be the entire array
		localStorage.setItem('inspireTodo', JSON.stringify(todos));
		console.log('Todo Data Saved:', todos);
	}
}