function WeatherService(){
    var url = '//bcw-getter.herokuapp.com/?url=';
    var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35';
    var apiUrl = url + encodeURIComponent(url2);
    this.getWeather =  function(callWhenDone){
        var w = localStorage.getItem('weather');
        if(w){
            w = JSON.parse(w);
			w = JSON.parse(w)
            console.log('Weather Data:', w)
			var far = ((w.main.temp - 273.15)* 1.8000) + 32.00
            return callWhenDone(far)
        }
        $.get(apiUrl, function(res){
            localStorage.setItem('weather', JSON.stringify(res))
			var far = ((res.main.temp - 273.15)* 1.8000) + 32.00
            callWhenDone(far);
        })
    }
}