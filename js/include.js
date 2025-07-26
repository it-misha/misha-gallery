// Include and inject into html

fetch("/include/skip.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		document.querySelector("#skip").innerHTML = data;
	});

fetch("/include/back.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		document.querySelector("#back").innerHTML = data;
	});

fetch("/include/footer.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		document.querySelector("footer").innerHTML = data;
	});