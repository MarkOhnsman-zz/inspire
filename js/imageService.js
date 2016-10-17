function ImageService() {
	var iService = this
	var url = 'https://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

   	iService.getImage = function (callWhenDone) {
		return $.get(apiUrl, function (res) {
			var image = JSON.parse(res)
			callWhenDone(image.url)
        })
    }
};
 