let ajaxRead = document.getElementById('ajaxRead');
ajaxRead.addEventListener('click', ajaxRequest);

let xhr = new XMLHttpRequest();
xhr.overrideMimeType('application/json');

function ajaxRequest() {
	xhr.onreadystatechange = ajaxResponseHandler;
	let url = 'https://jsonplaceholder.typicode.com/posts/';
	url += Math.ceil(Math.random() * 100);
	xhr.open('GET', url, true);
	xhr.send();
}

function ajaxResponseHandler() {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		// 一切完成
		if (xhr.status === 200) {
			// 萬事具備
			const data = JSON.parse(xhr.responseText);
			ajaxGenerateContent(data);
		} else {
			// 其它狀況
		}
	} else {
		// 還沒完成
	}
}

function ajaxGenerateContent(data) {
	let h3 = document.createElement("h3");
	h3.textContent = `title : ${data.title}`;
	h3.className = 'firstData';
	let p = document.createElement("p");
	p.textContent = `body : ${data.body}`;
	p.className = 'secondData';
	let post = document.getElementById("post");
	while (post.firstChild) {
		post.removeChild(post.firstChild);
	}
	post.append(h3, p);
}