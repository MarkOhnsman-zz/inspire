function ImageService() {
	var iService = this
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var url3 = 'http://source.unsplash.com/category/nature/1920x1080'
	var apiUrl = url + encodeURIComponent(url2);

   	iService.getImage = function (callWhenDone) {
		return $.get(url3, function (res) {
			var image = res
			callWhenDone(image.url)
        })
    }
};
 