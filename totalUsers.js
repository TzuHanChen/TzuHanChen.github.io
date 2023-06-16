function GetData() {
	const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFIGLw3THQARBNhQTVJnFXcyfOATc3nLL9Z9zXlHKjlZdWSvtT8I1IcShj3x0ARK3XmcwF9OIzoVid/pub?gid=1546155644&single=true&output=tsv";

	// 取得資料
	try {
		fetch(url)
			// 轉換成字串
			.then(response => response.text())
			.then((data) => showTotalUsers(data));
	} catch (error) {
		console.error('Error: ', error);
	}

}

function showTotalUsers(data) {
	// 字串去除換行符號
	const dataOneline = data.replaceAll('\r\n', '\t');
	
	// 利用定位鍵把字串分割成陣列
	const dataArray = dataOneline.split('\t');

	const totalUsers = dataArray[(dataArray.length - 2)];
	
	document.getElementById("totalUsers").textContent = totalUsers;
}

GetData();