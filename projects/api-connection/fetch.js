let fetchRead = document.getElementById('fetchRead');
fetchRead.addEventListener('click', fetchRequest);

function fetchRequest() {
	let url = 'https://jsonplaceholder.typicode.com/todos/';
	url += Math.ceil(Math.random() * 200);
	fetch(url)
		.then((response) => response.json())
		.then((data) => fetchGenerateContent(data));
}

function fetchGenerateContent(data) {
	let h3 = document.createElement("h3");
	h3.textContent = `title : ${data.title}`;
	h3.className = 'firstData';
	let p = document.createElement("p");
	p.textContent = `completed : ${data.completed}`;
	p.className = 'secondData';
	let todo = document.getElementById("todo");
	while (todo.firstChild) {
		todo.removeChild(todo.firstChild);
	}
	todo.append(h3, p);
}