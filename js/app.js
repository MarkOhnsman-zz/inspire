inspireController()

function inspireController(){
    // var iService = new ImageService();
    var qService= new QuoteService();
    var tdService = new TodoService();
    var wService = new WeatherService();
    var todoService = new TodoService();
    var todoList = todoService.getTodos();

    function updateImage(){
    var imgElem = $('body')
    document.body.style.backgroundColor = "#f3f3f3";
    imgElem.css("background-image" ,`url('http://source.unsplash.com/category/nature/1920x1080')`)
    }

    function updateQuote(res){
    var imgElem = $('#q')
    console.log(res)
    imgElem.html(`<h6>${res}</h6>`)

    }

    function updateTemp(far){
    var tempElem = $('#weather')
    console.log(far)
    tempElem.html(`<h6>${far.toFixed(0)}°F</h6>`)
    }

    if(todoList.length > 0){
		updateTodos();
	}

	function updateTodos(){
		var todoListElem = $('#todo-list');
		var template = '';

		todoList.forEach(function(item, index){
			template +=`
			<li>${item} <i class="fa fa-trash todo-delete"aria-hidden="true" id="${index}"></i></li>
			`
		})
		todoListElem.html(template)
	}

	$('#todo-form').on('submit', function(e){
		e.preventDefault();
		todoList.push($('#todo-text').val())
		$('#todo-text').val('')
		todoService.saveTodos(todoList);
		updateTodos();
	})

	$('body').on('click','.todo-delete', function(){
		var index = this.id;
		todoList.splice(index, 1);
		todoService.saveTodos(todoList);
		updateTodos();
	})

    qService.getQuote(updateQuote)
    wService.getWeather(updateTemp)
    updateImage()
}
