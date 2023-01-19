function infor(callback) {
	let resume = new XMLHttpRequest();
	resume.open('GET', "./index.json")
	resume.send();
	resume.addEventListener('readystatechange', ()=>{
		if(resume.readyState === 4 && resume.status == 200){
			callback(JSON.parse(resume.responseText), false)
		}else if(resume.status == 404){
			callback(false, "Afsuski menda ma'lumot yo'q: 404")
		}
	})
}
infor((rost, yolgon)=>{
	if(rost){
		console.log(rost)
	}else{
		console.log(yolgon)
	}
})