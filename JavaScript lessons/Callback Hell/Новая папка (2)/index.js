function infor(returned, callback) {
	let resume = new XMLHttpRequest();
	resume.open('GET', returned)
	resume.send();
	resume.addEventListener('readystatechange', ()=>{
		if(resume.readyState === 4 && resume.status == 200){
			callback(JSON.parse(resume.responseText), false)
		}else if(resume.status == 404){
			callback(false, "Afsuski menda ma'lumot yo'q: 404")
		}
	})
}
infor("./index.json" ,(rost, yolgon)=>{
		console.log(rost)
		infor("./app.json", (rost, yolgon)=>{
			console.log(rost)
			infor("./mobile.json", (rost, yolgon)=>{
				console.log(rost)
			})
		})
})