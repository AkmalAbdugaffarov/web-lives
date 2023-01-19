function malumot(callback) {
	const request = new XMLHttpRequest();
request.open('GET', 'https://qeirhqurh/');
request.send()
request.addEventListener('readystatechange', ()=>{
	if(request.readyState===4){
	callback(undefined, 'Malumot bor 200')
}else if(request.readyState === 4 && request.status===200){
	callback('Malumot yoq 404', undefined)
	}
})	
}
malumot((error, yolgon)=>{
	if(error == undefined){
		console.log(yolgon)
	}else if(yolgon == undefined){
		console.log(error)
	}
})