// api
const API = 'https://randomuser.me/api/?results=9'
let loader = true;
// for leader
const overlay = document.getElementById('overlay')

// get API

const request = async(link)=>{
	if(loader){
		overlay.classList.remove('hidden')
	}
	const req = await fetch(link);
	const resul = await req.json();
	const data = await resul.results;
	loader = false;
	if(!loader){
		overlay.classList.add('hidden')
	}
	return data
}
request(API).then((data)=>{
	getUI(data);
})
