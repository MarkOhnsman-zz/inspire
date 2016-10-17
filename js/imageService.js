function ImageService() {
	var iService = this
	var url = 'http://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);
	// var image = ``

   	iService.getImage = function (callWhenDone) {
		return $.get(url2, function (res) { //will need apiUrl when pushed to GitHub
			callWhenDone(res.url)
        })
    }
};
 