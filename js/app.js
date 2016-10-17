inspireController()

function inspireController(){
    var iService = new ImageService();
    var qService= new QuoteService();
    var tdService = new TodoService();
    var wService = new WeatherService();

    function updateImage(res){
    var imgElem = $('#photo')
    console.log(res)
    document.body.style.backgroundColor = "#f3f3f3";
    imgElem.html(`<img src="${res}"/>`)
    }

    function updateQuote(res){
    var imgElem = $('#q')
    console.log(res)
    imgElem.html(`<h6>${res}</h6>`)

    }

    function updateTemp(far){
    var tempElem = $('#weather')
    console.log(far)
    tempElem.html(`<h6>${far.toFixed(2)}°F</h6>`)
    }

$('#content').on('click', 'button.newload', function(){
    iService.getImage(updateImage)
    qService.getQuote(updateQuote)
    wService.getWeather(updateTemp)
})


 


}
