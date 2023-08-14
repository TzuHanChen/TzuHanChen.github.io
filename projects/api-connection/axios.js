let axiosRead = document.getElementById('axiosRead');
axiosRead.addEventListener('click', axiosRequest);

function axiosRequest() {
	let url = 'https://jsonplaceholder.typicode.com/users/';
	url += Math.ceil(Math.random() * 10);
	axios.get(url)
		.then((response) => axiosGenerateContent(response.data));
}

function axiosGenerateContent(data) {
	let h3 = document.createElement("h3");
	h3.textContent = `name : ${data.name}`;
	h3.className = 'firstData';
	let p = document.createElement("p");
	p.textContent = `email : ${data.email}`;
	p.className = 'secondData';
	let user = document.getElementById("user");
	while (user.firstChild) {
		user.removeChild(user.firstChild);
	}
	user.append(h3, p);
}