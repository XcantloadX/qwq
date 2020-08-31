function using(url){
	var js = document.createElement("script");
	js.src = url;
	js.type = "text/javascript";
	document.head.appendChild(js);
}

using("http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js");